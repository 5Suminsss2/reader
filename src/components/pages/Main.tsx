import Header from '../utils/Header';
import styles from "./Main.module.css";
import imagA from '../../docs/layout1.jpg';

function Main() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.addBook}>
                    <button>추가</button>
                </div>
                <div className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </div>
                <div className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </div>
                <div className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </div>
                <div className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </div>
                <div className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </div>
            </div>
        </div>
    )
}

export default Main;