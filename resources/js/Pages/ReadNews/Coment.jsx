import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router, Head } from "@inertiajs/react";

const isComment = (comments, news) => {
    // console.log(props.comments);

    return comments.map((data, i) => {
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
            <div className="space-y-2 ">
                <div className="flex m-2" key={i}>
                    <div className="flex-shrink-0 mr-3">
                        <img
                            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                        />
                    </div>
                    <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
                        <strong>{data.username}</strong>{" "}
                        <span className="text-sm text-gray-400 ">
                            {formatDate(dateString)}
                        </span>
                        <p className="text-sm">{data.comment}</p>
                        {/* <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                                            Balas
                                        </h4> */}
                    </div>
                </div>

                {/* <div className="flex">
                                <div className="flex-shrink-0 mr-3">
                                    <img
                                        className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                                        src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
                                    <strong>Sarah</strong>{" "}
                                    <span className="text-xs text-gray-400">
                                        20 Mei 2023
                                    </span>
                                    <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                    </p>
                                    <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                                        Balas
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0 mr-3">
                                                <img
                                                    className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-base-300">
                                                <strong>Sarah</strong>{" "}
                                                <span className="text-xs text-gray-400">
                                                    21 Mei 2023
                                                </span>
                                                <p className="text-xs sm:text-sm">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt ut labore et
                                                    dolore magna aliquyam erat,
                                                    sed diam voluptua.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0 mr-3">
                                                <img
                                                    className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-base-300">
                                                <strong>Sarah</strong>{" "}
                                                <span className="text-xs text-gray-400">
                                                    21 Mei 2023
                                                </span>
                                                <p className="text-xs sm:text-sm">
                                                    Lorem ipsum dolor sit amet,
                                                    consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod
                                                    tempor invidunt ut labore et
                                                    dolore magna aliquyam erat,
                                                    sed diam voluptua.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
        );
        2;
    });
};

const noNews = () => {
    return (
        <div>
            <h1 className="text-xl items-center">
                <b>Belum Ada Komentar</b>
            </h1>{" "}
        </div>
    );
};

const Coment = ({ comments }) => {
    return comments == 0 ? noNews() : isComment(comments);
};

export default Coment;
