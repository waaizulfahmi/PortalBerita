import { Link } from "@inertiajs/react";

const BeritaBisnis = (news) => {
    return news.map((data, i) => {
        return (
            <aside className="w-full md:w-1/3 ml-12 ">
                <div className="p-2 ml-3">
                    <u>
                        <a href="">
                            <h1 className="text-black p-3 lg:text-2xl sm:text-xl font-bold mb-4">
                                Berita Bisns
                            </h1>
                        </a>
                    </u>
                    <div className="mx-auto mt-4">
                        <section className="mb-30 text-gray-800 text-center md:text-left">
                            <div className="flex flex-wrap mb-1 ">
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-5 mb-6 md:mb-0 ml-auto">
                                    <Link href={route("readnews")} as="button">
                                        <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                            <img
                                                className="w-full"
                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                alt="Gambar 1"
                                            />
                                            <div
                                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                // style="background-color: rgba(251, 251, 251, 0.2)"
                                            ></div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                    <Link href={route("readnews")} as="button">
                                        <h4 className="text-left font-bold mb-3">
                                            {data.title}
                                        </h4>
                                    </Link>
                                    <p className="text-gray-500 mb-6">
                                        <small>
                                            <u>13.01.2022</u>{" "}
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-1 ">
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-5 mb-6 md:mb-0 ml-auto">
                                    <Link href={route("readnews")} as="button">
                                        <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                            <img
                                                className="w-full"
                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                alt="Gambar 1"
                                            />
                                            <div
                                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                // style="background-color: rgba(251, 251, 251, 0.2)"
                                            ></div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                    <Link href={route("readnews")} as="button">
                                        <h4 className="text-left font-bold mb-3">
                                            Hidup Sederhana
                                        </h4>
                                    </Link>
                                    <p className="text-gray-500 mb-6">
                                        <small>
                                            <u>13.01.2022</u>{" "}
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-1 ">
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-5 mb-6 md:mb-0 ml-auto">
                                    <Link href={route("readnews")} as="button">
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
                                    </Link>
                                </div>

                                <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                    <Link href={route("readnews")} as="button">
                                        <h4 className="text-left font-bold mb-3">
                                            Awali Harimu dengan Semangat
                                        </h4>
                                    </Link>
                                    <p className="text-gray-500 mb-6">
                                        <small>
                                            <u>13.01.2022</u>{" "}
                                        </small>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap mb-1 ">
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-5 mb-6 md:mb-0 ml-auto">
                                    <Link href={route("readnews")} as="button">
                                        <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                            <img
                                                className="w-full"
                                                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                                                alt="Gambar 1"
                                            />
                                            <div
                                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                // style="background-color: rgba(251, 251, 251, 0.2)"
                                            ></div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                    <Link href={route("readnews")} as="button">
                                        <h4 className="text-left font-bold mb-3">
                                            Awali Harimu dengan Semangat
                                        </h4>
                                    </Link>
                                    <p className="text-gray-500 mb-6">
                                        <small>
                                            <u>13.01.2022</u>{" "}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </aside>
        );
    });
};

export default BeritaBisnis;
