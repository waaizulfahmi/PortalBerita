import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import { useNavigate } from "react-router-dom";
import MainNews from "./MainNews";
import NewsListRow from "./NewsListRow";
import TravelsNews from "./TravelsNews";
import RegionalNews from "./RegionalNews";
import ProfileNews from "./ProfileNews";
import NewNews from "./NewNews";
import BeritaBisnis from "./BeritaBisnis";
// import ShowNews from "./ShowNews";

export default function Homepage(props) {
    console.log(props);

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = "./ShowNews";
    //     navigate(path);
    // };
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {/*<MainNews />*/}
            {/* <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 static">
                <MainNews />
            </div> */}
            <MainNews />
            <hr />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <NewNews news={props.news.data} />
            </div>
            <hr />
            <u>
                <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold ml-32">
                    Berita Wisata
                </h1>
            </u>
            <div dir="rtl">
                <Link href={route("shownews")} as="button" />
                <MainNews />
                <hr />
                {/* <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <NewNews news={props.news.data} />
            </div>
            <hr /> */}
                {/* <u>
                    <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold ml-32">
                        Berita Wisata
                    </h1>
            <div dir="rtl">
                    <Link href={route('shownews')} as="button">
                        <button className="flex justify-center mr-40 mb-3 p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Lihat Berita Lainnya
                        </button>
                    </Link>
                </div>
            </u>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <TravelsNews news={props.news.data} />
            </div> */}

                <hr />
                {/* <hr/>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <ProfileNews news={props.news.data} />
            </div> */}
                {/* <BeritaBisnis/> */}
                {/* <hr />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                {/* <RegionalNews news={props.news.data} /> */}
            </div>
            <hr />
            <u>
                <h1 className="text-black mt-4 mb-3  lg:text-2xl sm:text-xl text-left font-bold ml-32">
                    Berita Mancanegara
                </h1>
            </u>
            {/* <div dir="rtl">
                <u>
                    <Link href={route("shownews")} as="button">
                        <button className="flex justify-center mr-36 p-0">
                            Lihat Berita Lainnya
                        </button>
                    </Link>
                </u>
            </div> */}
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <NewsList news={props.news.data} />
            </div>
            <hr />
            <u>
                <Link href={route("readnews")} as="button">
                    <h1 className="text-black p-5 lg:text-2xl sm:text-xl font-bold ml-32">
                        Berita Nasional
                    </h1>
                </Link>
                <h1 className="text-black mt-4 mb-3  lg:text-2xl sm:text-xl text-left font-bold ml-32">
                    Berita Nasional
                </h1>
            </u>
            <NewsListRow news={props.news.data} />
            {/* <button className="btn" onClick={routeChange}>
                Link to ShowNews
            </button> */}
            <div className="flex justify-center items-center gap-5">
                <Paginator meta={props.news.meta} />
            </div>
            <Footer />
        </div>
    );
}
