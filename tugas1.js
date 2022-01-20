const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja("senin").then((result) => { //blok yang akan dijalankan jika fungsi promise tidak error / resolve 
    console.log(result) // output : senin 
}).catch((err) => { // blok yang akan dijalankan jika fungsi promise error / reject
    console.log(err.message) // öutput : Hari ini bukan hari kerja
})

async function printHariKerja() { // mengubah function menjadi synchronus
    try { // handling error
        const result = await cekHariKerja("minggu") // menunda eksekusi hingga fungsi promise selesai
        console.log(result) // output : senin
    } catch (err) { // block yang akan dijalankan ketika ada error
        console.log(err.message) // // output : Hari ini bukan hari kerja
    }
}
printHariKerja()