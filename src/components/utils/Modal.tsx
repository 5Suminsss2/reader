import styles from "./Modal.module.css";
import { useState } from 'react';

type ModalProps = {
    open: boolean;
    close: any;
};

function Modal({ open, close }: ModalProps): JSX.Element {

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(name, content, image);
        close();
    };

    function setThumbnail(event: any) {
        const reader = new FileReader();

        reader.onload = function (event: any) {
            const img = document.createElement("img");
            img.setAttribute("src", event.target.result);
            (document.querySelector("#bookImg") as HTMLInputElement).appendChild(img);
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <>
            {open ? (
                <div className={styles.modalBackground}>
                    <form className={styles.modal} onSubmit={onSubmit}>
                        <span className={styles.modalClose} onClick={close}>X</span>
                        <div className={styles.container}>
                            <div className={styles.bookImage}>
                                {/*https://sinna94.tistory.com/entry/JavaScript-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0*/}
                                <label htmlFor="image" className={styles.label}>이미지</label>
                                <input id="image" type="file" className={styles.imageInput} placeholder="URL" value={image}
                                    onChange={(e) => {
                                        setImage(e.target.value);
                                        setThumbnail(e);
                                    }} />
                                <div id="bookImg" className={styles.bookcover}></div>

                                <button className={styles.saveButton}>도전하기</button>
                            </div>

                            <div className={styles.bookInfo}>
                                <label htmlFor="title" className={styles.label}>제목</label>
                                <input id="title" type="text" className={styles.modalInput} placeholder="천 개의 파랑" value={name}
                                    onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="author" className={styles.label}>저자</label>
                                <input id="author" type="text" className={styles.modalInput} placeholder="천선란" value={name}
                                    onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="publisher" className={styles.label}>출판사</label>
                                <input id="publisher" type="text" className={styles.modalInput} placeholder="허블" value={name}
                                    onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="date" className={styles.label}>목표 날짜</label>
                                <input id="date" type="text" className={styles.modalInput} placeholder="2023-01-01" value={content}
                                    onChange={(e) => setContent(e.target.value)} />

                                <label htmlFor="page" className={styles.label}>총 페이지</label>
                                <input id="page" type="text" className={styles.modalInput} placeholder="376" value={content}
                                    onChange={(e) => setContent(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </div>
            ) : null}
        </>

    )
}

export default Modal;