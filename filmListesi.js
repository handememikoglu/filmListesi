const films = [];
const num = Number(prompt("Listeye kaç adet film eklemek istersiniz?"));
for (let i = 0; i < num; i++) {
    let filmName = prompt(`Lütfen ${i+1}. film adını giriniz.`).toLocaleLowerCase("tr");
    films.push(filmName);
}
console.log(films);

films.sort();

console.log(films);
