import React from 'react';
// Write your Character component here


export default function Character(props){
    //console.log("it runs");
    const { name } = props;

    return (
        <div className="card">
            <div className="card-top">
                <h2>{name}</h2>
                <h3>props.Types</h3>
            </div>
            <div className="picture">

            </div>
            <div className="skills">
                <div className="skill-1">props.First Skill</div>
                <div className="skill-2">props.Second Skill</div>
            </div>
        </div>
    );
}