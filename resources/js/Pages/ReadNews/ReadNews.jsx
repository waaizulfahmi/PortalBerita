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
import AsideRead from "./AsideRead";

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
            <div className="mx-auto md:mx-auto md:container xl:container">
                <div className="box-border flex-wrap lg:flex ">
                    <div className="row-span-3 my-1 md:2/4 lg:w-3/5">
                        <Read news={props.myNews} />
                    </div>
                    <aside className="invisible lg:visible w-full mt-5 md:1/4 lg:w-2/5">
                        <AsideRead category={props.total_category} />
                    </aside>
                </div> 
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
                {/* <BeritaTerkait /> */}
            </div>
            <div className="container">
                <u>
                    <a href="#"></a>
                </u>
            </div>
            <div className="flex justify-center flex-col xl:container lg:container xl:mx-auto md:flex-wrap md:ml-1 md:mr-1 lg:ml-8 lg:flex-wrap item-center items-strech mt-3 p-2 lg:p-0">
                <InputComment news={props.myNews} />
                <div className="sm:ml-2 sm:mr-2 sm:mt-2 md:mt-3 md:ml-3  md:mr-3 md:mx-auto lg:w-3/5 xl:w-3/5 lg:ml-3 lg:mr-0 lg:p-0">
                    <div className="comment p-1 sm:p-0 ">
                        <div className="rounded-md bg-gray-300 p-2">
                            <div class="antialiased mx-auto ml-3 mr-3 max-w-screen ">
                                <div className="space-y-1">
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
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3 md:ml-1 md:mr-1">
                <div className=" mt-10 p-1 sm:p-2 md:p-3  lg:container lg:p-3">
                    <h1 className="text-black lg:mt-3 lg:ml-3 ml-2  lg:mb-3 mb-3 lg:text-2xl xl:text-2xl text-lg underline sm:text-xl md:text-xl font-bold mt-6">
                        Artikel Rekomendasi
                    </h1>
                    <div class="grid grid-cols-2 gap-4 xl:grid-cols-5 xl:gap-4 lg:grid-cols-3 lg:gap-6 md:grid-cols-3 grid-cols-2 sm:grid-cols-3 sm:gap-3 gap-2 items-left justify-left lg:mr-2 ml-2 mr-2 ">
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
