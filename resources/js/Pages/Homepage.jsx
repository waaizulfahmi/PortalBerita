import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import { useNavigate } from "react-router-dom";
import MainNews from "./MainNews";
import ListNewsRow from "./NewsListRow";
import TravelsNews from "./TravelsNews";
import RegionalNews from "./RegionalNews";
import ProfileNews from "./ProfileNews";
import NewNews from "./NewNews";
import BeritaBisnis from "./BeritaBisnis";
import NewDesain from "./NewDesain";
import NewGrid from "./NewGrid";
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
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <NewNews news={props.news.data} />
            </div>
            <hr className="my-3 border-3" />
           
            <u>
                <h1 className="text-black mt-4 lg:mb-8 mb-4 lg:text-2xl sm:text-xl text-left font-bold lg:ml-28 ml-3 sm:ml-12 md:ml-9">
                    Berita Terbaru
                </h1>
            </u>
            <NewDesain />
            <div className="flex justify-center lg:mt-6 sm:mt-4 items-center gap-5">
                <Paginator meta={props.news.meta} />
            </div>
            <hr className="mt-4 md:mt-6 lg:mt-6" />
            <u>
                <a href="">
                    <h1 className="text-black text-lg mb-5 mt-4 ml-3 md:ml-28 lg:ml-30 lg:text-2xl md:text-xl font-bold">
                        Berita Olahraga
                    </h1>
                </a>
            </u>
            <NewGrid />
            <hr className="mt-4 md:mt-6 lg:mt-6"/>
            <u>
                <h1 className="text-black mt-4 mb-3  lg:text-2xl sm:text-xl text-left font-bold ml-4 md:ml-6 lg:ml-28">
                    Berita Mancanegara
                </h1>
            </u>
            <div dir="rtl">
                <Link href={route("shownews")} as="button">
                    <u>
                        <button className="flex mr-4 lg:mr-28">
                            Lihat Berita Lainnya
                        </button>{" "}
                    </u>
                </Link>
            </div>
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <NewsList news={props.news.data} />
            </div>
            <hr className="mt-4 md:mt-6 lg:mt-6"/>
            <u>
                <h1 className="text-black mt-4 mb-6  lg:text-2xl sm:text-xl text-left font-bold ml-4 md:ml-6 lg:ml-28">
                    Berita Wisata
                </h1>
            </u>
            <ListNewsRow />
            {/* <MainNews/> */}
            {/* <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <ProfileNews news={props.news.data} />
            </div> */}
            {/* <MainNews/> */}

            {/* <hr />
            <u>
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
            </div>

            <hr/>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <ProfileNews news={props.news.data} />
            </div>
            <BeritaBisnis/>
            <hr />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <RegionalNews news={props.news.data} />
            </div>
            <hr /> */}

            
             
            {/* <button className="btn" onClick={routeChange}>
                Link to ShowNews
            </button> */}

            <Footer />
        </div>
    );
}
