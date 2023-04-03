import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar"; 
import Footer from "@/Components/Footer";
import wisata from "@/Components/ShowNews";
import News from "./News";


export default function Home(props) {
    console.log(props);
    return (
        <div className=" min-h-screen bg-slate-50">
        <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Wisata/>
            <News/>
            <Footer />
            </div>
        )
    }