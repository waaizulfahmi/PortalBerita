import React, { useState, useEffect } from "react";
import { Link, Head, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import TiptapEdit from "@/Layouts/dashboard-assets/TiptapEdit";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditNews(props) {
    console.log(props);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);
    const [image, setImage] = useState("");

    const image2 = props.myNews.image;
    const myArray = image2.split("/");
    const image3 = myArray[1];

    // document.getElementById("demo").innerHTML = myArray[1];
    console.log(myArray);
    console.log(image3);

    const sendDesc = (data) => {
        setDescription(data);
    };

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
            image,
        };
        router.post("/dashboard/update", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
        setImage("");
        data.preventDefault();
    };
    useEffect(() => {
        setTitle(props.myNews.title);
        setCategory(props.myNews.category);
        setDescription(props.myNews.description);
        setImage(props.myNews.image);
    }, []);
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            {/* <Head>Post</Head> */}
            <div>
                <Head title="Edit Postingan"></Head>
                <div className="py-6">
                    <div className="max-w-7xl mx-auto my-2 sm:px-6 lg:px-8">
                        <h1 className="text-3xl text-black pb-6 mb-10">
                            Edit Postingan
                        </h1>
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
                        <form action=""></form>
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
                                name="title"
                                className="m-2 input input-info w-full "
                                defaultValue={props.myNews.title}
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                                // onChange={(e) =>
                                //     this.setTitle({ title: e.target.value })
                                // }lis

                                // value={title}
                                // required
                            />
                        </div>

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
                                <TiptapEdit
                                    desc={props.myNews.description}
                                    onChange={(description) =>
                                        setDescription(description.target.value)
                                    }
                                    setNewDesc={sendDesc}
                                    // value={description}
                                    required
                                />
                            </div>
                        </div>

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
                                // value={e.}
                                defaultValue={props.myNews.category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option disabled selected>
                                    <b>Pilih Kategori</b>
                                </option>
                                <option value="Berita">Berita</option>
                                <option value="Olahraga">Olahraga</option>
                                <option value="Wisata">Wisata</option>
                                <option value="Kuliner">Kuliner</option>
                                <option value="Bisnis">Bisnis</option>
                                <option value="Daerah">Daerah</option>
                                <option value="Nasional">Nasional</option>
                                <option value="Mancanegara">Mancanegara</option>
                            </select>
                        </div>
                        {/* <input
                        type="file"
                        className="file-input file-input-bordered file-input-info w-full max-w-xs"
                    /> */}
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text">
                                    Tambahkan Gambar Berita
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
                                        name="image"
                                        // src={("/storage/", props.myNews.image)}
                                        onChange={(image) =>
                                            setImage(image.target.files[0])
                                        }
                                        className="file-input file-input-bordered file-input-info  visible"
                                        // defaultValue={image3}
                                        // value={image3}
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
            </div>
        </AuthenticatedLayout>
    );
}
