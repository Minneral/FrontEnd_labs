import { Header } from "./Header/Header";
import { MovieCard } from "./MovieCard/MovieCard";

export const CartoonsPage = () => (
    <>
        <Header />
        <div className="container">
            <h1>Cartoons</h1>

            <div className="movies__list">
                <MovieCard url="https://sun6-20.userapi.com/s/v1/if1/yvUtHwPjd6jzeQQgPWeG995pp0KgBd81xhqafWlBeNSUkkVMuHKQwmrfWJ0wAJBqseXndg.jpg?size=1143x1143&quality=96&crop=481,0,1143,1143&ava=1" name="Смешарики" date="1999" type="cartoon"/>
                <MovieCard url="https://phonoteka.org/uploads/posts/2022-06/1656600543_65-phonoteka-org-p-oboi-luntik-67.jpg" name="Лунтик" date="1999" type="cartoon"/>
                <MovieCard url="https://polotnos.cdnbro.com/posts/58751748-stikery-barboskiny-22.jpg" name="Барбоскины" date="1999" type="cartoon"/>
                <MovieCard url="https://deti-skazki.ru/wp-content/uploads/2020/07/sledstvie-vedet-kolobok.jpg" name="Следствие ведут колобки" date="1999" type="cartoon"/>
                <MovieCard url="https://phonoteka.top/uploads/posts/2023-03/1679949780_phonoteka-org-p-karlson-personazhi-art-oboi-31.jpg" name="Карлсон" date="1999" type="cartoon"/>
            </div>
        </div>
    </>
);