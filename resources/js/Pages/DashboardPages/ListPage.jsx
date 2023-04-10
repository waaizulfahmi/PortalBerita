import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Tiptap from "@/Layouts/dashboard-assets/Tiptap";
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
            <div>
                <div className="p-5">Berita Saya</div>
                <div className="p-4">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <div
                                    className="card w-full  lg:w-96 bg-base-100 shadow-xl m-3"
                                    key={i}
                                >
                                    <figure>
                                        {/* <img src= alt="Shoes" /> */}
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {news.title}
                                            <div className="badge badge-secondary"></div>
                                        </h2>
                                        <p>{parser(news.description)}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                {news.category}
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("edit.news")}
                                                    method="get"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                >
                                                    <div>
                                                        <i className="fa-light fa-pen-to-square"></i>
                                                        edit
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("delete.news")}
                                                    method="post"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                >
                                                    delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Data Belum tersedia</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ListPage;
