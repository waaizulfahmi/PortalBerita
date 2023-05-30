import { Link } from "@inertiajs/react";
import parser from "html-react-parser";
import { useState, useEffect } from "react";
import { render } from "react-dom";

const Read = (props) => {
    // console.log(Object.keys(news));
    const [copySuccess, setCopySuccess] = useState("");

    async function copyToClip() {
        await navigator.clipboard.writeText(location.href);
        alertCopy();
        setCopySuccess("Copied");
    }

    const alertCopy = () => {
        render(
            <div className="alert alert-info shadow-lg">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current flex-shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>{copySuccess}</span>
                </div>
            </div>
        );
    };

    console.log(props.news);
    const dateString = props.news.created_at;
    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("id", options);
    };

    // const title = [];
    // title = Object.values(news);
    // console.log(title);
    // console.log(news);
    return (
        <div className="container mx-auto ">
            <div className="box-border flex flex-wrap ">
                <div className="row-span-3 my-5 md:w-3/5">
                    <div className="text-sm breadcrumbs ml-3">
                        <ul>
                            <li>
                                <Link href="/">Beranda</Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: props.news.category,
                                    })}
                                >
                                    {props.news.category}
                                </Link>
                            </li>
                            <li>{props.news.title}</li>
                        </ul>
                    </div>
                    <h5 className="text-gray-500 mb-4 ml-2">
                        {props.news.category}
                    </h5>
                    <h1 className="font-bold lg:text-4xl text-2xl lg:mb-3 mb-2 ml-2">
                        {props.news.title}
                    </h1>
                    <p className="text-gray-500 lg:mb-5 mb-3 ml-2">
                        <small>
                            {props.news.author}
                            <u className="ml-3">
                                {formatDate(dateString)}
                            </u>{" "}
                        </small>
                    </p>
                    <div className="flex justify-end lg:space-x-2 space-x-1 lg:mt-8 lg:mb-2">
                        <div>
                            <div className="avatar">
                                <div className="lg:w-8 w-5 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <a href="https://www.instagram.com/panelwarta/">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10097/10097034.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="lg:w-8 w-5 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <a href="">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10091/10091734.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="lg:w-8 w-5 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <a href="">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10097/10097344.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="lg:w-8 w-5 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <a href="">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1599/1599019.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="lg:w-8 w-5 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <a href="">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10096/10096611.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input
                                type="button"
                                className="btn btn-active btn-ghost btn-xs lg:btn-sm mr-3"
                                value="Copy Url"
                                onClick={copyToClip}
                            />
                        </div>
                    </div>
                    <div>
                        <img
                            src={"/storage/" + props.news.image}
                            className="p-2 h-56 w-full lg:h-96 lg:w-full lg:mb-4 mb-3"
                        />
                        <a href="#!"></a>
                    </div>
                    {/* <div class="box-border h-80 w-50 border-0 mb-10">
                    </div> */}
                    <p className="lg:text-lg text-sm lg:ml-3 ml-2 lg:mb-14 mb-8 lg:mr-3 mr-2">
                        {/* <a className="font-bold">
                                PanelWarta, Purwokerto -{" "}
                            </a>{" "} */}
                        {parser(props.news.description)}
                    </p>
                    <div>
                        <div className="text-gray-500 mb-6 flex justify-start">
                            <div>
                                <p class="font-bold lg:text-2xl md:text-xl text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ml-4">
                                    <a href="">TAG</a>
                                </p>
                            </div>
                            <div>
                                <Link
                                    href={route("shownews", {
                                        category: props.news.category,
                                    })}
                                >
                                    <button className="btn btn-active btn-ghost btn-sm ml-6 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        {props.news.category}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="w-full md:w-2/5 mt-5">
                    <div className="container mx-auto rounded-sm">
                        <div class="flex items-center justify-center">
                            <div class="flex flex-col bg-violet-100 lg:ml-10 p-4 mt-0 w-full max-w-lg">
                                <div class="font-bold text-xl">Purwokerto</div>
                                <div class="text-sm text-gray-500">
                                    Thursday 10 May 2020
                                </div>
                                <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                                    <svg
                                        class="w-32 h-32"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 22 22"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                        ></path>
                                    </svg>
                                </div>
                                <div class="flex flex-row items-center justify-center mt-6">
                                    <div class="font-medium text-6xl">24°</div>
                                    <div class="flex flex-col items-center ml-6">
                                        <div>Cloudy</div>
                                        <div class="mt-1">
                                            <span class="text-sm">
                                                <i class="far fa-long-arrow-up"></i>
                                            </span>
                                            <span class="text-sm font-light text-gray-500">
                                                28°C
                                            </span>
                                        </div>
                                        <div>
                                            <span class="text-sm">
                                                <i class="far fa-long-arrow-down"></i>
                                            </span>
                                            <span class="text-sm font-light text-gray-500">
                                                20°C
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-row justify-between mt-6">
                                    <div class="flex flex-col items-center">
                                        <div class="font-medium text-sm">
                                            Wind
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            9k/h
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="font-medium text-sm">
                                            Humidity
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            68%
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <div class="font-medium text-sm">
                                            Visibility
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            10km
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:ml-10 mt-1">
                            <div className="box-border bg-violet-200">
                                <div dir="rtl">
                                    <h5 className="text-sm font-bold mr-3">
                                        Advertisement
                                    </h5>
                                </div>
                                <a href="https://www.traveloka.com/en-id/">
                                    <img
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2022/07/06/1657108950693-92e1295540ba7b6a941c2b3bdd2cf030.jpeg?tr=q-75"
                                        alt=""
                                        className="p-5"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="mt-1 p-4 bg-violet-100 lg:ml-10">
                            <h5 className="font-bold text-lg uppercase bg-violet-300 text-gray-700 px-1 mb-2">
                                {" "}
                                Popular Topics{" "}
                            </h5>
                            <ul>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a
                                        href="#"
                                        className="flex items-center text-gray-600 cursor-pointer"
                                    >
                                        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                                        Olahraga
                                        <span className="text-gray-500 ml-auto">
                                            23 articles
                                        </span>
                                        <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                                    </a>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a
                                        href="#"
                                        className="flex items-center text-gray-600 cursor-pointer"
                                    >
                                        <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                                        Wisata
                                        <span className="text-gray-500 ml-auto">
                                            18 articles
                                        </span>
                                        <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                                    </a>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a
                                        href="#"
                                        className="flex items-center text-gray-600 cursor-pointer"
                                    >
                                        <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                                        Kuliner
                                        <span className="text-gray-500 ml-auto">
                                            34 articles
                                        </span>
                                        <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                                    </a>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a
                                        href="#"
                                        className="flex items-center text-gray-600 cursor-pointer"
                                    >
                                        <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                                        Daerah
                                        <span className="text-gray-500 ml-auto">
                                            9 articles
                                        </span>
                                        <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:ml-10 mt-1">
                            <div className="box-border bg-violet-200">
                                <div dir="rtl">
                                    <h5 className="text-sm font-bold mr-3">
                                        Advertisement
                                    </h5>
                                </div>
                                <a href="https://www.lazada.co.id/#">
                                    <img
                                        src="https://i.ytimg.com/vi/5iGBYuxnBnk/maxresdefault.jpg"
                                        alt=""
                                        className="p-5"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* <div className="lg:ml-8">
                        <div className="box-border bg-violet-100">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2023/02/22/1677038500292-6a32d1647187cb0147804e9153ea208d.jpeg?tr=q-75" alt="" 
                        className="p-3"
                        />
                    </div>
                    </div> */}
                    </div>
                </aside>
            </div>
        </div>
    );
};
export default Read;
