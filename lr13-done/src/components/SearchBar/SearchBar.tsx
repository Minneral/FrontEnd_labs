import React, { ReactNode, useState } from 'react'
import optionsList from './OptionsList';
import Icon from '../Icon/Icon';

import style from "./SearchBar.module.scss";
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';

export default function SearchBar( {setFilter} : {setFilter : ({} : any) => void}) {

    const [cityOption, setCityOption] = useState('Москва');
    const [timeOption, setTimeOption] = useState(optionsList["time"][1]);
    const [typeOption, setTypeOption] = useState('Частичная занятость');
    const [expOption, setExpOption] = useState('От 1 года до 3 лет');
    const [salaryOption, setSalaryOption] = useState('150000');


    const handleSubmit = (e : React.MouseEvent) => {
        setFilter({
            city: cityOption,
            time: timeOption,
            type: typeOption,
            exp: expOption,
            salary: salaryOption 
        })
    }

    return (
        <div className={style.searchbar}>
            <div className="container">

                <div className={style.searchbar__inner}>

                    <div className={style.searchbar__item}>
                        <Input pattern='^[А-Яа-яЁё\s]+$' icon='arrow' value={cityOption} setValue={setCityOption} after='' />
                    </div>

                    <div className={style.searchbar__item}>
                        <Dropdown icon='time' optionsList={optionsList["time"]} selectedOption={timeOption} setSelectedOption={setTimeOption} />
                    </div>

                    <div className={style.searchbar__item}>
                        <Dropdown icon='bag' optionsList={optionsList["type"]} selectedOption={typeOption} setSelectedOption={setTypeOption} />
                    </div>

                    <div className={style.searchbar__item}>
                        <Dropdown icon='star' optionsList={optionsList["exp"]} selectedOption={expOption} setSelectedOption={setExpOption} />
                    </div>

                    <div className={style.searchbar__item}>
                        <Input pattern='^\d{3} \d{3} \d{3}$' icon='tag' value={salaryOption} setValue={setSalaryOption} after='руб.' />

                    </div>


                    <div className={style.searchbar__item + ' ' + style.searchbar__btn}>

                        <input type="button" value='Найти' onClick={handleSubmit}/>
                    </div>

                </div>

            </div>
        </div>
    )
}
