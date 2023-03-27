import React, { useState } from "react";
import { Link, Head, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";

export default function EditNews(props) {
    console.log(props);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

            <div className="card w-full  lg:w-96 bg-base-100 shadow-xl">
                <figure>{/* <img src= alt="Shoes" /> */}</figure>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full "
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full "
                        defaultValue={props.myNews.description}
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full "
                        defaultValue={props.myNews.category}
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                    />
                    <button
                        className="m-2 btn btn-primary"
                        onClick={() => handleSubmit()}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}
