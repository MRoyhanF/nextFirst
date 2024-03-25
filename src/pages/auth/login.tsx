import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  
  const handlerLogin = () => {
    push("/product");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum punya akun ?? Registrasi <Link href={"/auth/register"}>Disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
