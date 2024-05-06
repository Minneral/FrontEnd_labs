import React, { useState } from 'react'
import vacancyList from '../../Vacancies';
import Vacancy from '../Vacancy/Vacancy';

import style from './VacancyCombine.module.scss';
import VacancyPage from '../VacancyPage/VacancyPage';


function VacancyCombine({ filter, isOnlyFavorite }: { filter: any | undefined, isOnlyFavorite: boolean }) {

    const [vacancies, setVacancies] = useState(vacancyList);
    const [favorite, setFavorite] = useState([1, 3]);
    const [selectedVacancy, setSelectedVacancy] = useState(0);

    let final: any[] = vacancies;

    console.log(filter);

    if (Object.keys(filter).length != 0) {
        final = final.filter((item) => (
            item.city.toLowerCase().includes(filter.city.toLowerCase()) &&
            (item.salary[0] >= Number(filter.salary) || item.salary[1] >= Number(filter.salary))
            // item.time.toLowerCase().includes(filter.time.toLowerCase()) &&
            // item.type.toLowerCase().includes(filter.type.toLowerCase()) &&
            // item.exp.toLowerCase().includes(filter.exp.toLowerCase())
        ))
    }

    if (isOnlyFavorite) {
        final = final.filter((item) => (
            favorite.includes(item.id)
        ))
    }

    return (
        <div className={style.vacancyCombine}>
            <div className="container">
                <div className={style.vacancyCombine__inner}>

                    <div className={style.vacancyCombine__list}>
                        {final.map((item, i) => (
                            <div className={style.vacancyCombine__list_item}>
                                <Vacancy
                                    key={item.id}
                                    id={item.id}
                                    selectedVacancy={selectedVacancy}
                                    setSelectedVacancy={setSelectedVacancy}
                                    company={item.company}
                                    position={item.position}
                                    city={item.city}
                                    flags={item.flags}
                                    date={item.date}
                                    favoriteList={favorite}
                                    setFavorite={setFavorite}
                                    url={item.url}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={style.vacancyCombine__page}>
                        {final.reduce((acc, curr) => {
                            return acc = acc || curr.id === selectedVacancy
                        }, false) ?
                            <VacancyPage
                                id={selectedVacancy}
                                content={<>
                                    Мы, <b>Winfinity</b>, занимаемся разработкой инновационных решений в области игорно-развлекательного контента.
                                    <br></br>
                                    <br></br>

                                    Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.
                                    <br></br>
                                    <br></br>


                                    Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!
                                    <br></br>
                                    <br></br>

                                    <b>И если у Вас есть:</b>
                                    <br></br>
                                    <br></br>

                                    опыт коммерческой разработки на JavaScript от 2 лет;
                                    <br></br>
                                    опыт коммерческой разработки на React от 2 лет;
                                    <br></br>
                                    опыт работы в команде с git;
                                    <br></br>

                                    опыт работы с любым сборщиком (webpack, gulp и т.д.).
                                    <br></br>

                                    …то <b>Вы именно тот, кого мы ищем!</b>
                                    <br></br>
                                    <br></br>

                                    Обязательные знания:
                                    <br></br>
                                    <br></br>

                                    Typescript;
                                    <br></br>
                                    Webpack;
                                    <br></br>
                                    Styled-components;
                                    <br></br>
                                    GraphQL;
                                    <br></br>
                                    Express;
                                    <br></br>
                                    MongoDB;
                                    <br></br>
                                    WebSockets;
                                    <br></br>
                                    Docker.
                                    <br></br>
                                    После испытательного срока мы предлагаем:
                                    <br></br>
                                    <br></br>

                                    возможную релокацию в столицу Латвии с помощью в оформлении всех необходимых документов;
                                    бесплатную стоянку рядом с современным офисом в центре города;
                                    медицинскую страховку;
                                    абонемент в спортивный зал.
                                    Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.
                                    <br></br>
                                    <br></br>

                                    Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.
                                </>}
                            /> : <></>}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default VacancyCombine