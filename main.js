// 1. Perbedaan (==) dan (===)
// == akan membenarkan semua operand baik itu tipe datanya dan nilainya
// === hanya akan memberikan nilai benar jika tipe datanya sama


// 2
let ganjilGenap = 11
ganjilGenap % 2 == 0 ? console.log("Genap") : console.log("Ganjil")


//3
let dataFilm = [
    {
        id: 1,
        title: 'Tragedi Atap Jebol',
        genre: ["Action", "Romance", "Comedy", "Horor"],
        actor: ["Indra", "Ipul", "David", "Moezha", "Arul"],
        rating: 9.05,
        synopsis: 'Lorem ipsum dolor sit amet, consecturur adipiscing elit',
        type: 'Movie', // Movie || TV
        producer: ["PIT Movic", "Indra Music Live"],
        studio: 'PesantrenIT',
        status: true // true => sudah rilis || false => belum rilis
    }
]
dataFilm.unshift({
    id: 21,
    title: 'Hilangnya uang Arul',
    genre: ["Slice of life", "School", "Comedy"],
    actor: ["Arul", "Arul yang kedua", "Arul Aslinya 3", "Faiz"],
    rating: 8.0,
    synopsis: 'Di pagi yang cerah Arul mendapati jadwal piket makan, tapi uangnya hilang di jalan. Bagaimana cara Arul menemukan uangnya dengan jutsu?',
    type: 'Movie',
    producer: ["PIT Movie Production", "Muezzaproject"],
    studio: 'Muezzaproject',
    status: true
})
delete (dataFilm[0].genre)
dataFilm[0].status = true ? false : true
console.log(dataFilm)
console.log(dataFilm[1].actor[3])