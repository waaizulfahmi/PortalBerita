const ShowNews = (props) => {
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {/* <MainNews /> */}
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <MainNews />
                {/* <SideNews /> */}
            </div>
            <h1 className="text-black p-4 lg:text-2xl  sm:text-xl ml-14">
                Berita Olahraga
            </h1>
            <div className="p-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center gap-5">
                <Paginator meta={props.news.meta} />
            </div>
            <Footer />
        </div>
    );
};

export default ShowNews;
