import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Footer from "@/Components/Footer";
import MainNews from "./MainNews";
import ListNewsRow from "./NewsListRow";
import TravelsNews from "./TravelsNews";
import RegionalNews from "./RegionalNews";
import ProfileNews from "./ProfileNews";


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
            <hr />
            <u>
                <a href="Wisata"><h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold ml-36">
                    Berita Wisata
                </h1></a>
            </u>
            <div dir="rtl">
                <u>
                    <Link to="ShowNews">
                        <button className="flex justify-center mr-36 p-0">
                            Lihat Berita Lainnya
                        </button>
                    </Link>
                </u>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <TravelsNews news={props.news.data} />
            </div>


           <hr />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <ProfileNews news={props.news.data} />
            </div>
            <hr />
          
            
            <hr />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <RegionalNews news={props.news.data} />
            </div>


            <hr />
            <u><h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold ml-36">
                Berita Mancanegara
            </h1></u>
            <div dir="rtl">
                <u>
                    <Link to="ShowNews">
                        <button className="flex justify-center mr-36 p-0">
                            Lihat Berita Lainnya
                        </button>
                    </Link>
                </u>
            </div>
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <NewsList news={props.news.data} />
            </div>


            <hr />
            <u><h1 className="text-black p-5 lg:text-2xl sm:text-xl font-bold ml-36">
                Berita Nasional
            </h1></u>
            <ListNewsRow />
            <div className="flex justify-center items-center gap-5">
                <Paginator meta={props.news.meta} />
            </div>

            <Footer />
        </div>
    );
}
