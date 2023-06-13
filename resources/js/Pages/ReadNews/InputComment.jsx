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
        setUsername("");
        setSlugPost(props.news.slug);
    };

    return (
        <div className="sm:ml-1 sm:mr-1 md:ml-3 md:mr-3 lg:w-3/5 xl:w-3/5">
            <div className="comment md:p-0 lg:p-0 p-1 lg:mb-0">
                {" "}
                <div className="comment h-22 w-30 sm:h-38 sm:w-full p-4 rounded-md bg-gray-300 mb-0 ">
                    <p className="font-bold xl:text-2xl lg:text-xl text-base sm:text-lg md:text-lg mb-4">
                        Tinggalkan Komentar Anda Disini
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
                            className="input input-bordered text-sm lg:text-base h-10 w-18 lg:h-14 lg:w-50 w-full mb-3"
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
                            value="KIRIM"
                            className="mt-3 btn btn-active btn-info lg:btn-sm sm:btn-sm md:btn-sm btn-xs"
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
