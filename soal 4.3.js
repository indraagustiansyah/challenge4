const id = document.getElementById('aku')
console.log(id.innerHTML) //menampilkan diconsole data awal berdasarkan id
id.append("-Hallo World") //menampilkan dibrowser dan menambahkan Hollo WOrld
console.log(id.innerHTML) //menampilkan diconsole setelah data terbaru

const xClass = document.getElementsByClassName('aku')
console.log(xClass[0].innerHTML) //menampilkan diconsole data awal berdasarkan class
xClass[0].className = "gantiWarna" //memasukan class baru dielement

const xTag = document.getElementsByTagName('p')
console.log(xTag[0].innerHTML)
xTag[0].className += "gantiWarna"