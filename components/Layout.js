import styles from "./A.module.css";

export default function Layout({ children }) {
  return <div className={styles.app}>{children}</div>;
}
