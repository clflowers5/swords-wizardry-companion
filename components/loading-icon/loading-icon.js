import styles from "./styles.module.css";

function LoadingIcon() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
}

export default LoadingIcon;
