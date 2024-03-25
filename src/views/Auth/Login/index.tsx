import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>
        Belum punya akun ?? Registrasi <Link href={"/auth/register"}>Disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
