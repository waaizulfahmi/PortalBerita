import { Link } from "@inertiajs/react";

const MainNews = () => {
    return (
        <div>
            <main className="max-w-7xl mx-auto relative ">
                <div className="box-border flex flex-wrap">
                    <article className="w-full h-full md:w-2/4  p-4">
                        <u>
                            <h1 className="text-black p-2 lg:text-2xl sm:text-xl font-bold">
                                Berita Terkini
                            </h1>
                        </u>
                        <div className="carousel w-full mb-8">
                            <div
                                id="slide1"
                                className="carousel-item relative w-full"
                            >
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg lg:ml-2 sm:ml-0 "
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
                                                <div className="text-white m-6">
                                                    <h1 className="font-bold text-4xl mb-3">
                                                        Kuliner Makanan Khas
                                                        Indonesia
                                                    </h1>
                                                    <p>
                                                        <small>
                                                            Published{" "}
                                                            <u>28.03.2023</u> by
                                                            Freda Widya Artanti
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
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href="#slide4"
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href="#slide2"
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="slide2"
                                className="carousel-item relative w-full"
                            >
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg lg:ml-2 sm:ml-0 "
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
                                                <div className="text-white m-6">
                                                    <h1 className="font-bold text-4xl mb-3">
                                                        Kuli Makanan Khas
                                                        Indonesia
                                                    </h1>
                                                    <p>
                                                        <small>
                                                            Published{" "}
                                                            <u>28.03.2023</u> by
                                                            Freda Widya Artanti
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
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href="#slide1"
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href="#slide3"
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="slide3"
                                className="carousel-item relative w-full"
                            >
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg lg:ml-2 sm:ml-0 "
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
                                                <div className="text-white m-6">
                                                    <h1 className="font-bold text-4xl mb-3">
                                                        Kuliner Makanan Khas
                                                        Indonesia
                                                    </h1>
                                                    <p>
                                                        <small>
                                                            Published{" "}
                                                            <u>28.03.2023</u> by
                                                            Freda Widya Artanti
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
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href="#slide2"
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href="#slide4"
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="slide4"
                                className="carousel-item relative w-full"
                            >
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg lg:ml-2 sm:ml-0 "
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
                                                <div className="text-white m-6">
                                                    <h1 className="font-bold text-4xl mb-3">
                                                        Kuliner Makanan Khas
                                                        Indonesia
                                                    </h1>
                                                    <p>
                                                        <small>
                                                            Published{" "}
                                                            <u>28.03.2023</u> by
                                                            Freda Widya Artanti
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
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href="#slide3"
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href="#slide1"
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className="w-full md:w-2/4 ">
                        <div className="p-4">
                            <u>
                                <h1 className="text-black p-2 lg:text-2x5 sm:text-xl font-bold">
                                    Rekomendasi Untuk Anda
                                </h1>
                            </u>
                            <div className="grid grid-cols-2 gap-4 place-content-start h-48 ml-3 ">
                                <div className="card w-full  lg:w-42">
                                    <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                        <img
                                            className="w-full"
                                            src="https://kulinerkota.com/wp-content/uploads/2021/01/gubug-makan-mang-engking.jpg"
                                            alt="Gambar 1"
                                        />
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                            <div className="flex justify-start items-end h-full">
                                                <div className="text-white m-3">
                                                    <Link
                                                        href={route("readnews")}
                                                        as="button"
                                                    >
                                                        <h4 className="text-left text-white font-bold m-2">
                                                            Kuliner Purwokerto
                                                            Yang Wajib Dicoba!
                                                        </h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card w-full  lg:w-42">
                                    <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                        <img
                                            className="w-full"
                                            src="https://kulinerkota.com/wp-content/uploads/2021/01/gubug-makan-mang-engking.jpg"
                                            alt="Gambar 1"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                <div className="flex justify-start items-end h-full">
                                                    <div className="text-white m-3">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <h4 className="text-left text-white font-bold m-2">
                                                                Kuliner
                                                                Purwokerto Yang
                                                                Wajib Dicoba!
                                                            </h4>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="card w-full  lg:w-42">
                                    <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                        <img
                                            className="w-full"
                                            src="https://kulinerkota.com/wp-content/uploads/2021/01/gubug-makan-mang-engking.jpg"
                                            alt="Gambar 1"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                <div className="flex justify-start items-end h-full">
                                                    <div className="text-white m-3">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <h4 className="text-left text-white font-bold m-2">
                                                                Kuliner
                                                                Purwokerto Yang
                                                                Wajib Dicoba!
                                                            </h4>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="card w-full  lg:w-42">
                                    <div className="relative  overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-2">
                                        <img
                                            className="w-full"
                                            src="https://kulinerkota.com/wp-content/uploads/2021/01/gubug-makan-mang-engking.jpg"
                                            alt="Gambar 1"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                <div className="flex justify-start items-end h-full">
                                                    <div className="text-white m-3">
                                                        <Link
                                                            href={route(
                                                                "readnews"
                                                            )}
                                                            as="button"
                                                        >
                                                            <h4 className="text-left text-white font-bold m-2">
                                                                Kuliner
                                                                Purwokerto Yang
                                                                Wajib Dicoba!
                                                            </h4>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default MainNews;
