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
            <div className="box-border flex flex-wrap ">
                <div className="row-span-3 my-5 md:w-3/5">
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
                                onclick={Copy}
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
                    <u>
                        <a href="#">
                            <h1 className="text-black lg:mt-3 lg:ml-3 ml-2 lg:mt-3 lg:mb-3 mb-3 lg:text-2xl text-base md:text-xl font-bold">
                                Berita Rekomendasi
                            </h1>
                        </a>
                    </u>
                    <div class="grid grid-cols-3 lg:gap-3 gap-2 place-content-start lg:mr-2 lg:ml-3 ml-2 mr-2">
                        <div className="card w-full  lg:w-62 mr-4">
                            <a href="">
                                <img
                                    className="rounded-md lg:mb-3 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                    alt="Shoes"
                                />
                            </a>
                            <a href="">
                                <h2 className="card-title lg:text-base text-sm md:text-sm mb-2">
                                    Hello Word
                                </h2>
                            </a>
                            <div className="mb-0 text-red-600 font-medium text-xs md:text-sm lg:text-sm flex items-center justify-left md:justify-start">
                                <svg
                                    className="lg:w-3 lg:h-3 w-2 h-2 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                    />
                                </svg>
                                Kuliner
                            </div>
                            <p className="text-gray-500 text-xs md:text-sm lf:text-sm mb-2">
                                13 Mei 2022
                            </p>
                        </div>

                        <div className="card w-full  lg:w-62">
                            <a href="">
                                <img
                                    className="rounded-md lg:mb-3 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                    alt="Shoes"
                                />
                            </a>
                            <a href="">
                                <h2 className="card-title lg:text-base md:text-sm text-sm mb-2">
                                    Hello Word
                                </h2>
                            </a>
                            <div className="mb-0 text-red-600 font-medium text-xs md:text-sm lg:text-sm flex items-center justify-left md:justify-start">
                                <svg
                                    className="lg:w-3 lg:h-3 h-2 w-2 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                    />
                                </svg>
                                Kuliner
                            </div>
                            <p className="text-gray-500 text-xs md:text-sm lg:text-sm mb-2">
                                13 Mei 2022
                            </p>
                        </div>

                        <div className="card w-full  lg:w-62">
                            <a href="">
                                <img
                                    className="rounded-md lg:mb-3 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                    alt="Shoes"
                                />
                            </a>
                            <a href="">
                                <h2 className="card-title lg:text-base text-sm md:text-sm mb-2">
                                    Hello Word
                                </h2>
                            </a>
                            <div className="mb-0 text-red-600 font-medium text-xs md:text-sm lg:text-sm flex items-center justify-left md:justify-start">
                                <svg
                                    className="lg:w-3 lg:h-3 w-2 h-2 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                    />
                                </svg>
                                Kuliner
                            </div>
                            <p className="text-gray-500 text-xs md:text-sm lg:text-sm mb-2">
                                13 Mei 2022
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>
                <aside className="w-full md:w-2/5 ">
                    <div className="container mx-auto">
                        <div class="flex items-center justify-center">
                            <div class="flex flex-col bg-violet-100 lg:ml-10 p-4 mt-0 w-full max-w-lg">
                                <div class="font-bold text-xl">Indonesia</div>
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
                        {/* <div className="mb-4 ml-8">
                        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
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
                                    Nutrition
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
                                    Food & Diet
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
                                    Workouts
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
                                    Immunity
                                    <span className="text-gray-500 ml-auto">
                                        9 articles
                                    </span>
                                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                                </a>
                            </li>
                        </ul>
                    </div> */}
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
                                        className="p-3"
                                    />
                                </a>
                            </div>
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
                                        className="p-3"
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
