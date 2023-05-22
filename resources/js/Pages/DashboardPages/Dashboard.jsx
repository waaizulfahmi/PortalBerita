import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Tiptap from "@/Layouts/dashboard-assets/TiptapEdit";
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
                <div className="stats shadow items-center">
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

            <section>
                <div class="flex justify-center bg-gray-100 py-10 p-14">
                    <div class="container mx-auto pr-4">
                        <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                            <div class="h-20 bg-red-400 flex items-center justify-between">
                                <p class="mr-0 text-white text-lg pl-5">
                                    BT SUBSCRIBERS
                                </p>
                            </div>
                            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                                <p>TOTAL</p>
                            </div>
                            <p class="py-4 text-3xl ml-5">20,456</p>
                        </div>
                    </div>
                    <div class="container mx-auto pr-4">
                        <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                            <div class="h-20 bg-blue-500 flex items-center justify-between">
                                <p class="mr-0 text-white text-lg pl-5">
                                    BT ACTIVE SUBSCRIBERS
                                </p>
                            </div>
                            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                                <p>TOTAL</p>
                            </div>
                            <p class="py-4 text-3xl ml-5">19,694</p>
                        </div>
                    </div>
                    <div class="container mx-auto pr-4">
                        <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                            <div class="h-20 bg-purple-400 flex items-center justify-between">
                                <p class="mr-0 text-white text-lg pl-5">
                                    BT OPT OUTS
                                </p>
                            </div>
                            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
                                <p>TOTAL</p>
                            </div>
                            <p class="py-4 text-3xl ml-5">711</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center bg-gray-100 py-10 p-5">
                    <div class="container mr-5 ml-2 mx-auto bg-white shadow-xl">
                        <div class="w-11/12 mx-auto">
                            <div class="bg-white my-6">
                                <table class="text-left w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th class="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                                KEYWORDS
                                            </th>
                                            <th class="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                                TOTAL ENTERIES
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                Bible
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                11980
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                Blah
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                340
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                Blah
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                901
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                Blah
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                11950
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                Blah
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                459
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="container mr-5 mx-auto bg-white shadow-xl">
                        <div class="w-11/12 mx-auto">
                            <div class="bg-white my-6">
                                <table class="text-left w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th class="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                                MSISDN
                                            </th>
                                            <th class="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                                ENTRIES
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                26809304030
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                495,455
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                26809304030
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                495,455
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                26809304030
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                495,455
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                26809304030
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                32,333
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                26809304030
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                31,199
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto bg-white shadow-xl">
                        <div class="w-11/12 mx-auto">
                            <div class="bg-white my-6">
                                <table class="text-left w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th class="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                                MSISDN
                                            </th>
                                            <th class="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                                POINTS
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                28679609009
                                            </td>
                                            <td class="py-4 text-center px-6 border-b border-grey-light">
                                                11,290
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                28679609009
                                            </td>
                                            <td class="py-4 text-center px-6 border-b border-grey-light">
                                                9,230
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                28679609009
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                234
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                28679609009
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                56,230
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                28679609009
                                            </td>
                                            <td class="py-4 px-6 text-center border-b border-grey-light">
                                                323
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
