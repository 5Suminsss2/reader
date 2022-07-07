import Header from '../../shared/Header';
import styles from "./Main.module.css";
import imagA from '../../docs/layout1.jpg';
import { useState } from 'react';
import Modal from '../utils/Modal';
import { Link } from 'react-router-dom';

function Main() {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }
    function closeModal() {
        setOpen(false);
    }

    // function handleAddItem() {
    //     return ['wow'];
    // }


    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.addBook}>
                    <button onClick={openModal}>추가</button>
                </div>
                <Link to="./detail">
                    <div className={styles.bookInfo}>
                        <img src={imagA} alt="책 표지" />
                        <div className={styles.title}>책 제목</div>
                        <div className={styles.graph}>달성 그래프</div>
                    </div>
                </Link>
                <Link to="./detail">
                    <div className={styles.bookInfo}>
                        <img src={imagA} alt="책 표지" />
                        <div className={styles.title}>책 제목</div>
                        <div className={styles.graph}>달성 그래프</div>
                    </div>
                </Link>
                <Link to="./detail">
                    <div className={styles.bookInfo}>
                        <img src={imagA} alt="책 표지" />
                        <div className={styles.title}>책 제목</div>
                        <div className={styles.graph}>달성 그래프</div>
                    </div>
                </Link>
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
            <Modal open={open} close={closeModal} />
        </div>
    )
}

export default Main;