import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Tiptap from "@/Layouts/dashboard-assets/TiptapEdit";
import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import parser from "html-react-parser";
import { Head, Link } from "@inertiajs/react";
import { BiEdit } from "react-icons/bi";

const ListPage = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState();
    const [isNotif, setIsNotif] = useState(false);
    const [image, setImg] = useState();
    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
            image,
        };
        router.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
        setImg("");
    };

    useEffect(() => {
        if (!props.myNews) {
            // router.get("/dashboard");
            router.get("/dashboard/list/show");
        }

        console.log("props", props);
        return;
    }, []);
    console.log("props last", props);

    let tb_data =
        props.myNews && props.myNews.length > 0 ? (
            props.myNews.map((news, i) => {
                return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{news.author}</td>
                        <td>
                            {news.title.substring(0, 20) + "..."}
                            <br />
                            <span className="badge badge-info badge-sm text-white ">
                                {news.category}
                            </span>
                        </td>
                        <td>
                            {parser(news.description.substring(0, 50) + "...")}
                        </td>
                        <td>{news.slug.substring(0, 30) + "..."}</td>
                        <td>
                            <div className="btn btn-info btn-xs mx-2">
                                <Link
                                    href={route("edit.news")}
                                    method="get"
                                    data={{ id: news.id }}
                                    as="button"
                                >
                                    <div>
                                        {/* <i className="fa-light fa-pen-to-square"></i> */}
                                        EDIT
                                    </div>
                                </Link>
                            </div>
                            <div className="btn btn-warning btn-xs">
                                <Link
                                    href={route("delete.news")}
                                    method="post"
                                    data={{ id: news.id }}
                                    as="button"
                                >
                                    DELETE
                                </Link>
                            </div>
                        </td>
                        <th>
                            <a
                                href={route("read", { slug: news.slug })}
                                className="btn btn-ghost btn-xs"
                            >
                                details
                            </a>
                        </th>
                    </tr>
                );
            })
        ) : (
            <p>Data Belum tersedia</p>
        );

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Berita Saya (Testing)
                </h2>
            }
        >
            <Head title="Daftar Postingan"></Head>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Penulis</th>
                            <th>Judul</th>
                            <th>Deskripsi</th>
                            <th>Slug</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    {/* head */}
                    <tbody>{tb_data}</tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default ListPage;
