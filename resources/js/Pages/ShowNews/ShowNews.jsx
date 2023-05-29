// import { Link, Head } from "@inertiajs/react";
import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import NewsListRow from "../NewsListRow";
// import NewsListRow from "@Components/Homepage/NewsListRow";
import Category from "./Category";
import News from "./News";
import MainNews from "../MainNews";

const ShowNews = (props) => {
    console.log(props);
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            {/* <MainNews /> */}
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                {/* <MainNews /> */}
                <h1 className="justify-left text-left text-xl pt-8 pb-5">
                    Menampilkan Artikel dengan Kategori : {props.title}
                </h1>
                <div className="container grid grid-cols-1 gap-8 mt-8 md:mt-8 md:grid-cols-2">
                    <Category news={props.news} />
                </div>
                {/* <SideNews /> */}
            </div>

            {/* <News/> */}
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                {/* <NewsListRow /> */}
            </div>
            <Footer />
        </div>
    );
};

export default ShowNews;
