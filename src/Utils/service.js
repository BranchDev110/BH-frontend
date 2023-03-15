export const fetchAllData = async() => {
    const data = await fetch('http://localhost:8000/orders');
    const jsonData = await data.json();
    alert(jsonData);
    return jsonData;
}

export const fetchPageData = async(pageIndex) => {
    const data = await fetch(`http://localhost:8000/orders?page=${pageIndex}`);
    const jsonData = await data.json();
    return jsonData;
}

export const addData = async(newData) => {
    const data = await fetch(`http://localhost:8000/orders`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newData)
    });
    const jsonData = await data.json();
    return jsonData;
}