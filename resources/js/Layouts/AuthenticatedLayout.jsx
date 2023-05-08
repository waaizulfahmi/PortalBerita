import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import { NavLink } from "react-router-dom";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import HeaderDashboard from "./dashboard-assets/HeaderDashboard";
import { FaGithubSquare } from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { FaBeer } from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

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
                <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                    <div className="p-6">
                        <a
                            href="index.html"
                            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                        >
                            <FaGithubSquare />
                        </a>
                        <Link href="/dashboard/post/new">
                            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                                <i className="fas fa-plus mr-3"></i> New Post
                            </button>
                        </Link>
                    </div>
                    <nav className="text-white text-base font-semibold pt-3">
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
                        {/* <a
                            href="#"
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        >
                            <i className="fas fa-align-left mr-3"></i>
                            Forms
                        </a>
                        <a
                            href="#"
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        >
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Tabbed Content
                        </a>
                        <a
                            href="#"
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        >
                            <i className="fas fa-calendar mr-3"></i>
                            Calendar
                        </a> */}
                    </nav>
                    {/* <a
                    href="#"
                    className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
                >
                    <i className="fas fa-arrow-circle-up mr-3"></i>
                    Upgrade to Pro!
                </a> */}
                </aside>
                {/* <HeaderDashboard /> */}
                <div className="w-full flex flex-col h-screen overflow-y-hidden">
                    {/* <!-- Desktop Header --> */}
                    <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                        <div className="w-1/2"></div>
                        <div className="relative w-1/2 flex justify-end mx-3 ">
                            <button className="btn btn-ghost btn-circle mt-2">
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
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
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
                                                        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
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
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
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
                            {/* <button @click="isOpen = !isOpen" className="text-white text-3xl focus:outline-none">
                    <i x-show="!isOpen" className="fas fa-bars"></i>
                    <i x-show="isOpen" className="fas fa-times"></i>
                </button> */}
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
                        </nav>
                        {/* <!-- <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i> New Report
            </button> --> */}
                    </header>

                    <div className="w-full overflow-x-hidden border-t flex flex-col">
                        <div className="w-full flex-grow p-6">
                            <main>{children}</main>
                            {/* <div className="flex flex-wrap mt-6">
                                <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
                                    <p className="text-xl pb-3 flex items-center">
                                        <i className="fas fa-plus mr-3"></i>{" "}
                                        Monthly Reports
                                    </p>
                                    <div className="p-6 bg-white">
                                        <canvas
                                            id="chartOne"
                                            width="400"
                                            height="200"
                                        ></canvas>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
                                    <p className="text-xl pb-3 flex items-center">
                                        <i className="fas fa-check mr-3"></i>{" "}
                                        Resolved Reports
                                    </p>
                                    <div className="p-6 bg-white">
                                        <canvas
                                            id="chartTwo"
                                            width="400"
                                            height="200"
                                        ></canvas>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="w-full mt-12">
                                <p className="text-xl pb-3 flex items-center">
                                    <i className="fas fa-list mr-3"></i> Latest
                                    Reports
                                </p>
                                <div className="bg-white overflow-auto">
                                    <table className="min-w-full bg-white">
                                        <thead className="bg-gray-800 text-white">
                                            <tr>
                                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                                                    Name
                                                </th>
                                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                                                    Last name
                                                </th>
                                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                                    Phone
                                                </th>
                                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                                    Email
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="w-1/3 text-left py-3 px-4">
                                                    Lian
                                                </td>
                                                <td className="w-1/3 text-left py-3 px-4">
                                                    Smith
                                                </td>
                                                <td className="text-left py-3 px-4">
                                                    <a
                                                        className="hover:text-blue-500"
                                                        href="tel:622322662"
                                                    >
                                                        622322662
                                                    </a>
                                                </td>
                                                <td className="text-left py-3 px-4">
                                                    <a
                                                        className="hover:text-blue-500"
                                                        href="mailto:jonsmith@mail.com"
                                                    >
                                                        jonsmith@mail.com
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> */}
                        </div>

                        <footer className="w-full bg-white text-right p-4">
                            2023 | Built by{" "}
                            <a
                                target="_blank"
                                href="https://davidgrzyb.com"
                                className="underline"
                            >
                                David Grzyb
                            </a>
                            .
                        </footer>
                    </div>
                </div>
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

        // LAMAAA
        // <div className="min-h-screen bg-gray-100">
        //     <nav className="bg-white border-b border-gray-100">
        //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //             <div className="flex justify-between h-16">
        //                 <div className="flex">
        //                     <div className="shrink-0 flex items-center">
        //                         <Link href="/">
        //                             <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
        //                         </Link>
        //                     </div>

        //                     <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
        //                         <NavLink
        //                             href={route("dashboard")}
        //                             active={route().current("dashboard")}
        //                         >
        //                             Dashboard Saya
        //                         </NavLink>
        //                     </div>
        //                 </div>

        //                 <div className="hidden sm:flex sm:items-center sm:ml-6">
        //                     <div className="ml-3 relative">
        // <Dropdown>
        //     <Dropdown.Trigger>
        //         <span className="inline-flex rounded-md">
        //             <button
        //                 type="button"
        //                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
        //             >
        //                 {auth.user.name}

        //                 <svg
        //                     className="ml-2 -mr-0.5 h-4 w-4"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     viewBox="0 0 20 20"
        //                     fill="currentColor"
        //                 >
        //                     <path
        //                         fillRule="evenodd"
        //                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                         clipRule="evenodd"
        //                     />
        //                 </svg>
        //             </button>
        //         </span>
        //     </Dropdown.Trigger>

        //     <Dropdown.Content>
        //         <Dropdown.Link
        //             href={route("profile.edit")}
        //         >
        //             Profile
        //         </Dropdown.Link>
        //         <Dropdown.Link
        //             href={route("logout")}
        //             method="post"
        //             as="button"
        //         >
        //             Log Out
        //         </Dropdown.Link>
        //     </Dropdown.Content>
        // </Dropdown>
        //                     </div>
        //                 </div>

        //                 <div className="-mr-2 flex items-center sm:hidden">
        //                     <button
        //                         onClick={() =>
        //                             setShowingNavigationDropdown(
        //                                 (previousState) => !previousState
        //                             )
        //                         }
        //                         className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        //                     >
        //                         <svg
        //                             className="h-6 w-6"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 className={
        //                                     !showingNavigationDropdown
        //                                         ? "inline-flex"
        //                                         : "hidden"
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                             <path
        //                                 className={
        //                                     showingNavigationDropdown
        //                                         ? "inline-flex"
        //                                         : "hidden"
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div
        //             className={
        //                 (showingNavigationDropdown ? "block" : "hidden") +
        //                 " sm:hidden"
        //             }
        //         >
        //             <div className="pt-2 pb-3 space-y-1">
        //                 <ResponsiveNavLink
        //                     href={route("dashboard")}
        //                     active={route().current("dashboard")}
        //                 >
        //                     Dashboard
        //                 </ResponsiveNavLink>
        //             </div>

        //             <div className="pt-4 pb-1 border-t border-gray-200">
        //                 <div className="px-4">
        //                     <div className="font-medium text-base text-gray-800">
        //                         {auth.user.name}
        //                     </div>
        //                     <div className="font-medium text-sm text-gray-500">
        //                         {auth.user.email}
        //                     </div>
        //                 </div>

        //                 <div className="mt-3 space-y-1">
        //                     <ResponsiveNavLink href={route("profile.edit")}>
        //                         Profile
        //                     </ResponsiveNavLink>
        //                     <ResponsiveNavLink
        //                         method="post"
        //                         href={route("logout")}
        //                         as="button"
        //                     >
        //                         Log Out
        //                     </ResponsiveNavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>

        //     {header && (
        //         <header className="bg-white shadow">
        //             <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        //                 {header}
        //             </div>
        //         </header>
        //     )}

        //     <main>{children}</main>
        // </div>
    );
}
