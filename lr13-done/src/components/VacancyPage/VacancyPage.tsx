import React, { ReactNode } from 'react'
import vacancyList from '../../Vacancies';

import style from './VacancyPage.module.scss';

type VacancyPagePropsType = {
    id: number,
    content: ReactNode
}

function VacancyPage(props: VacancyPagePropsType) {

    const item = vacancyList.filter((element => {
        return element.id === props.id
    }))[0];

    console.log(item);

    if (item)
        return (
            <div className={style.vacancyPage}>
                <div className={style.vacancyPage__inner}>
                    <div className={style.vacancyPage__header}>
                        <div className={style.vacancyPage__header_upper}>
                            <div className={style.vacancyPage__header_logo}>
                                {item.url !== '' ? <img src={require('../../img/' + item.url + '.png')} alt={item.company} /> : <div className={style.placeholder}></div>}
                            </div>

                            <div className={style.vacancyPage__header_info}>

                                <div className={style.vacancyPage__header_position}>
                                    {item.position}
                                </div>

                                <div className={style.vacancyPage__header_company_city}>
                                    <div className={style.vacancyPage__header_company}>
                                        {item.company}
                                    </div>
                                    <div className={style.vacancyPage__header_city}>
                                        {item.city}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.vacancyPage__header_lower}>
                            От {item.salary[0]} до {item.salary[1]} руб.
                        </div>

                    </div>

                    <div className={style.vacancyPage__content}>
                        {props.content}
                    </div>
                </div>
            </div>
        )
    else
        return (<></>)
}

export default VacancyPage