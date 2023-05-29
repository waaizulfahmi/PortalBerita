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
import Page from "./page";

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
            <div>
                <u>
                    <h5 className="font-bold text-xl mb-3 ml-2 lg:mb-8 lg:ml-28 lg:text-2xl">
                        Berita Mancanegara
                    </h5>
                </u>
            </div>
            <div className="container mx-auto grid lg:grid-cols-2 lg:gap-10 gap-5">
                <Category news={props.news} />
                <aside />
            </div>
            <div className="flex justify-center items-center gap-5 mt-4">
                <Page />
            </div>

            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                {/* <NewsListRow /> */}
            </div>
            <Footer />
        </div>
    );
};

export default ShowNews;
