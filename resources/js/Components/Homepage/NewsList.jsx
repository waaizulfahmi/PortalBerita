import { Link } from "@inertiajs/react";
import image from "./img-example.jpg";

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div className="card w-full  lg:w-60 bg-base-100 shadow-xl" key={i}>
                {/* <Link href="/ShowNews"></Link> */}
                    <Link href={route('readnews')} as="button"><img src={image} alt="Shoes" /></Link>
                <div className="card-body">
                    <Link href={route('readnews')} as="button"><h2 className="card-title transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        {data.title}
                        <div className="badge badge-primary">New</div>
                    </h2></Link>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-accent badge-outline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>Saat Ini Belum ada Beritanya </div>;
};

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
 