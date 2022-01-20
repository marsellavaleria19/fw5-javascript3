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

getmonth((error, month) => {
    if (error == null) {
        month.map((data) => {
            console.log(data)
        })
    } else {
        console.log(error.message)
    }
})