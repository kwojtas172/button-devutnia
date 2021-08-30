import React from 'react';
import InfoData from './InfoData';

const Info = () => {

    const [dataFromFetch, setDataFromFetch] = React.useState(null);

    React.useEffect(() => {
        fetch('https://btn-shu-api.herokuapp.com/')
        .then(res => res.json())
        .then(data => {
            setDataFromFetch(data)
        })
        .catch(err => console.log(err))
    }, [setDataFromFetch])

    return (
        <div>
            {dataFromFetch ? <InfoData data={dataFromFetch} /> :<h1>Poczekaj...</h1>}    
        </div>
    );
}

export default Info;
