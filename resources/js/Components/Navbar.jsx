import MainNews from "@/Pages/MainNews";
import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div>
            <header className="bg-slate-600 p-20">
                <h1 className="text-white text-4xl text-center">Panel Warta</h1>
                <h2 className="text-white text-xl text-center">
                    All About Information
                </h2>
            </header>
            <div className="drawer ">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    <div className="w-full h-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label
                                htmlFor="my-drawer-3"
                                className="btn btn-square btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}

                        <div className="flex-1 hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <li>
                                    <a>Berita</a>
                                </li>
                                <li>
                                    <a>Nasional</a>
                                </li>
                                <li>
                                    <a>Daerah</a>
                                </li>
                                <li>
                                    <a>Wisata</a>
                                </li>
                                <li>
                                    <a>Olahraga</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <div className="form-control px-5">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 static">
                        <MainNews />
                    </div>
                </div>
                <div className="drawer-side ">
                    <label
                        htmlFor="my-drawer-3"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-100 ">
                        <li>
                            <div className="form-control px-5">
                                <input
                                    type="text"
                                    placeholder="Cari"
                                    className="input input-bordered"
                                />
                            </div>
                        </li>
                        <li>
                            <a>Berita</a>
                        </li>
                        <li>
                            <a>Nasional</a>
                        </li>
                        <li>
                            <a>Daerah</a>
                        </li>
                        <li>
                            <a>Wisata</a>
                        </li>
                        <li>
                            <a>Olahraga</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
