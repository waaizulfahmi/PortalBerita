// import { Link, Head } from "@inertiajs/react";
import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import Wisata from "./Wisata";
import News from "./News";
import MainNews from "../MainNews";

const ShowNews = () => {
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head />
            <Navbar />
            {/* <MainNews /> */}
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                {/* <MainNews /> */}
                {/* <SideNews /> */}
            </div>
            <div className="mb-8">
                <Wisata />
            </div>
            {/* <News/> */}
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <NewsList />
            </div>
            <div className="flex justify-center items-center gap-5">
                {/* <Paginator /> */}
            </div>
            <Footer />
        </div>
    );
};

export default ShowNews;
