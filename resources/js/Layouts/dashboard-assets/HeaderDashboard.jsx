const HeaderDashboard = () => {
    return (
        <div>
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                    {/* <button @click="isOpen = !isOpen" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400">
                </button> */}
                    {/* <button x-show="isOpen" @click="isOpen = false" class="h-full w-full fixed inset-0 cursor-default"></button> */}
                    <div
                        x-show="isOpen"
                        class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
                    >
                        <a
                            href="#"
                            class="block px-4 py-2 account-link hover:text-white"
                        >
                            Account
                        </a>
                        <a
                            href="#"
                            class="block px-4 py-2 account-link hover:text-white"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            class="block px-4 py-2 account-link hover:text-white"
                        >
                            Sign Out
                        </a>
                    </div>
                </header>

                {/* Mobile Header + Navbar */}

                <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
                    <div class="flex items-center justify-between">
                        <a
                            href="index.html"
                            class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                        >
                            Admin
                        </a>
                        {/* <button @click="isOpen = !isOpen" class="text-white text-3xl focus:outline-none">
                    <i x-show="!isOpen" class="fas fa-bars"></i>
                    <i x-show="isOpen" class="fas fa-times"></i>
                </button> */}
                    </div>
                    <nav className="flex flex-col pt-4">
                        <a
                            href=""
                            className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
                        >
                            dashboard
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                        >
                            dashboard
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                        >
                            dashboard
                        </a>
                        <a
                            href=""
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                        >
                            dashboard
                        </a>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default HeaderDashboard;
