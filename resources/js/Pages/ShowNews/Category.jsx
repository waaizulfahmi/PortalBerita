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
                        <div className="lg:flex md-flex">
                            <img
                                className="object-cover h-48 w-full rounded-md lg:w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                src={"/storage/" + data.image}
                                alt="Gambar Berita"
                            />

                            <div className="flex flex-col justify-between py-3 lg:mx-6">
                                <Link
                                    href={route("read", { slug: data.slug })}
                                    className="text-lg ml-4 mr-2 font-semibold text-gray-800 hover:underline dark:text-white "
                                >
                                    {data.title}
                                </Link>
                                <p className="ml-4">{data.category}</p>
                                <div className="ml-4 text-xs text-gray-500 dark:text-gray-300">
                                    {data.author}
                                </div>
                                <div className="text-xs ml-4 text-gray-500 dark:text-gray-300">
                                    {formatDate(dateString)}
                                </div>
                            </div>
                        </div>
        );
        2;
    });
};

const noNews = () => {
    return <div>Saat Ini Belum ada Beritanya </div>;
};

const Category = ({ news }) => {
    return !news ? noNews() : isNews(news);
};
export default Category;
