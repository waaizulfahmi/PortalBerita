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

const ReadNews = (props) => {
    console.log(props.myNews);
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

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
                {/* <BeritaRekomendasi /> */}
            </div>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mt-6">
                {/* <Coment /> */}
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
