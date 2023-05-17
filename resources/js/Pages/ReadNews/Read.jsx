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

    // const title = [];
    // title = Object.values(news);
    // console.log(title);
    // console.log(news);
    return (
        <div>
            <main className="max-w-7xl mx-auto ">
                <div className="box-border flex flex-wrap">
                    <div className="row-span-3  container my-5  mx-auto ml-0 md:w-2/3">
                        <h5 className="text-gray-500 mb-4 ml-3">
                            {props.news.category}
                        </h5>
                        <h1 className="font-bold text-4xl mb-3 ml-3">
                            {props.news.title}
                        </h1>
                        <p className="text-gray-500 mb-5 ml-3">
                            <small>
                                {props.news.author}
                                <u className="ml-3">
                                    {formatDate(dateString)}
                                </u>{" "}
                            </small>
                        </p>
                        <div className="flex justify-end space-x-2">
                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <a href="https://www.instagram.com/panelwarta/">
                                            <img src="https://cdn-icons-png.flaticon.com/512/10097/10097034.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <a href="">
                                            <img src="https://cdn-icons-png.flaticon.com/512/10091/10091734.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <a href="">
                                            <img src="https://cdn-icons-png.flaticon.com/512/10097/10097344.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <a href="">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1599/1599019.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <a href="">
                                            <img src="https://cdn-icons-png.flaticon.com/512/10096/10096611.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-active btn-ghost btn-sm mb-2 mr-3">
                                    Salin Link
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src={"/storage/" + props.news.image}
                                className="w-full p-3"
                            />
                            <a href="#!"></a>
                        </div>
                        {/* <div class="box-border h-80 w-50 border-0 mb-10">
                    </div> */}
                        <p className="text-lg ml-3 mb-14 mr-3">
                            {/* <a className="font-bold">
                                PanelWarta, Purwokerto -{" "}
                            </a>{" "} */}
                            {parser(props.news.description)}
                        </p>
                        <div>
                            <div className="text-gray-500 mb-6 flex justify-start">
                                <div>
                                    <p class="font-bold text-bold text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ml-4">
                                        <a href="">TAG</a>
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-active btn-ghost btn-sm ml-6 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        {props.news.category}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <hr /> */}
                        {/* <div className="mb-16">
                            <u>
                                <a href="">
                                    <h1 className="text-black ml-3 mb-6 mt-6 lg:text-2xl sm:text-xl font-bold">
                                        Berita Terkait
                                    </h1>
                                </a>
                            </u>
                            <div class="grid grid-cols-3 gap-3 place-content-start mr-2 ml-3">
                                <div className="card w-full  lg:w-60 mr-4">
                                    <a href="">
                                        <img
                                            className="rounded-md mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                            alt="Shoes"
                                        />
                                    </a>
                                    <Link as="button">
                                        <h2 className="card-title text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                        <svg
                                            className="w-3 h-3 mr-2"
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
                                    <p className="text-gray-500 text-xs mb-2">
                                        13 Mei 2022
                                    </p>
                                </div>

                                <div className="card w-full  lg:w-60">
                                    <a href="">
                                        <img
                                            className="rounded-md mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                            alt="Shoes"
                                        />
                                    </a>
                                    <Link as="button">
                                        <h2 className="card-title text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                        <svg
                                            className="w-3 h-3 mr-2"
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
                                    <p className="text-gray-500 text-xs mb-2">
                                        13 Mei 2022
                                    </p>
                                </div>

                                <div className="card w-full  lg:w-60">
                                    <a href="">
                                        <img
                                            className="rounded-md mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                            alt="Shoes"
                                        />
                                    </a>
                                    <Link as="button">
                                        <h2 className="card-title text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                        <svg
                                            className="w-3 h-3 mr-2"
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
                                    <p className="text-gray-500 text-xs mb-2">
                                        13 Mei 2022
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <u>
                            <a href="#">
                                <h1 className="text-black ml-3 mb-6 mt-6 lg:text-2xl sm:text-xl font-bold">
                                    Berita Rekomendasi
                                </h1>
                            </a>
                        </u>
                        <div class="grid grid-cols-3 gap-3 place-content-start  mb-14 mr-2 ml-3">
                            <div className="card w-full  lg:w-60 mr-4">
                                <a href="">
                                    <img
                                        className="rounded-md mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                        alt="Shoes"
                                    />
                                </a>
                                <a href="">
                                    <h2 className="card-title text-base mb-2">
                                        Hello Word
                                    </h2>
                                </a>
                                <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                    <svg
                                        className="w-3 h-3 mr-2"
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
                                <p className="text-gray-500 text-xs mb-2">
                                    13 Mei 2022
                                </p>
                            </div>

                            <div className="card w-full  lg:w-60">
                                <a href="">
                                    <img
                                        className="rounded-md mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                        alt="Shoes"
                                    />
                                </a>
                                <a href="">
                                    <h2 className="card-title text-base mb-2">
                                        Hello Word
                                    </h2>
                                </a>
                                <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                    <svg
                                        className="w-3 h-3 mr-2"
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
                                <p className="text-gray-500 text-xs mb-2">
                                    13 Mei 2022
                                </p>
                            </div>

                            <div className="card w-full  lg:w-60">
                                <a href="">
                                    <img
                                        className="rounded-md mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                        src="https://www.pinhome.id/info-area/wp-content/uploads/2022/02/Ambalika-Kuliner-Kota.jpg"
                                        alt="Shoes"
                                    />
                                </a>
                                <a href="">
                                    <h2 className="card-title text-base mb-2">
                                        Hello Word
                                    </h2>
                                </a>
                                <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                    <svg
                                        className="w-3 h-3 mr-2"
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
                                <p className="text-gray-500 text-xs mb-2">
                                    13 Mei 2022
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <aside className="w-full md:w-1/3 ">
                        <div className="p-2">
                            <u>
                                <a href="">
                                    <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold">
                                        Berita Terbaru
                                    </h1>
                                </a>
                            </u>
                            <div className=" mx-auto mt-2">
                                <section className="mb-30 text-gray-800 text-center md:text-left">
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <hr />
                        <div className="p-2">
                            <u>
                                <a href="">
                                    <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold">
                                        Berita Wisata
                                    </h1>
                                </a>
                            </u>
                            <div className=" mx-auto mt-2">
                                <section className="mb-30 text-gray-800 text-center md:text-left">
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <hr />
                        <div className="p-2">
                            <u>
                                <a href="">
                                    <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold">
                                        Berita Kuliner
                                    </h1>
                                </a>
                            </u>
                            <div className=" mx-auto mt-2">
                                <section className="mb-30 text-gray-800 text-center md:text-left">
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* <div className="p-2">
                            <u>
                                <a href="">
                                    <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold">
                                        Berita Olahraga
                                    </h1>
                                </a>
                            </u>
                            <div className=" mx-auto mt-2">
                                <section className="mb-30 text-gray-800 text-center md:text-left">
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mb-4 ">
                                        <div className="mb-2">
                                            <div className=" mx-auto flex items-center space-x-4">
                                                <div className="shrink-0 ml-4">
                                                    <Link as="button">
                                                        <img
                                                            className="h-22 w-36 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                            alt="hastag"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link as="button">
                                                        <div className="text-base text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                        <svg
                                                            className="w-3 h-3 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 496 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                            />
                                                        </svg>
                                                        Nasional | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div> */}
                    </aside>
                </div>
            </main>
        </div>
    );
};
export default Read;
