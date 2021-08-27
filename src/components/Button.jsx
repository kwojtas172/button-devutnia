import React from 'react';

const Button = () => {

    const [btnNameX, setBtnNameX] = React.useState(true);
    const [btnNameY, setBtnNameY] = React.useState(true);

    function showButton(e) {
            const mouseX = e.clientX;    
            const mouseY = e.clientY;
            const btn = document.getElementById('btn');
            const btnPosition = btn.getBoundingClientRect();

            handleBtnNameX(mouseX, btnPosition);
            handleBtnNameY(mouseY, btnPosition);

        }

    
    
    React.useEffect(() => {
        document.addEventListener('mousemove', showButton);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    

    

    const handleBtnNameX = (mouseX, btnPosition) => {
        if(mouseX < btnPosition.left) {
            setBtnNameX('w prawo')
        } else if(mouseX > btnPosition.right) {
            setBtnNameX('w lewo')
        } else {
            setBtnNameX('');
        }
    }

    const handleBtnNameY = (mouseY, btnPosition) => {
        if(mouseY < btnPosition.top) {
            setBtnNameY('w dół')
        } else if(mouseY > btnPosition.bottom) {
            setBtnNameY('w górę')
        } else setBtnNameY('')
    }

    return (
        <button className='btn' id='btn'>{(btnNameX || btnNameY) ? `Przesuń myszką ${(btnNameX === true || btnNameY) === true ? `` : `${btnNameX} ${btnNameY}`}` : 'Kliknij mnie!'}</button>
    );
}

export default Button;
