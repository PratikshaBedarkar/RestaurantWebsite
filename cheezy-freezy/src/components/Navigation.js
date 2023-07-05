import styles from "./Navigation.module.css";
import CartButton from "./Cart/CartButton";
const Navigation = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles["nav-item"]}>
        <a href="#">Home</a>
      </li>
      <li className={styles["nav-item"]}>
        <a href="#">About</a>
      </li>
      <li className={`${styles["nav-item"]} ${styles.cart}`}><a><CartButton/></a></li>
    </ul>
  );
};

export default Navigation;
