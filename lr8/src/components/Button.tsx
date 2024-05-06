import React from "react";

type ButtonProps = {
    title: string,
    callback: () => void;
    disabled?: boolean,
}

function Button(props: ButtonProps) {
    const title = props.title;
    const callback = props.callback;
    const disabled = props.disabled || false;

    return (
        <button className="button" onClick={callback} disabled={disabled}>
            {title}
        </button >
    );
}

export default Button;