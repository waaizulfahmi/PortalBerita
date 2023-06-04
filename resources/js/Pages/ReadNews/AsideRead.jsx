import { Link, Head } from "@inertiajs/react";

const AsideRead = (props) => {
    console.log(props);
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
        <div className="container mx-auto rounded-sm p-2 md:p-0 lg:p-0">
            <div class="flex items-center justify-center md:p-0">
                <div class="flex flex-col bg-violet-200 lg:ml-10 p-4 lg:p-8 mt-0 w-full h-full max-w-2xl md:max-w-3xl md:p-5">
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
                            <div class="font-medium text-sm">Wind</div>
                            <div class="text-sm text-gray-500">9k/h</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="font-medium text-sm">Humidity</div>
                            <div class="text-sm text-gray-500">68%</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="font-medium text-sm">Visibility</div>
                            <div class="text-sm text-gray-500">10km</div>
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
                            className="p-4"
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
                    <div className="mt-4">{categoryList()}</div>
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

            <div className="lg:ml-10 mt-1 md:p-1">
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
