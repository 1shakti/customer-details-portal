import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <p className={styles.headerName}>Customer Details Portal</p>
    </header>
  );
}
