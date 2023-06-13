import { Link, Head } from "@inertiajs/react";
// import axios from "axios";
import { useState, useEffect } from "react";
import CuacaPanel from "./CuacaPanel";
// import { Request } from "request";
// // import request from "request";
// import { Fetch } from "react-request";

const AsideRead = (props) => {
    console.log(props);

    // const sys2 = [];
    // sys2.push(sys[0].country);
    // console.log(sys2);

    // const sys3 = sys2.country;
    // console.log(sys3);

    const categoryList = () => {
        let entries = Object.entries(props.category);
        let sortedData = entries.sort(
            (firstItem, secondItem) => firstItem.values - secondItem.values
        );
        // let sortedData = entries.sort((p1, p2) => {
        //     if (p1.price < p2.price) return -1;
        //     if (p1.price > p2.price) return 1;
        //     return 0;
        // });
        console.log(sortedData);
        let data = sortedData.map(([key, val] = entry) => {
            return (
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <Link
                        href={`/category/${key}`}
                        className="flex items-center text-gray-600 cursor-pointer"
                    >
                        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                        {key}
                        <span className="text-gray-500 ml-auto">
                            {val} articles
                        </span>
                        <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </Link>
                </li>
            );
        });
        return data;
    };
    // categoryList();
    return (
        <div className="lg:container md:container xl:container mx-auto rounded-sm p-2 md:p-0 lg:p-0">
            <div class="flex items-center justify-center mb-3 lg:mb-2 ml-1 mr-1 sm:mb-3 md:p-0 md:ml-3 md:mr-3 xl:mr-0 xl:ml-4 lg:ml-2 md:mb-3">
                <CuacaPanel />
            </div>
            <div className="lg:ml-14 ml-1 mr-1 xl:mr-0 xl:ml-16 lg:mr-4 lg:p-0 lg:mb-2 mb-3 md:mb-3 md:ml-3 md:mr-3 sm:mb-3 sm:p-1">
                <div className="box-border bg-violet-200 lg:mb-1">
                    <div dir="rtl">
                        <h5 className="text-sm font-bold mr-4">
                            Advertisement
                        </h5>
                    </div>
                    <a href="https://www.traveloka.com/en-id/">
                        <img
                            src="https://ik.imagekit.io/tvlk/image/imageResource/2022/07/06/1657108950693-92e1295540ba7b6a941c2b3bdd2cf030.jpeg?tr=q-75"
                            alt=""
                            className="p-4"
                        />
                    </a>
                </div>
            </div>

            <div className="mt-0 p-4 bg-violet-200 xl:ml-16 xl:mr-0 xl:mt-2 lg:mb-2 lg:ml-14 ml-1 mr-1 mb-2 rounded-sm sm:mb-2 sm:ml-2 sm:mr-2 md:ml-4 md:mr-4">
                <h5 className="font-bold mb-6 text-lg uppercase bg-violet-300 text-gray-700 px-2 mb-0">
                    {" "}
                    Tranding Topics{" "}
                </h5>
                <div className="flex flex-wrap mb-3 ml-2 lg:ml-0 md:ml-0 sm:ml-0 space-x-2">
                    <div className="flex ">
                        <div className="shrink-0 ml-3">
                            <Link as="button">
                                <h1 className="font-bold text-5xl">1</h1>
                            </Link>
                        </div>
                        <div className="px-7 text-left">
                            <Link as="button">
                                <h5 className="text-sm md:text-base lg:text-base font-bold text-left">
                                    Nasdem Akan Beri Kejutan Soal Cawapres Anies{" "}
                                </h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="mb-3 border-2 border-gray-400"/>
                <div className="flex flex-wrap mb-3 ml-2 lg:ml-0 md:ml-0 sm:ml-0 space-x-2">
                    <div className="flex ">
                        <div className="shrink-0 ml-3">
                            <Link as="button">
                                <h1 className="font-bold text-5xl">2</h1>
                            </Link>
                        </div>
                        <div className="px-7 text-left">
                            <Link as="button">
                                <h5 className="text-sm md:text-base lg:text-base font-bold text-left">
                                    Nasdem Akan Beri Kejutan Soal Cawapres Anies{" "}
                                </h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="mb-3 border-2 border-gray-400"/>
                <div className="flex flex-wrap mb-1 ml-2 lg:ml-0 md:ml-0 sm:ml-0 space-x-2">
                    <div className="flex ">
                        <div className="shrink-0 ml-3">
                            <Link as="button">
                                <h1 className="font-bold text-5xl">3</h1>
                            </Link>
                        </div>
                        <div className="px-7 text-left">
                            <Link as="button">
                                <h5 className="text-sm md:text-base lg:text-base font-bold text-left mb-2">
                                    Nasdem Akan Beri Kejutan Soal Cawapres Anies{" "}
                                </h5>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="mt-0 p-6 bg-violet-200 xl:ml-16 xl:mr-0 xl:mt-2 lg:mb-0 lg:ml-14 ml-1 mr-1 mb-2 rounded-sm sm:mb-2 sm:ml-2 sm:mr-2 md:ml-4 md:mr-4">
                <h5 className="font-bold text-lg uppercase bg-violet-300 text-gray-700 px-2 mb-0">
                    {" "}
                    Popular Topics{" "}
                </h5>

                <ul>
                    <div className="mt-4 p-2">{categoryList()}</div>
                    {/* <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a
                            href="#"
                            className="flex items-center text-gray-600 cursor-pointer"
                        >
                            <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                            Olahraga
                            <span className="text-gray-500 ml-auto">
                                {props.category.total_sport} articles
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
                                {props.category.total_wisata} articles
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
                                {props.category.total_kuliner} articles
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
                            Bisnis
                            <span className="text-gray-500 ml-auto">
                                {props.category.total_bisnis} articles
                            </span>
                            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                        </a>
                    </li> */}
                </ul>
            </div>

            <div className="lg:ml-10 mt-0 md:p-1 p-1 sm:p-2 md:p-4 lg:p-4 xl:p-0 xl:ml-16 xl:mt-2">
                <div className="box-border bg-violet-200 rounded-sm">
                    <div dir="rtl">
                        <h5 className="text-sm font-bold mr-3">
                            Advertisement
                        </h5>
                    </div>
                    <a href="https://www.lazada.co.id/#">
                        <img
                            src="https://i.ytimg.com/vi/5iGBYuxnBnk/maxresdefault.jpg"
                            alt=""
                            className="p-4"
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
    );
};

export default AsideRead;
