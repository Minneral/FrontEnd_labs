import React, { useEffect, useState } from "react";
import Button from "./Button";

function Counter() {
    let heading: HTMLHeadingElement | null = null;
    const [count, setCount] = useState<number>(0);

    function increase() {
        setCount(count + 1);
    }

    useEffect(() => {
        if (count === 5 && heading)
        heading.classList.add("red");
    });

    function reset() {
        setCount(0);
        if (heading)
            if (heading.classList.contains("red"))
                heading.classList.remove("red");
    }

    return (
        <div className="counter">
            <h1 ref={(item) => heading = item}>{count}</h1>
            <br />
            <Button title={'inc'} callback={() => increase()} disabled={count === 5 ? true : undefined} />
            <Button title={'reset'} callback={() => reset()} />
        </div>
    );
}
export default Counter;