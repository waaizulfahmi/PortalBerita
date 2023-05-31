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
            <div className="navbar rounded-t bg-violet-900 lg:p-6 p-4">
                <div className="flex-1 mr-3">
                    <Link
                        href={route("home")}
                        as="button"
                        className="btn btn-ghost normal-case lg:text-4xl text-2xl text-white"
                    >
                        Panelwarta.<span className="text-orange-400">id</span>
                    </Link>
                </div>
                <div className=" flex lg:flex-none gap-3">
                    <div className="form-control">
                        <form
                            class="flex items-center"
                            method="get"
                            action="/search"
                        >
                            <label for="simple-search" class="sr-only">
                                Search
                            </label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    name="search"
                                    id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                class="p-2.5 ml-2 text-sm font-medium text-white bg-violet-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </form>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-12 rounded-full">
                                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <Link href={route("login")} as="button">
                                <li>
                                    <a className="justify-between">Login</a>
                                </li>
                            </Link>
                            <Link href={route("register")} as="button">
                                <li>
                                    <a>Register</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar bg-violet-200 rounded-b">
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
