import MainNews from "@/Pages/MainNews";
import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div>
            <div className="navbar bg-violet-900 p-10 ">
                <div className="flex-1">
                <h1 className="text-white text-5xl btn btn-ghost normal-case ">PanelWarta.id</h1>
                </div>
            <div className="flex-none gap-3">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src="https://www.hannibalsafari.com.au/wp-content/uploads/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
                <a className="justify-between">
                Profile
                <span className="badge">New</span>
            </a>
            </li>
                <li><a>Login</a></li>
                <li><a>Setting</a></li>
            </ul>
            </div>
            </div>
            </div>
            <div className="drawer ">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    <div className="w-full h-full navbar bg-base-200">
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
                                    <a>Olahraga</a>
                                </li>
                                <li>
                                    <a href="Home/">Wisata</a>
                                </li>
                                <li>
                                    <a>Kuliner</a>
                                </li>
                                <li>
                                    <a>Profile</a>
                                </li>
                                <li>
                                    <a>Bisnis</a>
                                </li>
                                <li>
                                    <a>Daerah</a>
                                </li>
                                <li>
                                    <a>Nasional</a>
                                </li>
                                <li>
                                    <a>Mancanegara</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-none hidden lg:block">
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
                            <a>Berita</a>
                        </li>
                        <li>
                            <a>Olahraga</a>
                        </li>
                        <li>
                            <a>Wisata</a>
                        </li>
                        <li>
                            <a>Kuliner</a>
                        </li>
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>Bisnis</a>
                        </li>
                        <li>
                            <a>Daerah</a>
                        </li>
                        <li>
                            <a>Nasional</a>
                        </li>
                        <li>
                            <a>Mancanegara</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
