import Header from '../../shared/Header';
import styles from "./Main.module.css";
import imagA from '../../docs/layout1.jpg';
import { useState } from 'react';
import Modal from '../utils/Modal';
import { Link } from 'react-router-dom';

function Main() {
    const initData = [
        {
            author: "소주",
            content: "저는 소주를 안 좋아해요!",
            image:
                "https://cdn.pixabay.com/photo/2017/10/22/08/02/bottle-2877005__340.jpg",
        },
        {
            name: "맥주",
            content: "요즘 흑맥주가 좋아요.",
            image:
                "https://cdn.pixabay.com/photo/2015/06/24/13/31/beer-820011_1280.jpg",
        },
        {
            name: "샴페인",
            content: "샴페인 좋아요~ 샴페인 좋아요~",
            image:
                "https://cdn.pixabay.com/photo/2017/03/27/13/36/champagne-2178775__340.jpg",
        },
    ];


    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }
    function closeModal() {
        setOpen(false);
    }

    const [data, setData] = useState(initData);

    let handleAddItem = (item: any) => {
        setData([...data, item]);
    };



    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.addBook}>
                    <button onClick={openModal}>추가</button>
                </div>

                <Link to="./detail" className={styles.bookInfo}>
                    <img src="https://bookthumb-phinf.pstatic.net/cover/225/236/22523637.jpg?type=m140&udate=20220617" alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </Link>
                <Link to="./detail" className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </Link>
                <Link to="./detail" className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </Link>
                <Link to="./detail" className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </Link>
                <Link to="./detail" className={styles.bookInfo}>
                    <img src={imagA} alt="책 표지" />
                    <div className={styles.title}>책 제목</div>
                    <div className={styles.graph}>달성 그래프</div>
                </Link>
            </div>
            <Modal open={open} close={closeModal} handleAddItem={handleAddItem} />
        </div >
    )
}

export default Main;