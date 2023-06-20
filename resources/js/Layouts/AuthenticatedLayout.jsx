import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import { NavLink } from "react-router-dom";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import HeaderDashboard from "./dashboard-assets/HeaderDashboard";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { FaBeer } from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const current = new Date();
    const date = `${current.toLocaleString("id", {
        weekday: "long",
    })}, ${current.getDate()} ${current.toLocaleString("id", {
        month: "long",
    })} ${current.getFullYear()}  ${current.toLocaleTimeString("id", {
        hour: "2-digit",
        minute: "2-digit",
    })} WIB`;

    const [titlePage, setTitle] = useState("");

    useEffect(() => {
        setTitle(document.title);
    });
    console.log(titlePage);

    return (
        <div>
            <Head title="Dashboard "></Head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            {/* <title>{{ header }}</title> */}
            <meta name="author" content="David Grzyb" />
            <meta name="description" content />
            {/* <title>"Dashboard</title> */}
            {/* Tailwind */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: "\n        @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');\n        .font-family-karla { font-family: karla; }\n        .bg-sidebar { background: #3d68ff; }\n        .cta-btn { color: #3d68ff; }\n        .upgrade-btn { background: #1947ee; }\n        .upgrade-btn:hover { background: #0038fd; }\n        .active-nav-link { background: #1947ee; }\n        .nav-item:hover { background: #1947ee; }\n        .account-link:hover { background: #3d68ff; }\n    ",
                }}
            />
            <body className="bg-gray-100 font-family-karla flex">
                <div className="drawer">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        {/* <!-- Page content here --> */}
                        <div className="w-full flex flex-col h-screen overflow-y-hidden">
                            {/* <!-- Desktop Header --> */}
                            <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                                <label
                                    htmlFor="my-drawer"
                                    className="btn btn-circle swap swap-rotate ml-4"
                                >
                                    {/* <input type="checkbox" /> */}
                                    <svg
                                        className="swap-off fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                    </svg>
                                    {/* <svg
                                        className="swap-on fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512"
                                    >
                                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                    </svg> */}
                                </label>
                                <img
                                    width="25"
                                    height="25"
                                    src="https://img.icons8.com/ios/50/calendar--v1.png"
                                    alt="calendar--v1"
                                    className="ml-5"
                                />
                                <h6 className="text-sm mt-5 ml-2">{date}</h6>
                                <div className="w-1/2"></div>
                                <div className="relative w-1/2 flex justify-end mx-3 ">
                                    <button className="btn btn-ghost btn-circle mt-2">
                                        <div className="indicator">
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
                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                />
                                            </svg>
                                            <span className="badge badge-xs badge-primary indicator-item"></span>
                                        </div>
                                    </button>
                                    <div className="dropdown dropdown-end ">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        Hallo, {auth.user.name}
                                                        <label
                                                            tabIndex={0}
                                                            className="btn btn-ghost btn-circle avatar ml-3"
                                                        >
                                                            <div className=" realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                                                                <img src="/storage/post-images/profile.jpg" />
                                                            </div>
                                                        </label>
                                                        {/* <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg> */}
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                {/* <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link> */}
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>

                                        {/* <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul> */}
                                    </div>
                                </div>
                            </header>

                            {/* <!-- Mobile Header & Nav --> */}
                            <header
                                x-data="{ isOpen: false }"
                                className="w-full bg-sidebar py-5 px-6 sm:hidden"
                            >
                                <div className="flex items-center justify-between">
                                    <a
                                        href="index.html"
                                        className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                                    >
                                        Admin
                                    </a>
                                </div>

                                {/* <!-- Dropdown Nav --> */}
                                <nav className="flex flex-col pt-4">
                                    <Link
                                        className={
                                            "flex items-center active-nav-link text-white py-4 pl-6 nav-item "
                                        }
                                        href="/dashboard"
                                    >
                                        <i className="fas fa-tachometer-alt mr-3"></i>
                                        {/*  */}
                                        Dashboard
                                    </Link>

                                    <Link
                                        href="/dashboard/post/new"
                                        className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                                    >
                                        <i className="fas fa-sticky-note mr-3"></i>
                                        {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
                                        Buat Postingan
                                    </Link>
                                    <Link
                                        href="/dashboard/list/show"
                                        className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                                    >
                                        <i className="fas fa-table mr-3"></i>
                                        Daftar Postingan
                                    </Link>
                                    <Link
                                        href="/dashboard/list/show"
                                        className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                                    >
                                        <i className="fas fa-table mr-3"></i>
                                        Daftar Postingan
                                    </Link>
                                </nav>
                                {/* <!-- <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i> New Report
            </button> --> */}
                            </header>

                            <div className="w-full overflow-x-hidden border-t flex flex-col">
                                <div className="w-full flex-grow p-6">
                                    <main>{children}</main>
                                </div>

                                <footer className="w-full bg-white text-right p-4">
                                    2023 |{" "}
                                    <a
                                        target="_blank"
                                        href="https://davidgrzyb.com"
                                        className="underline"
                                    >
                                        Panel Warta
                                    </a>
                                    .
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu  w-64   bg-sidebar text-base-content relative bg-sidebar h-screen  hidden sm:block shadow-xl">
                            {/* <!-- Sidebar content here --> */}

                            <aside className="">
                                <div className="p-6">
                                    <a
                                        href="index.html"
                                        className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                                    >
                                        PanelWarta
                                    </a>
                                    <Link href="/dashboard/post/new">
                                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                                            <i className="fas fa-plus mr-3"></i>{" "}
                                            New Post
                                        </button>
                                    </Link>
                                </div>
                                <nav className="text-white text-base font-semibold pt-3">
                                    <Link
                                        // className={`flex items-center  text-white py-4 pl-6 nav-item `}
                                        className={
                                            "flex items-center  text-white py-4 pl-6 nav-item  " +
                                            (titlePage == "Dashboard - Laravel"
                                                ? "active-nav-link"
                                                : " ")
                                        }
                                        href="/dashboard"
                                    >
                                        <i className="fas fa-tachometer-alt mr-3"></i>
                                        {/*  */}
                                        Dashboard
                                    </Link>

                                    <Link
                                        href="/dashboard/post/new"
                                        className={
                                            "flex items-center  text-white py-4 pl-6 nav-item  " +
                                            (titlePage ==
                                            "Buat Postingan - Laravel"
                                                ? "active-nav-link"
                                                : " ")
                                        }
                                    >
                                        <i className="fas fa-sticky-note mr-3"></i>
                                        {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
                                        Buat Postingan
                                    </Link>
                                    <Link
                                        href="/dashboard/list/show"
                                        className={
                                            "flex items-center  text-white py-4 pl-6 nav-item  " +
                                            (titlePage ==
                                            "Daftar Postingan - Laravel"
                                                ? "active-nav-link"
                                                : " ")
                                        }
                                    >
                                        <i className="fas fa-table mr-3"></i>
                                        Daftar Postingan
                                    </Link>
                                    <Link
                                        href="/dashboard/list/comment"
                                        className={
                                            "flex items-center  text-white py-4 pl-6 nav-item  " +
                                            (titlePage ==
                                            "Daftar Komentar - Laravel"
                                                ? "active-nav-link"
                                                : " ")
                                        }
                                    >
                                        <i className="fas fa-table mr-3"></i>
                                        Daftar Komentar
                                    </Link>
                                </nav>
                            </aside>
                        </ul>
                    </div>
                </div>

                {/* <HeaderDashboard /> */}
            </body>
            <script
                crossOrigin
                src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
            ></script>
            <script
                crossOrigin
                src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
            ></script>
            <script
                crossOrigin
                src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
            ></script>
        </div>
    );
}
