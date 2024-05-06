import React from "react";

type ButtonProps = {
    title: string,
    callback: () => void;
    disabled?: boolean,
}

class Button extends React.Component<ButtonProps, {}> {
    constructor(props : ButtonProps) {
        super(props);
    }

    render(): React.ReactNode {
        const title = this.props.title;
        const callback = this.props.callback;
        const disabled = this.props.disabled || false;

        return (
            <button className="button" onClick={callback} disabled={disabled}> 
                {this.props.title}
            </button>
        );
    }
}

export default Button;