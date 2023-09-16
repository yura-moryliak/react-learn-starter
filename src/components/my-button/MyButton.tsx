import { useState } from 'react';

import './MyButton.css';

// @ts-ignore
export default function MyButton({ count, onClick }) {

    return (
        <div className="my-button-wrapper">
            <button onClick={onClick}>I'm a button, Click me { count }</button>
        </div>
    );
}