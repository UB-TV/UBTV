import { Link, router } from "@inertiajs/react";

import Button from "@/Components/Shared/Button";
// Component
import LoginForm from "@/Components/Auth/LoginForm";

const Login = () => {
    return (
        <main className="flex justify-center items-center min-h-screen">
            <div className="w-[80%] max-w-[610px] flex flex-col gap-12">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="heading-3 font-bold">MASUK</h1>
                    <p className="body-1">Masukkan data anda untuk Masuk</p>
                </div>
                <LoginForm />
                <Button
                    type="button"
                    label="Masuk menggunakan GoogleSSO"
                    style="Filled"
                    color="Primary"
                    width="Full"
                    size="Large"
                    onClick={() =>
                        router.visit("/sso/google/redirect", { replace: true })
                    }
                />
                <span className="heading-6 font-semibold text-center">
                    Belum Punya Akun?
                    <Link
                        href="/register"
                        className="text-secondary-700 underline"
                    >
                        Daftar
                    </Link>
                </span>
            </div>
        </main>
    );
};

export default Login;
