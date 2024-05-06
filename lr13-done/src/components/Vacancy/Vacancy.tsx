import React from 'react'
import Icon from '../Icon/Icon'

import style from './Vacancy.module.scss';
import { StoreType, VacancyType } from '../../types';
import { connect } from 'react-redux';
import vacancies from '../../Vacancies';

type VacancyPropsType = {
    id: number,
    vacancies: VacancyType[],
    selectedVacancy: number,
    setSelectedVacancy: (val: number) => void,
    company: string,
    position: string,
    city: string,
    flags: string[],
    date: string,
    like: (val: number) => void,
    url: string | undefined
}

function Vacancy(props: VacancyPropsType) {

    let isFavorite = props.vacancies.find(item => item.id == props.id)?.liked;

    return (
        <div className={style.vacancy + ' ' + ((props.selectedVacancy === props.id) ? style.selected : '')}
            onClick={(e) => {
                // Check if the clicked element or its ancestors have the class 'style.vacancy__favorite'
                const closestFavorite = (e.target as HTMLElement).closest(`.${style.vacancy__favorite}`);

                if (!closestFavorite) {
                    // If not, proceed with your logic
                    props.setSelectedVacancy(props.id);
                }
            }}

        >

            <div className={style.vacancy__inner}>
                <div className={style.vacancy__img}>

                    {props.url !== '' ? <img src={require('../../img/' + props.url + '.png')} alt={props.company} /> : <div className={style.placeholder}></div>}

                </div>

                <div className={style.vacancy__info}>
                    <div className={style.vacancy__company}>
                        {props.company}
                    </div>

                    <div className={style.vacancy__position}>
                        {props.position}
                    </div>

                    <div className={style.vacancy__city}>
                        {props.city}
                    </div>

                    <div className={style.vacancy__flags}>
                        {
                            props.flags.map((item) => {
                                return (
                                    <div className={style.vacancy__flag}>
                                        {item}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={style.vacancy__meta}>
                    <div className={style.vacancy__favorite} onClick={(e) => {
                        props.like(props.id);
                    }}>
                        <Icon name='heart' color={isFavorite ? '#DD5E5E' : '#F7F8F9'} size={20} />
                    </div>

                    <div className={style.vacancy__date}>
                        {props.date}
                    </div>
                </div>
            </div>
        </div>
    )
}

//export default Vacancy

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
    setSelectedVacancy: (id : number) => dispatch({
        type: 'SELECT_VACANCY',
        id: id,
    }),
    like: (id: number) => dispatch({
        type: 'LIKE_VACANCY',
        id: id,
    })
  });

const mapStateToProps = (state: StoreType) => {
    return {
        vacancies: state.vacancies,
        selectedVacancy: state.selectedVacancy,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vacancy);