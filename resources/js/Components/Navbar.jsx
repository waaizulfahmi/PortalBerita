import { Link } from "@inertiajs/react";
// import Moment from "react-moment";

const Navbar = () => {
    const current = new Date();
    const date = `${current.toLocaleString("id", {
        weekday: "long",
    })}, ${current.getDate()} ${current.toLocaleString("id", {
        month: "long",
    })} ${current.getFullYear()} 
    `;
    return (
        <div className="md:container md:mx-auto mt-5">
            <div className="navbar bg-violet-900 p-6">
                <div className="flex-1">
                    <Link
                        href={route("home")}
                        as="button"
                        className="btn btn-ghost normal-case text-4xl text-white"
                    >
                        Panelwarta.id
                    </Link>
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
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://www.hannibalsafari.com.au/wp-content/uploads/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">Profile</a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar bg-violet-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
                        >
                            <li>
                                <Link href={route("home")} as="button">
                                    Berita
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Olahraga",
                                    })}
                                    as="button"
                                >
                                    Olahraga
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Wisata",
                                    })}
                                    as="button"
                                >
                                    Wisata
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Kuliner",
                                    })}
                                    as="button"
                                >
                                    Kuliner
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Profile",
                                    })}
                                    as="button"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Bisnis",
                                    })}
                                    as="button"
                                >
                                    Bisnis
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Daerah",
                                    })}
                                    as="button"
                                >
                                    Daerah
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Nasional",
                                    })}
                                    as="button"
                                >
                                    Nasional
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("shownews", {
                                        category: "Mancanegara",
                                    })}
                                    as="button"
                                >
                                    Mancanegara
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href={route("home")} as="button">
                                Berita
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Olahraga",
                                })}
                                as="button"
                            >
                                Olahraga
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Wisata",
                                })}
                                as="button"
                            >
                                Wisata
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Kuliner",
                                })}
                                as="button"
                            >
                                Kuliner
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Profile",
                                })}
                                as="button"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Bisnis",
                                })}
                                as="button"
                            >
                                Bisnis
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Daerah",
                                })}
                                as="button"
                            >
                                Daerah
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Nasional",
                                })}
                                as="button"
                            >
                                Nasional
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("shownews", {
                                    category: "Mancanegara",
                                })}
                                as="button"
                            >
                                Mancanegara
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <h4 className="font-bold text-lg mr-2">{date}</h4>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
