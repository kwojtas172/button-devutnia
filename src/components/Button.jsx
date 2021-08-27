import React from 'react';

const Button = ({handleShowButton}) => {

    const [isOff, setIsOff] = React.useState(false);
    const [btnNameX, setBtnNameX] = React.useState(true);
    const [btnNameY, setBtnNameY] = React.useState(true);

    const showButton = (e) => {
            const mouseX = e.clientX;    
            const mouseY = e.clientY;
            const btn = document.getElementById('btn');
            const btnPosition = btn? btn.getBoundingClientRect() : null;
            handleBtnNameX(mouseX, btnPosition);
            handleBtnNameY(mouseY, btnPosition);
        }

    React.useEffect(() => {
        if(!isOff) {
            document.addEventListener('mousemove', showButton);
        } else document.removeEventListener('mousemove', showButton)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleBtnNameX = (mouseX, btnPosition) => {
        if(btnPosition) {
            if(mouseX < btnPosition.left) {
                setBtnNameX('w prawo')
            } else if(mouseX > btnPosition.right) {
                setBtnNameX('w lewo')
            } else {
                setBtnNameX('');
            }
        }
    }

    const handleBtnNameY = (mouseY, btnPosition) => {
        if(btnPosition) {
            if(mouseY < btnPosition.top) {
                setBtnNameY('w dół')
            } else if(mouseY > btnPosition.bottom) {
                setBtnNameY('w górę')
            } else setBtnNameY('')
        }
       
    }

    const showMe = () => { 
        setIsOff(true)
        handleShowButton()
    }

    return (
        <button className='btn' id='btn' onClick={showMe}>{(btnNameX || btnNameY) ? `Przesuń myszką ${(btnNameX === true || btnNameY) === true ? `` : `${btnNameX} ${btnNameY}`}` : 'Kliknij mnie!'}</button>
    );
}

export default Button;
