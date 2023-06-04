import { Link } from "@inertiajs/react";
import parser from "html-react-parser";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

const Read = (props) => {
    // GET CUACA BMKG
    const [dataXML, setdata] = useState({});
    const getData = async () => {
        try {
            const response = await axios.get(
                "http://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaTengah.xml",

                {
                    "Content-Type": "application/xml; charset=utf-8",
                }
            );

            setdata(response.data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(dataXML);

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
                    <u className="ml-3">{formatDate(dateString)}</u>{" "}
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
                        onClick={copyToClip}
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
    );
};
export default Read;
