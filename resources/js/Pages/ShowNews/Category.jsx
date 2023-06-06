import { Link } from "@inertiajs/react";

const isNews = (news) => {
    return news.map((data, i) => {
        const dateString = data.created_at;
        const formatDate = (dateString) => {
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
            };
            return new Date(dateString).toLocaleDateString("id", options);
        };
        return (
            <section className="dark:bg-gray-900">
                <div className="container mx-auto bg-base-100">
                    <div className="lg:flex">
                        <img
                            className="object-cover w-full h-56 rounded-lg lg:w-64"
                            src={"/storage/" + data.image}
                            alt="Gambar Berita"
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <Link
                                href={route("read", { slug: data.slug })}
                                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                            >
                                {data.title}
                            </Link>
                            <p>{data.category}</p>
                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                {data.author}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                {formatDate(dateString)}
                            </span>
                            <p className="text-sm">
                                dilihat sebanyak {data.views} kali
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
        2;
    });
};

const noNews = () => {
    return (
        <div className=" min-h-screen bg-slate-50">
            <div className="p-4 items-center justify-center ">
                <div className="alert  text-xl mx-auto justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>
                        Maaf, Artikel dengan Kategori yang Anda Pilih belum ada.
                    </span>
                </div>
            </div>
        </div>
    );
};

const Category = ({ news }) => {
    return news == 0 ? noNews() : isNews(news);
};
export default Category;
