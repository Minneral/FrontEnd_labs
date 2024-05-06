import React from 'react'

import style from './Input.module.scss';
import Icon from '../Icon/Icon';

type InputPropsType = {
    icon: string,
    value: string,
    setValue: (val: string) => void,
    pattern: string,
    after: string
}

function Input({ icon, value, setValue, after, pattern }: InputPropsType) {
    return (
        <div className={style.input}>
            <div className={style.input__inner}>
                <Icon name={icon} color='#0070FB' size={20} />
                <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />

                {after ? <div className={style.after}>{after}</div> : null}
            </div>
        </div>
    )
}

export default Input