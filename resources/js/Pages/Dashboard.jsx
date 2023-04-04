import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Tiptap from "@/Layouts/dashboard-assets/Tiptap";
import parser from "html-react-parser";
import { BiEdit } from "react-icons/bi";
import SelectForm from "@/Layouts/dashboard-assets/SelectForm";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState();
    const [isNotif, setIsNotif] = useState(false);
    // const [desc, setDesc] = useState("");
    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            // router.get("/dashboard");
            router.get("/news");
        }

        console.log("props", props);
        return;
    }, []);
    console.log("props last", props);

    // const handleChangeSelect = (selectedOption) => {
    //     setCategory(selectedOption);
    //     console.log(`Option selected:`, selectedOption);
    // };

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
            <section id="#home">
                <Head title="Dashboard" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">
                            21% more than last month
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">
                            21% more than last month
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">
                            31 tasks remaining
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto my-2 sm:px-6 lg:px-8">
                        <div>
                            {isNotif && (
                                <div className="alert alert-info shadow-lg">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="stroke-current flex-shrink-0 w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className=" w-full mb-5">
                            <label className="label">
                                <span className="label-text">
                                    Tambahkan Judul Berita
                                </span>
                                <span className="label-text-alt text-error">
                                    *harus diisi
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Judul"
                                className="m-2 input input-info w-full "
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                            />
                        </div>

                        {/* <div className="ProseMirror">{parser(desc)}</div> */}
                        {/* <input
                            type="text"
                            placeholder="Deskripsi"
                            className="m-2 input input-bordered w-full "
                            value={description}
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                        /> */}
                        <div className=" w-full mb-5">
                            <label className="label">
                                <span className="label-text">
                                    Tambahkan Deskripsi Berita
                                </span>
                                <span className="label-text-alt text-error">
                                    *harus diisi
                                </span>
                            </label>
                            <div className="m-2 w-full">
                                <Tiptap
                                    setDesc={setDescription}
                                    value={category}
                                    onChange={(category) =>
                                        setDescription(category.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* <input type="text" /> */}
                        {/* <SelectForm onChange={handleChangeSelect} /> */}
                        {/* <input
                            type="text"
                            placeholder="Kategori"
                            className="m-2 input input-bordered w-full "
                            value={category}
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                        /> */}
                        <div className=" form-control w-full max-w-xs mb-5 ">
                            <label className="label">
                                <span className="label-text">
                                    Tambahkan Kategori Berita
                                </span>
                                <span className="label-text-alt text-error">
                                    *harus diisi
                                </span>
                            </label>
                            <select
                                className="m-2 select select-info w-full max-w-xs"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option disabled selected>
                                    <b>Pilih Kategori</b>
                                </option>
                                <option>Berita</option>
                                <option>Olahraga</option>
                                <option>Wisata</option>
                                <option>Kuliner</option>
                                <option>Profile</option>
                                <option>Bisnis</option>
                                <option>Daerah</option>
                                <option>Nasional</option>
                                <option>Mancanegara</option>
                            </select>
                        </div>
                        {/* <input
                            type="file"
                            className="file-input file-input-bordered file-input-info w-full max-w-xs"
                        /> */}
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text">
                                    Tambahkan Judul Berita
                                </span>
                                <span className="label-text-alt text-error">
                                    *harus diisi
                                </span>
                            </label>
                            <div className="flex items-center justify-center w-full m-2">
                                <label
                                    for="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-info border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            aria-hidden="true"
                                            className="w-10 h-10 mb-3 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            ></path>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="file-input file-input-bordered file-input-info  visible"
                                        accept="image/*"
                                    />
                                </label>
                            </div>
                        </div>

                        <button
                            className="m-2 btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
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
            </section>
        </AuthenticatedLayout>
    );
}
