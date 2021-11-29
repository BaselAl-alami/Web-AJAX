
const xhr = new XMLHttpRequest();

xhr.readyState;

console.log(xhr.readyState);

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.response)[0];
        console.log(data);
        document.write(JSON.stringify(data));
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.send();