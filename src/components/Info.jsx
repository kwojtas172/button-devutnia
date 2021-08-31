import React from 'react';
import InfoData from './InfoData';
import InfoLoader from './InfoLoader';

const Info = () => {

    const [dataFromFetch, setDataFromFetch] = React.useState(null);

    React.useEffect(() => {
        const fetchFromApi = () => {
            fetch('https://silicon-tartan-double.glitch.me/', {
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                }
            })
            .then(res => res.json())
            .then(data => {
                setDataFromFetch(data)
            })
            .catch(err => {
                console.log(err);
                fetchFromApi()
            })
            };
            
            fetchFromApi()
    }, [])

    return (
        <div>
            {dataFromFetch ? <InfoData data={dataFromFetch} /> : <InfoLoader />}    
        </div>
    );
}

export default Info;
