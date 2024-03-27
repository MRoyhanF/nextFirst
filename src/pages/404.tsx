import style from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={style.error}>
      <img src="/404.png" alt="" className={style.error__image} />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
};

export default Custom404;
