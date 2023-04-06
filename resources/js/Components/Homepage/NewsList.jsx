import { Link } from "@inertiajs/react";
// import image from "./img-example.jpg";
import parser from "html-react-parser";

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div className="card w-full  lg:w-60 bg-base-100 shadow-xl" key={i}>
                {/* <Link href="/ShowNews"></Link> */}
                <figure>
                    <img
                        src={`http://localhost:8000/${data.image}`}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-primary">New</div>
                    </h2>
                    <p>{parser(data.description)}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-accent badge-outline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
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

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
