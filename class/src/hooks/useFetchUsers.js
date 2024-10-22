import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchUsers";

export function useFetchUsers(num, paramsArray) {
    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState("");

    useEffect(() => {
        setisLoading(true);
        fetchUsers(num, paramsArray)
            .then((data) => setUsers(data.results))
            .catch((err) => seterror(err.message))
            .finally(() => setisLoading(false));
    }, [num, paramsArray]);

    return [users, isLoading, error];
}
