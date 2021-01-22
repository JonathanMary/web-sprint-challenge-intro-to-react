import React from 'react';
// Write your Character component here


export default function Character(props){
    const { name, species, image, gender, origin } = props;

    return (
        <div className="card">
            <div className="card-top">
                <h2>{name}</h2>
                <h3>{species}</h3>
            </div>
            <div className="picture">
                <img src={image} alt={name}></img>
            </div>
            <div className="skills">
                <div className="sup-1">{gender}</div>
                <div className="sup-2">{origin}</div>
            </div>
        </div>
    );
}