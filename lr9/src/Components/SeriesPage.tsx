import { Header } from "./Header/Header"
import { MovieCard } from "./MovieCard/MovieCard";

export const SeriesPage = () => (
    <>
        <Header />
        <div className="container">
            <h1>Series</h1>

            <div className="movies__list">
                <MovieCard name="Сверхъестественное" date="2001" type="serie" url="https://w.forfun.com/fetch/64/64b65c4f83efd3f376693e2ac900001f.jpeg"/>
                <MovieCard name="Офис" date="2001" type="serie" url="https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-cda5cfd0-a58b-4c28-8604-e4dcfa5fdf21"/>
                <MovieCard name="Детство шелдона" date="2001" type="serie" url="https://w.forfun.com/fetch/ae/ae61da444b9c26aa915cfdf939fbe783.jpeg"/>
                <MovieCard name="Что если" date="2001" type="serie" url="https://w.forfun.com/fetch/ee/ee86725727e31161e8b54c7acf02a983.jpeg"/>
                <MovieCard name="Ведьмак" date="2001" type="serie" url="https://searchthisweb.com/wallpaper/the-witcher-3_1920x1300_mssf6.jpg"/>
                <MovieCard name="Монк" date="2001" type="serie" url="https://uzstudio.tv/uploads/posts/2023-04/1681486649_izquvar-monk.jpg"/>
            </div>
        </div>
    </>
);