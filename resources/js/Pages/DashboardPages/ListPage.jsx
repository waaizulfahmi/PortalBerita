import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const ListPage = (props) => {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Berita Saya (Testing)
                </h2>
            }
        >
            <div>
                <h1>Ini adalah Halaman List berita</h1>
            </div>
        </AuthenticatedLayout>
    );
};

export default ListPage;
