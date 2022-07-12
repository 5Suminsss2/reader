import styles from "./Modal.module.css";
import { useState } from 'react';

type ModalProps = {
    open: boolean;
    close: any;
    handleAddItem: any;
};

function Modal({ open, close, handleAddItem }: ModalProps): JSX.Element {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [date, setDate] = useState("");
    const [page, setPage] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(image, title, author, publisher, date, page);
        handleAddItem({ image, title, author, publisher, date, page });
        close();
    };



    return (
        <>
            {open ? (
                <div className={styles.modalBackground}>
                    <form className={styles.modal} onSubmit={onSubmit}>
                        <span className={styles.modalClose} onClick={close}>X</span>
                        <div className={styles.container}>
                            <div className={styles.bookInfo}>
                                <label htmlFor="title" className={styles.label}>제목</label>
                                <input id="title" type="text" className={styles.modalInput} placeholder="천 개의 파랑" value={title}
                                    onChange={(e) => setTitle(e.target.value)} />

                                <label htmlFor="author" className={styles.label}>저자</label>
                                <input id="author" type="text" className={styles.modalInput} placeholder="천선란" value={author}
                                    onChange={(e) => setAuthor(e.target.value)} />

                                <label htmlFor="publisher" className={styles.label}>출판사</label>
                                <input id="publisher" type="text" className={styles.modalInput} placeholder="허블" value={publisher}
                                    onChange={(e) => setPublisher(e.target.value)} />

                                <label htmlFor="date" className={styles.label}>목표 날짜</label>
                                <input id="date" type="text" className={styles.modalInput} placeholder="2023-01-01" value={date}
                                    onChange={(e) => setDate(e.target.value)} />

                                <label htmlFor="page" className={styles.label}>총 페이지</label>
                                <input id="page" type="number" className={styles.modalInput} placeholder="376" value={page}
                                    onChange={(e) => setPage(e.target.value)} />
                                <label htmlFor="image" className={styles.label}>이미지</label>
                                <input id="image" type="text" className={styles.modalInput} placeholder="URL" value={image}
                                    onChange={(e) => {
                                        setImage(e.target.value);

                                    }} />
                                <button className={styles.saveButton}>도전하기</button>
                            </div>
                        </div>
                    </form>
                </div>
            ) : null}
        </>

    )
}

export default Modal;