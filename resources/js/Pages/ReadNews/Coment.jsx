import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router, Head } from "@inertiajs/react";

const Coment = (props) => {
    const [comment, setComment] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = () => {
        const data = {
            comment,
            username,
        };
        router.post("/read/postComment", data);
        setComment("");
        setUsername("");
    };
    return (
        <div className="container mx-auto">
            <div className="comment md:w-3/5">
                <div className="comment h-22 w-30 p-3 rounded-md bg-base-200 mb-5">
                    <p className="font-bold lg:text-xl text-base mb-2">
                        Komentar
                    </p>
                    <form action={route("comment.data")} method="post">
                        <div>
                            <input
                                type="text"
                                name="comment"
                                onChange={(comment) =>
                                    setComment(comment.target.value)
                                }
                                value={comment}
                                placeholder="Tuliskan Komentar Anda"
                                className="input input-bordered text-sm lg:text-base h-10 w-18 lg:h-16 lg:w-50 w-full mb-2"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Nama"
                                onChange={(username) =>
                                    setUsername(username.target.value)
                                }
                                value={username}
                                className="input input-bordered text-sm lg:text-base h-8 w-50 w-full mb-2"
                            />
                        </div>
                        <div dir="rtl">
                            <input
                                type="submit"
                                className="btn btn-active btn-ghost lg:btn-sm btn-xs"
                            />
                        </div>
                    </form>
                </div>
                <div className="rounded-md bg-base-200">
                    <div class="antialiased mx-auto ml-3 mr-3 max-w-screen">
                        <div className="space-y-4">
                            <div className="flex">
                                <div className="flex-shrink-0 mr-3">
                                    <img
                                        className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                                        src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
                                    <strong>sjaisjaij</strong>{" "}
                                    <span className="text-xs text-gray-400 ">
                                        20 Mei 2023
                                    </span>
                                    <p className="text-sm">asasa</p>
                                    <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                                        Balas
                                    </h4>
                                </div>
                            </div>

                            {/* <div className="flex">
                                <div className="flex-shrink-0 mr-3">
                                    <img
                                        className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                                        src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
                                    <strong>Sarah</strong>{" "}
                                    <span className="text-xs text-gray-400">
                                        20 Mei 2023
                                    </span>
                                    <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                    </p>
                                    <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                                        Balas
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0 mr-3">
                                                <img
                                                    className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-base-300">
                                                <strong>Sarah</strong>{" "}
                                                <span className="text-xs text-gray-400">
                                                    21 Mei 2023
                                                </span>
                                                <p className="text-xs sm:text-sm">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt ut labore et
                                                    dolore magna aliquyam erat,
                                                    sed diam voluptua.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0 mr-3">
                                                <img
                                                    className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-base-300">
                                                <strong>Sarah</strong>{" "}
                                                <span className="text-xs text-gray-400">
                                                    21 Mei 2023
                                                </span>
                                                <p className="text-xs sm:text-sm">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt ut labore et
                                                    dolore magna aliquyam erat,
                                                    sed diam voluptua.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <aside className="w-full md:w-1/4 ">
                <div className="p-2 ml-4">
                    <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold text-center">
                        Ikuti Kami
                    </h1>
                    <div className="flex justify-center space-x-2 mb-2">
                        <div>
                            <div className="avatar">
                                <div className="w-10 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <Link href="https://www.instagram.com/panelwarta/">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10097/10097034.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-10 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <Link href="">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10091/10091734.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-10 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <Link href="">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10097/10097344.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-10 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <Link href="">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1599/1599019.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-10 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <Link href="https://api.whatsapp.com/send?phone=<nomor WhatsApp>">
                                        <img src="https://cdn-icons-png.flaticon.com/512/10096/10096611.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" mx-auto mt-4">
                        <section className="mb-30 text-gray-800 text-center md:text-left"> */}

            {/* <div className="carousel w-full"> 
                                    <div id="slide1" className="flex flex-wrap mb-2 carousel-item relative w-full">
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-8/6 mb-1 ml-auto">
                                            <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                                <img
                                                    className="w-full"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="Gambar 1"
                                                />
                                                <a href="#!">
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                        <div className="flex justify-start items-end h-full">
                                                            <div className="text-white m-3">
                                                                <h3 className="text-white text-xl font-bold m-2">
                                                                    Kuliner Purwokerto Yang Wajib Dicoba!
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide4" className="btn btn-circle">❮</a> 
                                            <a href="#slide2" className="btn btn-circle">❯</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="slide2" className="flex flex-wrap mb-2 carousel-item relative w-full">
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-8/6 mb-1 ml-auto">
                                            <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                                <img
                                                    className="w-full"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="Gambar 1"
                                                />
                                                <a href="#!">
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                        <div className="flex justify-start items-end h-full">
                                                            <div className="text-white m-3">
                                                                <h3 className="text-white text-xl font-bold m-2">
                                                                    Kuliner Purwokerto Yang Wajib Dicoba!
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide1" className="btn btn-circle">❮</a> 
                                            <a href="#slide3" className="btn btn-circle">❯</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="slide3" className="flex flex-wrap mb-2 carousel-item relative w-full">
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-8/6 mb-1 ml-auto">
                                            <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                                <img
                                                    className="w-full"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="Gambar 1"
                                                />
                                                <a href="#!">
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                        <div className="flex justify-start items-end h-full">
                                                            <div className="text-white m-3">
                                                                <h3 className="text-white text-xl font-bold m-2">
                                                                    Kuliner Purwokerto Yang Wajib Dicoba!
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide2" className="btn btn-circle">❮</a> 
                                            <a href="#slide4" className="btn btn-circle">❯</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="slide4" className="flex flex-wrap mb-2 carousel-item relative w-full">
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-8/6 mb-3 ml-auto">
                                            <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                                <img
                                                    className="w-full"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="Gambar 1"
                                                />
                                                <a href="#!">
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                        <div className="flex justify-start items-end h-full">
                                                            <div className="text-white m-3">
                                                                <h3 className="text-white text-xl font-bold m-2">
                                                                    Kuliner Purwokerto Yang Wajib Dicoba!
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide3" className="btn btn-circle">❮</a> 
                                            <a href="#slide1" className="btn btn-circle">❯</a>
                                            </div>
                                        </div>
                                    </div>
                                    </div> 

                                    <div className="flex flex-wrap mb-1">
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-5 mb-6 md:mb-0 ml-auto">
                                            <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                                <img
                                                    className="w-full"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="Gambar 1"
                                                />
                                                <a href="#!">
                                                    <div
                                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                        // style="background-color: rgba(251, 251, 251, 0.2)"
                                                    ></div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                            <a href=""><h5 className="text-lg font-bold mb-3">
                                                Hidup Sederhana
                                            </h5></a>
                                            <div className="mb-1 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 496 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                    />
                                                </svg>
                                                Travels
                                            </div>
                                            <p className="text-gray-500 mb-6">
                                                <small>
                                                <u>13.01.2022</u>{" "}
                                                </small>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap mb-1">
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-5 mb-6 md:mb-0 ml-auto">
                                            <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                                <img
                                                    className="w-full"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="Gambar 1"
                                                />
                                                <a href="#!">
                                                    <div
                                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                        // style="background-color: rgba(251, 251, 251, 0.2)"
                                                    ></div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                            <a href=""><h5 className="text-lg font-bold mb-3">
                                                Hidup Sederhana
                                            </h5></a>
                                            <div className="mb-1 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 496 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                    />
                                                </svg>
                                                Travels
                                            </div>
                                            <p className="text-gray-500 mb-6">
                                                <small>
                                                <u>13.01.2022</u>{" "}
                                                </small>
                                            </p>
                                        </div>
                                    </div>

                                      <div className="flex flex-wrap mb-1">
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-5 mb-6 md:mb-0 ml-auto">
                                            <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                                <img
                                                    className="w-full"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="Gambar 1"
                                                />
                                                <a href="#!">
                                                    <div
                                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                        // style="background-color: rgba(251, 251, 251, 0.2)"
                                                    ></div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                            <a href=""><h5 className="text-lg font-bold mb-3">
                                                Hidup Sederhana
                                            </h5></a>
                                            <div className="mb-1 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 496 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                    />
                                                </svg>
                                                Travels
                                            </div>
                                            <p className="text-gray-500 mb-6">
                                                <small>
                                                <u>13.01.2022</u>{" "}
                                                </small>
                                            </p>
                                        </div>
                                    </div> */}

            {/* <hr />
                            <u>
                                <a href="">
                                    <h1 className="text-left text-black p-3 lg:text-2xl sm:text-xl font-bold mb-4">
                                        Berita Terpopuler
                                    </h1>
                                </a>
                            </u>
                            <div className="grid grid-rows-5 grid-flow-col gap-5">
                                <div className="mb-3">
                                    <div className="max-w-sm mx-auto flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                className="h-12 w-12"
                                                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                alt="hastag"
                                            />
                                        </div>
                                        <div>
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <div className="text-base text-left font-bold text-black mb-2">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
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
                                                </div>
                                                <div>
                                                    <Link
                                                        // href={route("readnews")}
                                                        as="button"
                                                    >
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

                                        <div className="mb-3">
                                            <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        className="h-12 w-12"
                                                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                        alt="hastag"
                                                    />
                                                </div>
                                                <div>
                                                    <Link
                                                        // href={route("readnews")}
                                                        as="button"
                                                    >
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

                                        <div className="mb-3">
                                            <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        className="h-12 w-12"
                                                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                        alt="hastag"
                                                    />
                                                </div>
                                                <div>
                                                    <Link
                                                        // href={route("readnews")}
                                                        as="button"
                                                    >
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

                                        <div className="mb-3">
                                            <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        className="h-12 w-12"
                                                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                        alt="hastag"
                                                    />
                                                </div>
                                                <div>
                                                    <Link
                                                        // href={route("readnews")}
                                                        as="button"
                                                    >
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

                                        <div className="mb-3">
                                            <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        className="h-12 w-12"
                                                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                        alt="hastag"
                                                    />
                                                </div>
                                                <div>
                                                    <Link
                                                        // href={route("readnews")}
                                                        as="button"
                                                    >
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
                                        <hr />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                className="h-12 w-12"
                                                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                alt="hastag"
                                            />
                                        </div>
                                        <div>
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <div className="text-base text-left font-bold text-black mb-2">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
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
                                                Nasional | Kamis 4 Mei 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                className="h-12 w-12"
                                                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                alt="hastag"
                                            />
                                        </div>
                                        <div>
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <div className="text-base text-left font-bold text-black mb-2">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
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
                                                Nasional | Kamis 4 Mei 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                className="h-12 w-12"
                                                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                alt="hastag"
                                            />
                                        </div>
                                        <div>
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <div className="text-base text-left font-bold text-black mb-2">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
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
                                                Nasional | Kamis 4 Mei 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className=" max-w-sm mx-auto flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                className="h-12 w-12"
                                                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                alt="hastag"
                                            />
                                        </div>
                                        <div>
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <div className="text-base text-left font-bold text-black mb-2">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
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
                                                Nasional | Kamis 4 Mei 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </section>
                    </div>
                </div>
            </aside> */}
        </div>
    );
};

export default Coment;
