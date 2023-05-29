import { useState, useEffect } from "react";
import { router, Head } from "@inertiajs/react";

const InputComment = (props) => {
    const [comment, setComment] = useState("");
    const [username, setUsername] = useState("");
    const [slug, setSlugPost] = useState("");

    const handleSubmit = () => {
        const data = {
            comment,
            username,
            slug,
        };
        router.post(route("comment.data", { slug: props.news.slug }), data);
        setComment("");
        setSlugPost(news.slug);
        setUsername("");
    };

    return (
        <div className="container mx-auto">
            <div className="comment md:w-3/5">
                {" "}
                <div className="comment h-22 w-30 p-3 rounded-md bg-base-200 mb-5">
                    <p className="font-bold lg:text-xl text-base mb-2">
                        Komentar
                    </p>
                    {/* <form
                        action={route("comment.data", {
                            slug: props.news.slug,
                        })}
                        method="post"
                    > */}
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
                            onClick={handleSubmit}
                        />
                    </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
};

export default InputComment;
