// import { Link, Head } from "@inertiajs/react";
import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import Read from "./Read";
import BeritaTerkait from "./BeritaTerkait";
import BeritaRekomendasi from "./BeritaRekomendasi";
import Coment from "./Coment";
import InputComment from "./InputComment";

const ReadNews = (props) => {
    console.log(props.recommend);
    console.log(props.myNews);
    console.log(props.comments);
    const str = props.myNews.title;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);

    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={str2} />
            <Navbar />
            <Read news={props.myNews} />

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
                {/* <BeritaTerkait /> */}
            </div>
            <div className="container">
                <u>
                    <a href="#"></a>
                </u>
            </div>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mt-6">
                <InputComment news={props.myNews} />
                <div className="container mx-auto">
                    <div className="comment md:w-3/5">
                        <div className="rounded-md bg-base-200 p-3">
                            <div class="antialiased mx-auto ml-3 mr-3 max-w-screen ">
                                <div className="space-y-2">
                                    <Coment
                                        comments={props.comments}
                                        news={props.myNews}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
                <div className="container mt-10 m-5">
                    <h1 className="text-black lg:mt-3 lg:ml-3 ml-2  lg:mb-3 mb-3 lg:text-2xl text-base md:text-xl font-bold mt-6">
                        Artikel Rekomendasi
                    </h1>
                    <div class="grid grid-cols-3 lg:gap-3 gap-2 place-content-start lg:mr-2 lg:ml-3 ml-2 mr-2 ">
                        <BeritaRekomendasi news={props.recommend.data} />
                    </div>
                </div>
            </div>

            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                {/*<NewsList />*/}
            </div>
            <div className="flex justify-center items-center gap-5">
                {/* <Paginator /> */}
            </div>
            <Footer />
        </div>
    );
};

export default ReadNews;
