<<<<<<< HEAD
import MainNews from "@/Pages/MainNews";
// import { Link } from "@inertiajs/react";
=======
import { Link } from "@inertiajs/react";
>>>>>>> 313dbbd2fd1642089dd1f9dcd763f8e3acd1ec12

const Navbar = () => {
    return (
        <div className="md:container md:mx-auto mt-5">
            <div className="navbar bg-violet-900 p-6">
                <div className="flex-1">
<<<<<<< HEAD
                    <h1 className="text-white text-5xl btn btn-ghost normal-case ">
                        PanelWarta.id
                    </h1>
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
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Login</a>
                            </li>
                            <li>
                                <a>Setting</a>
                            </li>
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
                            />
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
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
                            <button>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className="relative hidden md:block">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        aria-hidden="true"
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
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                            <button
                                data-collapse-toggle="navbar-search"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-search"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-search"
                        >
                            <div className="relative mt-3 md:hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        aria-hidden="true"
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
                                    type="text"
                                    id="search-navbar"
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Services
                                    </a>
                                </li>
                            </ul>
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
=======
                    <Link href={route('home')} as="button" className="btn btn-ghost normal-case text-4xl text-white">Panelwarta.id</Link>
                </div>
            <div className="flex-none gap-3">
                <div className="form-control">
                     <input type="text" placeholder="Search" className="input input-bordered" />
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
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
>>>>>>> 313dbbd2fd1642089dd1f9dcd763f8e3acd1ec12
            </div>
        </div>
        </div>

            <div className="navbar bg-violet-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56">
                            <li><Link href={route('home')} as="button">Berita</Link></li>
                            <li><Link href={route('shownews')} as="button">Olahraga</Link></li>
                            <li><Link href={route('shownews')} as="button">Wisata</Link></li>
                            <li><Link href={route('shownews')} as="button">Kuliner</Link></li>
                            <li><Link href={route('shownews')} as="button">Profile</Link></li>
                            <li><Link href={route('shownews')} as="button">Bisnis</Link></li>
                            <li><Link href={route('shownews')} as="button">Daerah</Link></li>
                            <li><Link href={route('shownews')} as="button">Nasional</Link></li>
                            <li><Link href={route('shownews')} as="button">Mancanegara</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href={route('home')} as="button">Berita</Link></li>
                            <li><Link href={route('shownews')} as="button">Olahraga</Link></li>
                            <li><Link href={route('shownews')} as="button">Wisata</Link></li>
                            <li><Link href={route('shownews')} as="button">Kuliner</Link></li>
                            <li><Link href={route('shownews')} as="button">Profile</Link></li>
                            <li><Link href={route('shownews')} as="button">Bisnis</Link></li>
                            <li><Link href={route('shownews')} as="button">Daerah</Link></li>
                            <li><Link href={route('shownews')} as="button">Nasional</Link></li>
                            <li><Link href={route('shownews')} as="button">Mancanegara</Link></li>
                </ul>
            </div>
        <div className="navbar-end">
            <h4 className="font-bold text-lg">Jumat, 5 Mei 2023</h4>
        </div>
        </div>

</div>
        
    );
};

export default Navbar;
