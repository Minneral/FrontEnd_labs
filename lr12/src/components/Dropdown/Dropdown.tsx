import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import { v4 as uuidv4 } from 'uuid';

import style from './Dropdown.module.scss';

type DropdownProps = {
    icon: string,
    optionsList: string[],
    selectedOption: string,
    setSelectedOption: (input: string) => void
}

function Dropdown({ icon, optionsList, selectedOption, setSelectedOption }: DropdownProps) {

    const [isActive, setIsActive] = useState(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        setIsActive(prev => !prev);
    }

    const handleOpenOverlay = (e: React.MouseEvent) => {
        setIsActive(prev => !prev);
    }

    return (
        <div className={style.dropdown}>
            <div className={style.dropdown__inner}>
                <div className={style.dropdown__info} onClick={handleOpenOverlay}>
                    <Icon name={icon} color='#0070FB' size={20} />
                    <div className={style.dropdown__selected}>{selectedOption}</div>
                </div>

                <div className={style.dropdown__menu + ' ' + (isActive ? style.active : '')}>
                    {optionsList.map((item: string, i: number) => {
                        const itemId = uuidv4();
                        return (
                            <div className={style.dropdown__menu_item}>
                                <input type="radio" id={itemId} name={icon} value={item} checked={item === selectedOption} onChange={handleRadioChange} />
                                <label htmlFor={itemId}>{item}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
