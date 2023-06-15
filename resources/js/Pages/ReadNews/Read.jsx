import { Link } from "@inertiajs/react";
import parser from "html-react-parser";
import { useState, useEffect } from "react";
import { render } from "react-dom";

const Read = (props) => {
    // GET CUACA BMKG

    // console.log(Object.keys(news));
    // GET URL COPY
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
        <div>
            <div className="text-sm breadcrumbs ml-3 md:ml-4 lg:ml-2 xl:ml-1">
                <ul>
                    <li>
                        <Link href="/">Berand1</Link>
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
            <h5 className="text-gray-500 mb-4 ml-3 md:ml-4 lg:ml-2 xl:ml-1">
                {props.news.category}
            </h5>
            <h1 className="font-bold lg:text-3xl xl:text-4xl md:text-3xl sm:text-3xl text-2xl lg:mb-3 mb-2 ml-3 md:ml-4 lg:ml-2  xl:ml-1">
                {props.news.title}
            </h1>
            <p className="text-gray-500 lg:mb-5 mb-3 ml-3 md:ml-4 lg:ml-2 xl:ml-1">
                <small>
                    {props.news.author}
                    <u className="ml-3">{formatDate(dateString)}</u>{" "}
                </small>
            </p>
            <div className="flex justify-end xl:space-x-1 lg:space-x-1 space-x-1 md:mr-1 lg:mt-8 lg:mb-2">
                <div>
                    <div className="avatar">
                        <div className="xl:w-7 lg:w-6 sm:w-6 w-5 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <a href="https://www.instagram.com/panelwarta/">
                                <img src="https://cdn-icons-png.flaticon.com/512/10097/10097034.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="xl:w-7 lg:w-6 w-5 sm:w-6 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <a href="">
                                <img src="https://cdn-icons-png.flaticon.com/512/10091/10091734.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="xl:w-7 lg:w-6 w-5 sm:w-6 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <a href="">
                                <img src="https://cdn-icons-png.flaticon.com/512/10097/10097344.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="xl:w-7 lg:w-6 w-5 sm:w-6 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <a href="">
                                <img src="https://cdn-icons-png.flaticon.com/512/1599/1599019.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="xl:w-7 lg:w-6 w-5 sm:w-6 md:w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <a href="">
                                <img src="https://cdn-icons-png.flaticon.com/512/10096/10096611.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <input
                        type="button"
                        className="btn btn-active btn-ghost btn-xs mr-3 lg:mr-1"
                        value="Copy Url"
                        onClick={copyToClip}
                    />
                </div>
            </div>
            <div>
                <img
                    src={"/storage/" + props.news.image}
                    className="p-3 lg:p-2 h-64 w-full rounded-lg sm:h-80 md:h-96 md:p-4 lg:h-80 xl:h-96 xl:p-1 lg:w-full lg:mb-4 mb-3"
                />
                <a href="#!"></a>
            </div>
            {/* <div class="box-border h-80 w-50 border-0 mb-10">
                    </div> */}
            <p className="xl:text-lg md:text-base lg:text-base text-sm xl:ml-1 lg:ml-2 md:ml-4 ml-3 lg:mb-12 mb-8 lg:mr-3 mr-2">
                {/* <a className="font-bold">
                                PanelWarta, Purwokerto -{" "}
                            </a>{" "} */}
                {parser(props.news.description)}
            </p>
            <div>
                <div className="text-gray-500 mb-6 lg:mb-4 md:ml-2 xl:ml-1 flex justify-start">
                    <div>
                        <p class="font-bold lg:text-xl xl:text-2xl md:text-2xl text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ml-3 lg:ml-2">
                            <a href="">TAG</a>
                        </p>
                    </div>
                    <div>
                        <Link
                            href={route("shownews", {
                                category: props.news.category,
                            })}
                        >
                            <button className="btn btn-active btn-ghost btn-xs md:btn-sm lg:btn-sm ml-3 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                {props.news.category}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Read;
