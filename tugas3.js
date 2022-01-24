//PROGRAM 1 : mencari siswa yang lulus
const statusLulusSiswa = (batasNilai, status) => { // inisialisai function dengan parameter batasNilai dan status
    /* parameter batasNilai : untuk menampung batas nilai siswa yang dianggap lulus
        parameter status : untuk menampung status nilai siswa yang akan dicari */
    return new Promise((resolve, reject) => { // mengembalikan nilai promise dengan parameter resolve dan reject
        setTimeout(() => { // method setTimeOut yang didalamnya terdapat arrow function dan parameter unruk delay diisi 1000
            var nilaiSiswa = [ // inisialisasi variabel nilaiSiswa yang berisi array data nama,nilai dan status siswa
                { nama: "Budi", nilai: 80, status: "" },
                { nama: "Ani", nilai: 40, status: "" },
                { nama: "Charlie", nilai: 40, status: "" },
                { nama: "Adi", nilai: 60, status: "" },
            ]

            var hasil = nilaiSiswa.map((data) => { // mengubah data status nilaiSiswa dengan method map 
                return data.nilai >= batasNilai ? {...data, status: "Lulus" } : {...data, status: "Tidak Lulus" }
                    /* mengembalikan data nilai mahasiswa yang sudah berisi status kelulusan dengan kondisi :
                    jika nilai siswa lebih dari parameter batasNilai , maka statusnya Lulus. Selain itu statusnya diisi 'Tidak Lulus'*/
            }).filter((data) => { // data nilai difilter dengan method filter yang didalamnya terdapat function dengan parameter data
                return data.status == status // akan mengembalikan nilai data siswa dengan status yang sama dari parameter status
            })
            if (hasil.length > 0) { // cek apakah jumlah variabel hasil lebih dari 0
                // kondisi jika benar 
                resolve(hasil) // parameter resolve yang akan menampilkan variabel hasil, jika kondisi tidak error
            } else { // jika kondisi salah 
                reject("Data tidak ditemukan") // parameter reject akan menampilkan object Erro dan program dianggap error
            }
        }, 1000)
    })
}
const batasNilai = 60 // inisialisai variabel batasNilai dengan 60
const statusDicari = "Lulus" // Inisialisasi variabel statusDicari dengan 'Lulus'
statusLulusSiswa(batasNilai, statusDicari).then((result) => {
    /* memanggil function yang mengembalikan promise dengan parameter diisi dengan variabel batasNilai dan statusDicari.
    Lalu untuk meampilkan resolve pada promise, maka memakai then yang didalamnya terdapat function dengan parameter result*/
    console.log("PROGRAM 1")
    result.map((data) => {
        /* parameter result akan menampilkan data yang terdapat di resolve dengan method map yang didalamnya terdapat  function 
            dengan parameter data */
        console.log(data.nama) // output: 'Budai', 'Adi'
            /*kOutputnya Budi dan Adi, karena batas nilai untuk lulus adalah 60 dan nilai Budi dan Adi diatas atau sama dengan 60.
            Sedangkan Ani dan Charlie nilainya dibawah 60, jadi nama mereka tidak termasuk */
    })
}).catch((err) => { // akan ditampilkan reject pada promise,jika program error
    console.log(err) // output : 'Data tidak ditemukan'
})

// PROGRAM 2 program pembayaran belanja
const uangBelanja = 100000 // inisialisai variabel uangBelanja yang diisi 100.000
let totalBelanja = 0 // inisialisasi variabel totalBelanja yang diisi 0
const hitungTotalBelanja = (total, dataBelanja) => { // inisialisasi function dengan parameter total dan dataBelanja
    /* parameter total : untuk menampung hasil total belanja 
       parameter dataBelanja : untuk menampung data belanja dalam bentuk array objek */
    return new Promise((resolve, reject) => { // mengembalikan nilai dalam bentuk promise dengan parameter resolve dan reject
        setTimeout(() => { // method setTimeOut yang didalamnya terdapat arrow function dan parameter unruk delay diisi 1000
            console.log(`Belanja ${dataBelanja.barang} jumlah:${dataBelanja.jumlah} harga:${dataBelanja.harga} total ${dataBelanja.jumlah * dataBelanja.harga}`)
                // output : "Belanja : Daging jumlah:2 harga: 25000 total: 50000 " 
            let totalBelanja = total + (dataBelanja.jumlah * dataBelanja.harga)
                /* inisialisasi variabel totalBelanja yang diisi dengan total belanja.
                 Total belanja didapat dengan mengkali jumlah yang didapat dari atribut jumlah pada object dan harga yang didapat dari atibut harga pada object ditambah
                 total belanja sebelumnya */
            console.log(`Total : ${totalBelanja}`)
                // output "Total : 50000 " 
            if (totalBelanja <= uangBelanja) { // cek apakah total belanja sekarang lebih kecil dari atau sama dengan variabel uangBelanja
                resolve(totalBelanja) // jika kondisi terpenuhi, maka isi resolve dengan variabel total. 
            } else { // jika kondisi tidak terpebuhi
                reject("Uang anda tidak mencukupi untuk membayar") // isi reject dengan "Uang anda tidak mencukupi untuk membayar"
            }
        }, 1000)
    })
}

var daftarBelanja = [ //inisialisai variabel daftarBelanja dengan array dari objek
    { barang: "Daging", jumlah: 2, harga: 25000 },
    { barang: "Minyak", jumlah: 3, harga: 10000 },
    { barang: "Mie Instan", jumlah: 4, harga: 5000 },
    { barang: "Kecap", jumlah: 5, harga: 4000 },
]

var result = (totalBelanja, daftarBelanja, i = 0) => { // inisialisai function dengan parameter totalBelanja, daftarBelanja dan i yang diinisialisai dengan 0
    hitungTotalBelanja(totalBelanja, daftarBelanja[i]).then((total) => {
        /* memanggil fungsi hitungTotalBelanja dengan paramter yang diisi parameter totalBelanja, daftarBelanja ke-i.
        Karena mengembailikan promise, untuk mengeluarkan hasil yang terpenuhi menggunakan then yang didalamnya terdapat arrow finction dengan parameter total */
        if (total <= uangBelanja) { // cek apakah paramter total lebih kecil atau sama dengan variabel uanBelanja
            result(total, daftarBelanja, i + 1) // fungsi result dipanggil dan parameter diisi dengan parameter total. daftarBelanja dan i yang ditambah 1.
        }
        // fungsi tersebut akan terus mengulang sampai kondisi tidak terpenuhi
    }).catch((err) => { // jika kondisi tidak terpenuhi
        console.log(err) // output : "Uang anda tidak mencukupi untuk membayar"
    })
}
result(totalBelanja, daftarBelanja)