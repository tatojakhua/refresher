import React from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { HashLoader } from "react-spinners";
import Card from "./Card";

const CardsWrapper = () => {
    const [data, isLoading, error] = useFetchUsers();

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        );
    }

    return (
        <div>
            {isLoading && <HashLoader color="#7d3c98" />}
            {data.map((user) => (
                <Card
                    key={user.phone}
                    props={user}
                />
            ))}
        </div>
    );
};

export default CardsWrapper;
