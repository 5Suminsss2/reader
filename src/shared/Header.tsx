import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                Reader
            </div>
        </div>
    )
}

export default Header;