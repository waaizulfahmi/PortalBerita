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
            <div className="sticky top-0">
                <nav className="sticky top-0 navbar bg-base-100 ">
                    <div className="flex-1">
                        {/* <a className="btn btn-ghost normal-case text-xl">
                        Panel Warta
                    </a> */}
                        <ul className="menu menu-horizontal px-5">
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
                    <div className="flex-none"></div>
                    <div className="flex-none gap-2">
                        <div className="form-control px-5">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered"
                            />
                        </div>
                        {/* <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link
                                        className="justify-between"
                                        href={route("login")}
                                        as="button"
                                    >
                                        Login
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="justify-between"
                                        href={route("register")}
                                        as="button"
                                    >
                                        Register
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href={route("dashboard")} as="button">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        as="button"
                                        method="post"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div> */}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
