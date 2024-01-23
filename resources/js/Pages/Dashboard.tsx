import { Link } from "@inertiajs/react";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
            <h1 className="heading-1 text-primary-600">This is a temporary Dashboard</h1>
            <div className="body-1 flex items-center gap-4">
                <Link className="text-blue-500 hover:underline" href="/login">
                    Login
                </Link>
                <Link className="text-blue-500 hover:underline" href="/register">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Dashboard
