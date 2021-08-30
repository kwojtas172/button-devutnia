import React from 'react';

const InfoData = ({data}) => {
    return (
        <div className='data'>
            <h1 className='data__title'>Mam na imię {data.name}</h1>
            <p className='data__description'>{data.description}.</p>
            <p className='data__description'>Mój stack programistyczny to:</p>
            <ul className='list'>
                {data.skills.map((skill, idx)=><li key={idx} className='list__element'>{skill}</li>)}
            </ul>
            <p className='data__description'>Jeśli chcesz dowiedzieć się więcej, <a href={`mailto: ${data.email}`} className='list__link'>napisz.</a></p>
            <p className='data__description'>Możesz zobaczyć mój porfil na <a href={data.linkedin} className='list__link' target='_blank' rel='noreferrer'>linkedin</a>.</p>
            <p className='data__description data__description--small '>PS Repozytorium dostępne <a href={data.repo} className='list__link' target='_blank' rel='noreferrer'>tutaj</a></p>
        </div>
    );
}

export default InfoData;
