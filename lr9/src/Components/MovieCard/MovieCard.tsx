import styles from './MovieCard.module.css';

type MovieCardPropsType = {
    url: string,
    name: string,
    date: string,
    type: string
}

export const MovieCard = (props: MovieCardPropsType) => (
    <div className={styles.card}>
        <div className={styles.card__image}>
            <img src={props.url} alt={props.date} />
        </div>

        <div className={styles.card__info}>
            <div className={styles["card__info-upper"]}>
                {props.name}
            </div>

            <div className={styles["card__info-lower"]}>
                <div className={styles["card__info-date"]}>
                    {props.date}
                </div>

                <div className={styles["card__info-type"]}>
                    {props.type}
                </div>
            </div>
        </div>
    </div>
);
