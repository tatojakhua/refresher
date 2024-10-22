export async function fetchUsers(num, paramsArray) {
    let stringParams = paramsArray.toString();
    console.log(stringParams);

    const url = `https://randomuser.me/api/?results=${num}&inc=${stringParams}`;
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    throw new Error("Oops, Something unexpected happened");
}
