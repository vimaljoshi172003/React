import React from 'react'
import "./Card.css"
const Card = ({img ,name,age}) => {
    return (
        <>
            <div className="mainCard">
                <img src={img} alt="" />
                <div className="Namedetails">
                    <h2>Name:</h2>
                    <h2>{name}</h2>
                </div>
                <div className="Agedetails">
                    <h2>Age:</h2>
                    <h2> {age}</h2>
                </div>
                
            </div>
        </>
    )
}

export default Card