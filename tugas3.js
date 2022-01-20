//PROGRAM 1
const statusLulusSiswa = (batasNilai, status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var nilaiSiswa = [
                { nama: "Budi", nilai: 80, status: "" },
                { nama: "Ani", nilai: 40, status: "" },
                { nama: "Charlie", nilai: 40, status: "" },
                { nama: "Adi", nilai: 60, status: "" },
            ]

            var hasil = nilaiSiswa.map((data) => {
                return data.nilai >= batasNilai ? {...data, status: "Lulus" } : {...data, status: "Tidak Lulus" }
            }).filter((data) => {
                return data.status == status
            })
            if (hasil.length >= 0) {
                resolve(hasil)
            } else {
                reject("Tidak ada yang perbaikan")
            }
        }, 1000)
    })
}
const batasNilai = 60
const statusDicari = "Lulus"
statusLulusSiswa(batasNilai, statusDicari).then((result) => {
    console.log("PROGRAM 1")
    result.map((data) => {
        console.log(data.nama)
    })
}).catch((err) => {
    console.log(err)
})

// PROGRAM 2
const uangBelanja = 100000
let totalBelanja = 0
const hitungTotalBelanja = (total, dataBelanja) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Belanja ${dataBelanja.barang} jumlah:${dataBelanja.jumlah} harga:${dataBelanja.harga} total ${dataBelanja.jumlah * dataBelanja.harga}`)
            let totalBelanja = total + (dataBelanja.jumlah * dataBelanja.harga)
            console.log(`Total : ${totalBelanja}`)
            if (totalBelanja <= uangBelanja) {
                resolve(totalBelanja)
            } else {
                reject("Uang anda tidak mencukupi untuk membayar")
            }
        }, 1000)
    })
}

var daftarBelanja = [
    { barang: "Daging", jumlah: 2, harga: 25000 },
    { barang: "Minyak", jumlah: 3, harga: 10000 },
    { barang: "Mie Instan", jumlah: 4, harga: 5000 },
    { barang: "Kecap", jumlah: 5, harga: 4000 },
]

var result = (totalBelanja, daftarBelanja, i = 0) => {
    hitungTotalBelanja(totalBelanja, daftarBelanja[i]).then((total) => {
        if (total <= uangBelanja) {
            result(total, daftarBelanja, i + 1)
        }
    }).catch((err) => {
        console.log(err)
    })
}
result(totalBelanja, daftarBelanja)