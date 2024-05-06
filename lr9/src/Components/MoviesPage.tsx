import { Header } from "./Header/Header";
import { MovieCard } from "./MovieCard/MovieCard";

export const MoviesPage = () => (
    <>
        <Header />
        <div className="container">
            <h1>Movies</h1>

            <div className="movies__list">
                <MovieCard name="Матрица" date="1999" type="movie" url="https://pic.rutubelist.ru/video/2a/88/2a8877fa67a2ac9cc1cb29a745ed4d6b.jpg"/>
                <MovieCard name="Пять ночей с фредди" date="2023" type="movie" url="https://kinogo.biz/uploads/mini/minifull/5ec/1698428358-828950301.webp"/>
                <MovieCard name="Проект X: Дорвались" date="2012" type="movie" url="https://kinogo.biz/uploads/mini/minifull/cf5/1585479965-626182407.webp"/>
                <MovieCard name="Гран Туризмо" date="2023" type="movie" url="https://kinogo.biz/uploads/mini/minifull/938/1691354999-1128513086.webp"/>
                <MovieCard name="Неудержимые 4" date="2023" type="movie" url="https://kinogo.biz/uploads/mini/minifull/46a/1686852100-89056989.webp"/>
                <MovieCard name="Синий Жук" date="20232" type="movie" url="https://kinogo.biz/uploads/mini/minifull/b4e/1692377558-1243925645.webp"/>
            </div>
        </div>
    </>
);