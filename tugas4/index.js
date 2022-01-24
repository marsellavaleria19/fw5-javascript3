const fetch = require("cross-fetch") //inisialisasi variabel fetch dengan package cross-fetch
const url = "https://jsonplaceholder.typicode.com/users" // inisialisasi variabel url dengan link api

fetch(url).then(res => {
    /*
       variabel fetch yang berupa function dipanggil dan parameter diisi dengan variabel url.
       karena mengembalikan promise, maka untuk menampilkan datanya harus memakai then yang didalamnya
       terdapat arrow function dengan parameter result. */
    res.json().then((fin) => {
        /* parameter result ini harus dijadikan ke json untuk menjadi sebuah data. 
          karena mengembalikan promise, maka untuk menampilkan datanya harus memakai then yang didalamnya
    terdapat arrow function dengan parameter fin.*/
        fin.map((data) => { // untuk menampilkan data, maka paramter fin memakai method map yang didalamnya function dengan paramter data
            console.log(data.name) // output : nama-nama yang ada di data api
        })
    }).catch(err => { // jika terjadi error 
        console.log("alamat url salah") // output : 'alamat url salah' 
    })
}).catch(err => { // jika terjadi error
    console.log("alamat url tidak ada") // output : 'alamat url tidak ada'
})