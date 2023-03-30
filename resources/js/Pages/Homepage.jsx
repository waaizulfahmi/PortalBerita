import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import MainNews from "./MainNews";
import ListNewsRow from "./NewsListRow";
import NewNews from "./NewNews";
import NewsProfile from "./NewsProfile";
import Rekomendation from "./Rekomendation";



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
            <u>
            <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold ml-36">
                Rekomendasi Untuk Anda
            </h1></u>
            <div dir="rtl">
            <u>
            <Link to="ShowNews">
                <button className="flex justify-center mr-36 p-0">Lihat Berita Lainnya</button>
            </Link></u>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <Rekomendation news={props.news.data} />
            </div>

            <u>
            <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold ml-36">
                Berita Kuliner
            </h1></u>
            <div dir="rtl">
            <u>
            <Link to="ShowNews">
                <button className="flex justify-center mr-36 p-0">Lihat Berita Lainnya</button>
            </Link></u>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <NewNews news={props.news.data} />
            </div>
            
            <u>
            <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold ml-36">
                Profile
            </h1></u>
            <div dir="rtl">
            <u>
            <Link to="ShowNews">
                <button className="flex justify-center mr-36 p-0">Lihat Berita Lainnya</button>
            </Link></u></div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <NewsProfile news={props.news.data} />
            </div>

            <h1 className="text-black p-4 lg:text-2xl  sm:text-xl ml-36">
                Berita Olahraga 1
            </h1>
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <NewsList news={props.news.data} />
            </div>
            

            <h1 className="text-black p-4 lg:text-2xl  sm:text-xl ml-36 mt-10 font-bold">
                Berita Olahraga
            </h1>
            <div dir="rtl">
            <u>
            <Link to="ShowNews">
                <button className="flex justify-center mr-36 p-0">sasa</button>
            </Link></u></div>
            <ListNewsRow />
            <div className="flex justify-center items-center gap-5">
                <Paginator meta={props.news.meta} />
            </div>
            
            <Footer />
        </div>
    );
}
