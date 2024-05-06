import React from "react";
import Button from "./Button";

class Counter extends React.Component<{}, { count : number}> {

    private heading : HTMLHeadingElement | null = null;

    constructor(props : {}) {
        super(props);
        this.state = {count: 0};
    }

    increase() {
        this.setState({count: this.state.count + 1}, () => {
            if(this.state.count === 5 && this.heading)
            this.heading.classList.add("red");
        });   
    }

    reset() {
        this.setState({count: 0});
        if(this.heading)
            if(this.heading.classList.contains("red"))
                this.heading.classList.remove("red");
    }

    render(): React.ReactNode {
        return (
            <div className="counter">
                <h1 ref={(item) => this.heading = item}>{this.state.count}</h1>
                <br />
                <Button title={'inc'} callback={() => this.increase()} disabled={this.state.count === 5 ? true : undefined}/>
                <Button title={'reset'} callback={() => this.reset()}/>
            </div>
        );
    }
}

export default Counter;