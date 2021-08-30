import React from 'react';

const Info = () => {

    const [dataFromFetch, setDataFromFetch] = React.useState(null);

    React.useEffect(() => {
        fetch('https://btn-shu-api.herokuapp.com/')
        .then(res => res.json())
        .then(data => {
            setDataFromFetch(data)
        })
        .catch(err => console.log(err))
    }, [dataFromFetch])

    return (
        <div>
            {dataFromFetch ? <p>{dataFromFetch.description}</p> :<h1>Poczekaj...</h1>}    
        </div>
    );
}

export default Info;
