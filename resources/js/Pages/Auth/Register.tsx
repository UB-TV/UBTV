import RegisterForm from "@/Components/Auth/RegisterForm"
import Button from "@/Components/Shared/Button"
import { Link } from "@inertiajs/react"

const Register = () => {
    return (
        <main className="flex justify-center items-center min-h-screen">
            <div className="w-[80%] max-w-[820px] flex flex-col gap-12">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="heading-3 font-bold">Daftar</h1>
                    <p className="body-1">Masukkan data anda untuk Masuk</p>
                </div>
                <RegisterForm />
                <span className="heading-6 font-semibold text-center">Sudah Punya Akun?
                    <Link href="/register" className="text-secondary-700 underline">
                        Masuk
                    </Link>
                </span>
            </div>
        </main>
    )
}

export default Register
