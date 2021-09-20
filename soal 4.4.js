const nilaiRaport = (bahasa,matematika) => {
    return hasil = (bahasa>=8 && matematika>=8) ? "Lulus Dengan Baik" : "Belajar Lagi Terdapat Nilai yang kurang"
}

const sukaMakanan = (makanan1, makanan2) => {
    return pesan = (makanan1==="bakso" || makanan2==="mie ayam") ? "mau" : "tidak jadi pesan"
}

console.log(nilaiRaport(8.5,9))
console.log(sukaMakanan("bakso", "gado - gado"))