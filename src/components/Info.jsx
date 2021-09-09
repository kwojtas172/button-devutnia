import React from 'react';
import InfoData from './InfoData';
import InfoLoader from './InfoLoader';

const Info = () => {

    const [dataFromFetch, setDataFromFetch] = React.useState(null);

    const fetchFromApi = React.useCallback(() => {
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
        }, [setDataFromFetch]);
        

    React.useEffect(() => {
            
            fetchFromApi()
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setDataFromFetch])

    return (
        <div>
            {dataFromFetch ? <InfoData data={dataFromFetch} /> : <InfoLoader />}    
        </div>
    );
}

export default Info;
