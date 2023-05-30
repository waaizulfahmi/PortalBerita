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
                            <p className="text-sm">dilihat sebanyak {data.views} kali</p>
                        </div>
                    </div>
                </div>
            </section>
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
