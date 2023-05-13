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

const ReadNews = () => {
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head />
            <Navbar />
            <Read />
            <hr />
<<<<<<< HEAD
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
                <BeritaTerkait />
            </div>

            <hr />

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
                <BeritaRekomendasi />
            </div>
=======
            {/* <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
            <BeritaTerkait/>
            </div> */}

            <hr />
            
            {/* <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
            <BeritaRekomendasi/>
            </div> */}
>>>>>>> 1d6993b197d20f6fc6dffdb1ba3a7c17474dfbee
            <hr />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mt-6">
                <Coment />
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
