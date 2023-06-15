import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router, Head } from "@inertiajs/react";

const isComment = (comments, news) => {
    console.log(comments[0].sentiment);

    return comments.map((data, i) => {
        const renderSentiment = () => {
            if (comments[i].sentiment === "[0]\n") {
                return (
                    <div className="badge badge-error badge-outline">
                        Negatif
                    </div>
                );
            } else {
                return (
                    <div className="badge badge-accent badge-outline">
                        Positif
                    </div>
                );
            }
        };
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
                        <p className="text-sm" name="comment">
                            {data.comment} {renderSentiment()}
                        </p>
                        {/* <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                                            Balas
                                        </h4> */}
                    </div>
                </div>
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
