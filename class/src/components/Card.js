import React from "react";

const Card = ({ props }) => {
    console.log(props);

    return (
        <div>
            <img
                alt="user-img"
                src={props.picture.large}
            />
            <div>
                <h3>
                    {props.name.title} {props.name.first} {props.name.last}
                </h3>
                <h5>{`Phone: ${props.phone}`}</h5>
                <span>{`Gender: ${props.gender}`}</span>
            </div>
        </div>
    );
};

export default Card;
