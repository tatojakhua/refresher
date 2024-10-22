import React, { useState } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { HashLoader } from "react-spinners";
import Card from "./Card";

const CardsWrapper = () => {
    const [userSLength, setUsersLength] = useState(5);
    const [checkedParams, setcheckedParams] = useState([]);
    const [data, isLoading, error] = useFetchUsers(userSLength, checkedParams);

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        );
    }

    const handleIncrementButton = () => {
        setUsersLength((prev) => prev + 1);
    };

    const handleDecrementButton = () => {
        setUsersLength((prev) => prev - 1);
    };

    const handleSaveParamsFunc = (e) => {
        let { name, checked } = e.target;

        if (checked) {
            setcheckedParams((prev) => [...prev, name]);
        } else {
            setcheckedParams((prev) => prev.filter((param) => param !== name));
        }
    };

    return (
        <div>
            {isLoading && <HashLoader color="#7d3c98" />}
            <div>
                <button onClick={handleIncrementButton}>Increment</button>
                <button onClick={handleDecrementButton}>Decrement</button>
            </div>
            <div>
                <label>name</label>
                <input
                    type="checkbox"
                    name="name"
                    onClick={handleSaveParamsFunc}
                />
                <label>gender</label>
                <input
                    type="checkbox"
                    name="gender"
                    onClick={handleSaveParamsFunc}
                />
                <label>phone</label>
                <input
                    type="checkbox"
                    name="phone"
                    onClick={handleSaveParamsFunc}
                />
                <label>picture</label>
                <input
                    type="checkbox"
                    name="picture"
                    onClick={handleSaveParamsFunc}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {data.map((user) => (
                    <Card
                        key={user.phone}
                        props={user}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardsWrapper;
