import React from 'react';

const Button = () => {

    document.addEventListener('mousemove', e => {
        // console.log(e.screenX, e.screenY);
        showButton(e)
    })

    const showButton = e => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const btn = document.getElementById('btn');
        console.log(mouseX, mouseY, btn.getBoundingClientRect());
    }

    return (
        <button className='btn' id='btn'>Kliknij mnie!</button>
    );
}

export default Button;
