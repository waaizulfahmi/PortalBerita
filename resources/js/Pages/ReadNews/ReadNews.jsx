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
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <BeritaTerkait />
            </div>

            <hr />

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center">
                <BeritaRekomendasi />
            </div>

=======
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
            <BeritaTerkait/>
            </div>

            <hr />
            
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mb-3">
            <BeritaRekomendasi/>
            </div>
            <hr />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap item-center mt-6">
            <Coment/>
            </div>
            
>>>>>>> 313dbbd2fd1642089dd1f9dcd763f8e3acd1ec12
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
