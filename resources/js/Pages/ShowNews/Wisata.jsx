import { Link } from "@inertiajs/react";

const wisata = () => {
    return (
        <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="container mx-auto ml-0 md:w-3/5">
                        <div
                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg sm:ml-0 mb-4"
                            // style="background-position: 50%;"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <img
                                src="https://akcdn.detik.net.id/community/media/visual/2022/02/03/masakan-indonesia.jpeg?w=700&q=90"
                                className="w-full"
                            />
                            <a href="#!">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                    // style="background-color: rgba(0, 0, 0, 0.4)"
                                >
                                    <div className="flex justify-start items-end h-full">
                                        <div className="text-white m-3">
                                            <p className="text-sm">Kuliner</p>
                                            <h1 className="font-bold text-2xl lg:text-4xl">
                                                Kuliner Makanan Khas Indonesia
                                            </h1>
                                            <p className="mb-4">
                                                <small>
                                                    10 Mei 2023
                                                    {/* <div className=" pt-4 pb-2">
                                                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                                                #photography
                                                            </span>
                                                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                                                #travel
                                                            </span>
                                                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                                                #winter
                                                            </span>
                                                        </div> */}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <hr />
                        <u>
                            <a href="">
                                <h1 className="text-black mb-5 mt-4 ml-3 lg:text-2xl text-base font-bold">
                                    Berita Terbaru
                                </h1>
                            </a>
                        </u>
                        <div className="mb-30 text-gray-800 text-left md:text-left">
                            <div className="w-3/5 lg:w-4/5">
                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                            <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                            <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>
                                    
                            
                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs md:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="flex lg:space-x-2 space-x-1">
                                        <div className="shrink-0 ml-2">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <img
                                                    className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                    src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                    alt="hastag"
                                                />
                                            </Link>
                                        </div>
                                        <div className="grow-0 shrink-0 basis-auto w-full  px-3 mb-6 lg:w-4/5 md:mb-0 mr-auto text-left">
                                            <Link
                                                href={route("readnews")}
                                                as="button"
                                            >
                                                <h5 className="lg:text-lg md:text-sm text-sm text-left font-bold mb-1">
                                                    Nasdem Akan Beri Kejutan
                                                    Soal Cawapres Anies
                                                </h5>
                                            </Link>
                                            <div className="mb-3 text-red-600 font-medium text-xs ms:text-sm lg:text-base flex items-center justify-left md:justify-start">
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
                                                Travels | 13.01.2023
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            <hr />
                            <u>
                                    <h1 className="text-left text-black mb-2 p-3 lg:text-2xl text-base font-bold">
                                        Berita Nasional
                                    </h1>
                            </u>
                            <div className="grid grid-cols-3 gap-3 place-content-start h-48 ml-2 mr-2 lg:mb-16 mb-3">
                                <div className="card w-full  lg:w-56">
                                    <Link href={route("readnews")} as="button">
                                        <img
                                            className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                            alt="Shoes"
                                        />
                                    </Link>
                                    <Link href={route("readnews")} as="button">
                                        <h2 className="card-title lg:text-base text-sm mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs lg:text-sm flex items-center justify-left md:justify-start">
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
                                        Nasional
                                    </div>
                                    <p className="text-gray-500 text-xs lg:text-sm mb-2 text-left">
                                        13 Mei 2022
                                    </p>
                                </div>

                                <div className="card w-full  lg:w-56">
                                    <Link href={route("readnews")} as="button">
                                        <img
                                            className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                            alt="Shoes"
                                        />
                                    </Link>
                                    <Link href={route("readnews")} as="button">
                                        <h2 className="card-title text-sm lg:text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs lg:text-sm flex items-center justify-left md:justify-start">
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
                                        Nasional
                                    </div>
                                    <p className="text-gray-500 text-xs lg:text-sm mb-2 text-left">
                                        13 Mei 2022
                                    </p>
                                </div>

                                <div className="card w-full  lg:w-56">
                                    <Link href={route("readnews")} as="button">
                                        <img
                                            className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                            alt="Shoes"
                                        />
                                    </Link>
                                    <Link href={route("readnews")} as="button">
                                        <h2 className="card-title text-sm lg:text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs lg:text-sm flex items-center justify-left md:justify-start">
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
                                        Nasional
                                    </div>
                                    <p className="text-gray-500 mb-2 text-xs lg:text-sm text-left">
                                        13 Mei 2022
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <u>
                                    <h1 className="text-left text-black mb-3 p-3 lg:text-2xl text-base font-bold">
                                        Berita Olahraga
                                    </h1>
                            </u>
                            <div className="grid grid-cols-3 gap-3 place-content-start h-48 ml-2 mr-2 lg:mb-8 mb-3">
                                <div className="card w-full  lg:w-56">
                                    <Link href={route("readnews")} as="button">
                                        <img
                                            className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                            alt="Shoes"
                                        />
                                    </Link>
                                    <Link href={route("readnews")} as="button">
                                        <h2 className="card-title text-sm lg:text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs lg:text-sm flex items-center justify-left md:justify-start">
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
                                        Olahraga
                                    </div>
                                    <p className="text-gray-500 mb-2 text-xs lg:text-sm text-left">
                                        13 Mei 2022
                                    </p>
                                </div>

                                <div className="card w-full  lg:w-56">
                                    <Link href={route("readnews")} as="button">
                                        <img
                                            className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                            alt="Shoes"
                                        />
                                    </Link>
                                    <Link href={route("readnews")} as="button">
                                        <h2 className="card-title text-sm lg:text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs lg:text-sm flex items-center justify-left md:justify-start">
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
                                        Olahraga
                                    </div>
                                    <p className="text-gray-500 mb-2 text-xs lg:text-sm text-left">
                                        13 Mei 2022
                                    </p>
                                </div>

                                <div className="card w-full  lg:w-56">
                                    <Link href={route("readnews")} as="button">
                                        <img
                                            className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                            alt="Shoes"
                                        />
                                    </Link>
                                    <Link href={route("readnews")} as="button">
                                        <h2 className="card-title text-sm lg:text-base mb-2">
                                            Hello Word
                                        </h2>
                                    </Link>
                                    <div className="mb-0 text-red-600 font-medium text-xs lg:text-sm flex items-center justify-left md:justify-start">
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
                                        Olahraga
                                    </div>
                                    <p className="text-gray-500 text-xs lg:text-sm mb-2 text-left">
                                        13 Mei 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="lg:mt-16" />
                    </div>

                    <aside className="w-full md:w-2/5">
                        <div className=" mx-auto">
                            <u>
                                <p className="text-left text-black mb-3 p-3 lg:text-2xl text-base font-bold">
                                    Wisata Terbaru
                                </p>
                            </u>
                                <div className=" mx-auto mt-2">
                                    <section className="lg:mb-30 text-gray-800 text-center md:text-left">
                                        <div className="flex flex-wrap mb-4 ">
                                            <div className="mb-2">
                                                <div className=" mx-auto flex space-x-4">
                                                    <div className="shrink-0 ml-4">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <img
                                                                className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                                alt="hastag"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
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
                                                            Wisata | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap mb-4 ">
                                            <div className="mb-2">
                                                <div className=" mx-auto flex space-x-4">
                                                    <div className="shrink-0 ml-4">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <img
                                                                className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                                alt="hastag"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
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
                                                            Wisata | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mb-4 ">
                                            <div className="mb-2">
                                                <div className=" mx-auto flex space-x-4">
                                                    <div className="shrink-0 ml-4">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <img
                                                                className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                                alt="hastag"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
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
                                                            Wisata | Kamis 4
                                                            Mei 2023
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
                                <p className="text-left text-black mb-3 p-3 lg:text-2xl text-base font-bold">
                                    Kuliner Terbaru
                                </p>
                            </u>

                                <div className=" mx-auto mt-2 box-border border-solid border-4 border-base-800 rounded-lg flex flex-wrap">
                                    <section className="mb-30 lg:mt-6 lg:mb-6 text-gray-800 text-left md:text-left">
                                        <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-start ml-6 ">
                                            <div className="mb-3">
                                                <div className="max-w-sm mb-4 mx-auto flex items-center space-x-4">
                                                    <div className="shrink-0">
                                                        <img
                                                            className="lg:h-12 lg:w-12 h-10 w-10"
                                                            src="https://cdn-icons-png.flaticon.com/512/61/61496.png"
                                                            alt="hastag"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <div className="lg:text-base text-sm text-left font-bold text-black mb-1">
                                                                Nasdem Akan Beri
                                                                Kejutan Soal
                                                                Cawapres Anies
                                                            </div>
                                                        </Link>
                                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                            <svg
                                                                className="lg:w-3 lg:h-3 w-2 h-2 lg:mr-2 mr-1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 496 512"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                                />
                                                            </svg>
                                                            Kuliner | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>

                                            <div className="mb-3">
                                                <div className="max-w-sm mb-4 mx-auto flex items-center space-x-4">
                                                    <div className="shrink-0">
                                                        <img
                                                            className="lg:h-12 lg:w-12 h-10 w-10"
                                                            src="https://cdn-icons-png.flaticon.com/512/61/61496.png"
                                                            alt="hastag"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <div className="lg:text-base text-sm text-left font-bold text-black mb-1">
                                                                Nasdem Akan Beri
                                                                Kejutan Soal
                                                                Cawapres Anies
                                                            </div>
                                                        </Link>
                                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                            <svg
                                                                className="lg:w-3 lg:h-3 w-2 h-2 lg:mr-2 mr-1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 496 512"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                                />
                                                            </svg>
                                                            Kuliner | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="mb-3">
                                                <div className="max-w-sm mb-4 mx-auto flex items-center space-x-4">
                                                    <div className="shrink-0">
                                                        <img
                                                            className="lg:h-12 lg:w-12 h-10 w-10"
                                                            src="https://cdn-icons-png.flaticon.com/512/61/61496.png"
                                                            alt="hastag"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <div className="lg:text-base text-sm text-left font-bold text-black mb-1">
                                                                Nasdem Akan Beri
                                                                Kejutan Soal
                                                                Cawapres Anies
                                                            </div>
                                                        </Link>
                                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
                                                            <svg
                                                                className="lg:w-3 lg:h-3 w-2 h-2 lg:mr-2 mr-1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 496 512"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                                                />
                                                            </svg>
                                                            Kuliner | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </section>
                            </div>
                        </div>

                        <hr />

                            <u>
                                <p className="text-left text-black mb-3 p-3 lg:text-2xl text-base font-bold">
                                    Bisnis Terbaru
                                </p>
                            </u>

                            <div className="mx-auto">
                                <section className="mb-30 text-gray-800 text-left md:text-left">
                                    <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-start ml-6 ">
                                        <div className="mb-3">
                                            <div className="max-w-sm mx-auto flex space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        className="lg:h-10 lg:w-10 h-8 w-8"
                                                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                        alt="hastag"
                                                    />
                                                </div>
                                                <div>
                                                    <Link
                                                        href={route("readnews")}
                                                        as="button"
                                                    >
                                                        <div className="lg:text-base text-sm text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                                        Bisnis | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="max-w-sm mx-auto flex space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        className="lg:h-10 lg:w-10 h-8 w-8"
                                                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                        alt="hastag"
                                                    />
                                                </div>
                                                <div>
                                                    <Link
                                                        href={route("readnews")}
                                                        as="button"
                                                    >
                                                        <div className="lg:text-base text-sm text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                                        Bisnis | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className=" max-w-sm mx-auto flex space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        className="h-10 w-10"
                                                        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202836/hashtag-icon-sm.png"
                                                        alt="hastag"
                                                    />
                                                </div>
                                                <div>
                                                    <Link
                                                        href={route("readnews")}
                                                        as="button"
                                                    >
                                                        <div className="lg:text-base text-sm text-left font-bold text-black mb-2">
                                                            Nasdem Akan Beri
                                                            Kejutan Soal
                                                            Cawapres Anies
                                                        </div>
                                                    </Link>
                                                    <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                                        Bisnis | Kamis 4 Mei
                                                        2023
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-ghost ">
                                        <Link
                                            href={route("shownews")}
                                            as="button"
                                        >
                                            <u>Lihat Selengkapnya</u>
                                        </Link>
                                    </button>
                                </section>
                        </div>

                        <hr />

                            <u>
                                <p className="text-left text-black mb-3 p-3 lg:text-2xl text-base font-bold">
                                    Profile Terbaru
                                </p>
                            </u>
                                <div className=" mx-auto mt-2 mb-20">
                                    <section className="mb-30 text-gray-800 text-center md:text-left">
                                        <div className="flex flex-wrap mb-4 ">
                                            <div className="mb-2">
                                                <div className=" mx-auto flex space-x-4">
                                                    <div className="shrink-0 ml-4">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <img
                                                                className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                                alt="hastag"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <div className="lg:text-base text-sm text-left font-bold text-black mb-2">
                                                                Nasdem Akan Beri
                                                                Kejutan Soal
                                                                Cawapres Anies
                                                            </div>
                                                        </Link>
                                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                                            Profile | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap mb-4 ">
                                            <div className="mb-2">
                                                <div className=" mx-auto flex space-x-4">
                                                    <div className="shrink-0 ml-4">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <img
                                                                className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                                alt="hastag"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <div className="lg:text-base text-sm text-left font-bold text-black mb-2">
                                                                Nasdem Akan Beri
                                                                Kejutan Soal
                                                                Cawapres Anies
                                                            </div>
                                                        </Link>
                                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                                            Profile | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mb-4 ">
                                            <div className="mb-2">
                                                <div className=" mx-auto flex space-x-4">
                                                    <div className="shrink-0 ml-4">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <img
                                                                className="lg:h-24 lg:w-36 h-20 w-34 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                                alt="hastag"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <div className="lg:text-base text-sm text-left font-bold text-black mb-2">
                                                                Nasdem Akan Beri
                                                                Kejutan Soal
                                                                Cawapres Anies
                                                            </div>
                                                        </Link>
                                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                                            Profile | Kamis 4
                                                            Mei 2023
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                            <hr />
                                <u>
                                    <p className="text-left text-black mb-3 p-3 lg:text-2xl text-base font-bold">
                                        Mancanegara Terbaru
                                    </p>
                                </u>

                                <div className="grid grid-cols-2 gap-2 ml-2 mr-2">
                                    <div className="card w-full  lg:w-52">
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <img
                                                className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                alt="Shoes"
                                            />
                                        </Link>
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <h2 className="card-title lg:text-base text-sm mb-2 text-left">
                                                Hello Word
                                            </h2>
                                        </Link>
                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                            Mancanegara
                                        </div>
                                        <p className="text-gray-500 text-xs mb-2">
                                            13 Mei 2022
                                        </p>
                                    </div>

                                    <div className="card w-full  lg:w-52">
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <img
                                                className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                alt="Shoes"
                                            />
                                        </Link>
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <h2 className="card-title text-left lg:text-base text-sm mb-2">
                                                Hello Word
                                            </h2>
                                        </Link>
                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                            Mancanegara
                                        </div>
                                        <p className="text-gray-500 text-xs mb-2">
                                            13 Mei 2022
                                        </p>
                                    </div>

                                    <div className="card w-full  lg:w-52">
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <img
                                                className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                alt="Shoes"
                                            />
                                        </Link>
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <h2 className="card-title text-left lg:text-base text-sm mb-2">
                                                Hello Word
                                            </h2>
                                        </Link>
                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                            Mancanegara
                                        </div>
                                        <p className="text-gray-500 text-xs mb-2">
                                            13 Mei 2022
                                        </p>
                                    </div>

                                    <div className="card w-full  lg:w-52">
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <img
                                                className="mb-3 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                alt="Shoes"
                                            />
                                        </Link>
                                        <Link
                                            href={route("readnews")}
                                            as="button"
                                        >
                                            <h2 className="card-title text-left lg:text-base text-sm mb-2">
                                                Hello Word
                                            </h2>
                                        </Link>
                                        <div className="mb-0 text-red-600 font-medium text-xs flex items-center justify-left md:justify-start">
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
                                            Mancanegara
                                        </div>
                                        <p className="text-gray-500 text-xs mb-2">
                                            13 Mei 2022
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </aside>
                </div>
        </div>
    );
};

export default wisata;