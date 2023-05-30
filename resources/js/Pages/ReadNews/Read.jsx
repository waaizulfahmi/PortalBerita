import { Link } from "@inertiajs/react";
import parser from "html-react-parser";

const Read = (props) => {
    // console.log(Object.keys(news));
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
    const Copy = () => {
        var Url = document.getElementById("url");
        Url.innerHTML = window.location.href;
        console.log(Url.innerHTML);
        const url2 = Url.select();
        navigator.clipboard.writeText(url2.value);
        alert("Text copied");
        // document.execCommand("copy", true, Url);
    };

    // const title = [];
    // title = Object.values(news);
    // console.log(title);
    // console.log(news);
    return (
        <div className="container mx-auto ">
            <div className="box-border flex-wrap lg:flex ">
                <div className="row-span-3 my-5 lg:w-3/5">
                    <div className="text-sm breadcrumbs ml-3 lg:ml-1">
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
                    <h5 className="text-gray-500 mb-4 ml-3 lg:ml-1">
                        {props.news.category}
                    </h5>
                    <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl lg:mb-3 mb-2 ml-3 lg:ml-1">
                        {props.news.title}
                    </h1>
                    <p className="text-gray-500 lg:mb-5 mb-3 ml-3 lg:ml-1">
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
                                className="btn btn-active btn-ghost btn-xs lg:btn-sm mr-3 lg:mr-1"
                                value="Copy Url"
                                onclick={Copy}
                            />
                        </div>
                    </div>
                    <div>
                        <img
                            src={"/storage/" + props.news.image}
                            className="p-3 lg:p-1 h-64 w-full md:h-96 lg:h-96 lg:w-full lg:mb-4 mb-3"
                        />
                        <a href="#!"></a>
                    </div>
                    {/* <div class="box-border h-80 w-50 border-0 mb-10">
                    </div> */}
                    <p className="lg:text-lg md:text-base text-sm lg:ml-1 ml-3 lg:mb-12 mb-8 lg:mr-3 mr-2">
                        {/* <a className="font-bold">
                                PanelWarta, Purwokerto -{" "}
                            </a>{" "} */}
                        {parser(props.news.description)}
                    </p>
                    <div>
                        <div className="text-gray-500 mb-6 lg:mb-4 flex justify-start">
                            <div>
                                <p class="font-bold lg:text-2xl md:text-xl text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ml-3 lg:ml-1">
                                    <a href="">TAG</a>
                                </p>
                            </div>
                            <div>
                                <Link
                                    href={route("shownews", {
                                        category: props.news.category,
                                    })}
                                >
                                    <button className="btn btn-active btn-ghost btn-sm ml-5 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        {props.news.category}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="w-full mt-5 lg:w-2/5">
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

                    
                    
                        <div className="lg:ml-10 mt-1 p-0">
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
                        <div className="p-0">
                        <div className="mt-1 p-8 lg:p-8 md:p-10 bg-violet-200 lg:ml-10">
                        <h5 className="font-bold text-lg uppercase bg-violet-300 text-gray-700 px-1 p-1 mb-2">
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
                </aside>
            </div>
        </div>
    );
};
export default Read;
