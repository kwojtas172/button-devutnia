import React from 'react';
import Button from './Button';
import Info from './Info'

const Main = () => {
    const [isShowButton, setIsShowButton] = React.useState(true);


    const handleShowButton = () => {
        setIsShowButton(false)
    }
    return (
        <main>
            {isShowButton ? <Button handleShowButton={handleShowButton} /> : <Info />}
        </main>
    );
}

export default Main;
