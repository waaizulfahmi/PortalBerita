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

            <form
                class="flex items-center"
                method="get"
                action="/dashboard/search"
            >
                <label for="simple-search" class="sr-only">
                    Cari Data Disini...
                </label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        name="search"
                        id="simple-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                    />
                </div>
                <button
                    type="submit"
                    class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>

            {/* <form action="/dashboard/search" method="get">
                <input
                    type="search"
                    name="search"
                    placeholder="Cari Data..."
                    className="input input-bordered w-full max-w-xs mr-4 mb-5"
                />
                <button className="btn btn-square btn-outline m">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </form> */}
            <div className="overflow-x-auto w-full mt-5">
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
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn">
                open modal
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                </div>
                <div className="modal-action">
                    <a href="#" className="btn">
                        Yay!
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ListPage;
