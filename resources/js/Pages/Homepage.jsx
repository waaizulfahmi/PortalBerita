import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import MainNews from "./MainNews";
import ListNewsRow from "./ListNewsRow";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {/* <MainNews /> */}
            {/* <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 static">
                <MainNews />
            </div> */}
            <h1 className="text-black p-4 lg:text-2xl  sm:text-xl ml-14">
                Berita Olahraga
            </h1>
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <NewsList news={props.news.data} />
            </div>
            <h1 className="text-black p-4 lg:text-2xl  sm:text-xl ml-14 mt-10">
                Berita Olahraga
            </h1>
            <ListNewsRow />
            <div className="flex justify-center items-center gap-5">
                <Paginator meta={props.news.meta} />
            </div>
            <Footer />
        </div>
    );
}
