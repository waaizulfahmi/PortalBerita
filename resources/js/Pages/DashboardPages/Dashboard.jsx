import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Tiptap from "@/Layouts/dashboard-assets/Tiptap";
import parser from "html-react-parser";
import { BiEdit } from "react-icons/bi";
import SelectForm from "@/Layouts/dashboard-assets/SelectForm";

export default function Dashboard(props) {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [category, setCategory] = useState();
    // const [isNotif, setIsNotif] = useState(false);
    // const [image, setImg] = useState();
    // const handleSubmit = () => {
    //     const data = {
    //         title,
    //         description,
    //         category,
    //         image,
    //     };
    //     router.post("/news", data);
    //     setIsNotif(true);
    //     setTitle("");
    //     setDescription("");
    //     setCategory("");
    //     setImg("");
    // };

    // useEffect(() => {
    //     if (!props.myNews) {
    //         // router.get("/dashboard");
    //         router.get("/dashboard/post");
    //     }

    //     console.log("props", props);
    //     return;
    // }, []);
    // console.log("props last", props);

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
            </section>
        </AuthenticatedLayout>
    );
}
