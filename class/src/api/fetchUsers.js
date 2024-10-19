export async function fetchUsers() {
    const url =
        "https://randomuser.me/api/?results=5&inc=name,gender,phone,picture";
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    throw new Error("Oops, Something unexpected happened");
}
