import { useState } from 'react';

import './MyButton.css';

export default function MyButton() {

    const [ count, setCount ] = useState(0);

    function handleClick(): void {
        setCount(count + 1);
    }

    return (
        <div
            className="my-button-wrapper"
            onClick={handleClick}>
            <button>I'm a button, Click me { count }</button>
        </div>
    );
}