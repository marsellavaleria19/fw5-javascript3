const getmonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July',
            'August', 'September', 'October', 'November', 'December'
        ];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

getmonth((error, month) => { // memanggil function getmonth yang didalamnya terdapat arroe function dengan parameter error dan month/
    if (error == null) { // cek apakah parameter error null atau tidak
        // kondisi jika null
        month.map((data) => { // menampilkan data dari parameter month dengan method map yang didalamnya terdapat function dengan parameter data
            console.log(data) // output : "Januari. Februari,March, April, May, Juni, Juli,Agust,September,October,November,December"
        })
    } else { // kondisi jika paramer errot tidak null
        console.log(error.message) // output: Sorry Data Not Found
    }
})