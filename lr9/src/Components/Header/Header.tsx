import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.header__inner}>
                <Link className={styles.header__logo} to="/">
                    <img src="https://freelogopng.com/images/all_img/1664035558meta-logo-png.png" alt="logo" />
                </Link>
                
                <nav className={styles.header__nav}>
                    <Link to="/movies">Movies</Link>
                    <Link to="/series">Series</Link>
                    <Link to="/cartoons">Cartoons</Link>
                </nav>
            </div>
        </div>
    </header>
);