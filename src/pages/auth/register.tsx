import Link from "next/link";

Link

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <p>
                Belum punya akun ?? Login <Link href={'/auth/login'}>Disini</Link>
            </p>
        </div>
    );
};

export default RegisterPage;