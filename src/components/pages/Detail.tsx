import styles from "./Detail.module.css";

function Detail() {
    return (
        <div className={styles.container}>
            <div className={styles.day}>D-15</div>
            <section className={styles.main}>
                <div className={styles.bookCover}>
                    <img className={styles.bookCoverImg}></img>
                </div>
                <div className={styles.bookInfo}>
                    <div className={styles.bookDetailInfo}>
                        <div className={styles.book}>
                            <span>제목</span>
                            <span>만 개의 파랑</span>
                        </div>
                        <div className={styles.book}>
                            <span>저자</span>
                            <span>만만만</span>
                        </div>
                        <div className={styles.book}>
                            <span>출판사</span>
                            <span>네모네모</span>
                        </div>
                        <div className={styles.book}>
                            <span>도전날짜</span>
                            <span>2020-01-01</span>
                        </div>
                    </div>
                    <form className={styles.form}>
                        <input placeholder='읽은 페이지 추가' />
                        <button type='submit'>등록</button>
                    </form>
                </div>
            </section>
            <div className={styles.rate}>
                <p>달성률</p>
                <div className={styles.graph}>80%</div>
            </div>
        </div >
    )
}

export default Detail;