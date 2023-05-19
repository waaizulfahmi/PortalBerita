// import { Link, Head } from "@inertiajs/react";
import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import NewsListRow from "../NewsListRow";
// import NewsListRow from "@Components/Homepage/NewsListRow";
import Wisata from "./Category";
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
                {/* <SideNews /> */}
            </div>
            <div className="mb-8">
                <Wisata news={props.news.data} />
            </div>
            {/* <News/> */}
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                {/* <NewsListRow /> */}
            </div>
            <div className="flex justify-center items-center gap-5">
                {/* <Paginator /> */}
            </div>
            <Footer />
        </div>
    );
};

export default ShowNews;
