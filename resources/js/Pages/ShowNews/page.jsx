import { Link } from "@inertiajs/react";

const Page = ({ meta }) => {
    return (
        <div className="btn-group grid grid-cols-2">
            <button className="btn btn-outline">Previous page</button>
            <button className="btn btn-outline">Next</button>
        </div>
    );
};

export default Page;
