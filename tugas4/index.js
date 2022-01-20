const fetch = require("cross-fetch")
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then(res => {
    res.json().then((fin) => {
        fin.map((data) => {
            console.log(data.name)
        })
    })
})