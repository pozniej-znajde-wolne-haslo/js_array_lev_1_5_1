const songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];

console.log(songs);

/* const totalSongs = songs.push("The Racing Rats", "Henry Lee", "Let Down");
console.log(totalSongs);
console.log(songs); */

const totalSongs = songs.push("The Racing Rats", "Henry Lee", "Let Down");
console.log(songs);

console.log(totalSongs);

// u cann add more than 1 value at once
// === it doesn't update totalSongs automathically!!===
/* songs.push("Henry Lee", "Let Down");
console.log(songs);
console.log(totalSongs); */

// u cannot use the new variable as a function???
/* totalSongs.push("Henry Lee"); */


/* Die push()-Methode fügt neue Elemente am Ende eines Arrays hinzu.
Definiere ein Array songs, das folgendes enthält:

Bohemian Rhapsody, Stairway to Heaven, Hotel California

Füge diesem Array deine 3 Lieblingslieder mit dem Befehl songs.push("Sweet Child O'Mine"); hinzu.
Speichere das Array als Variable totalSongs.
Gebe totalSongs in der Konsole aus.
 */


// =========== TEIL 2 ============

const besteFussballerAllerZeiten = ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona", "Pele", "Johan Cryuff"];
console.log(besteFussballerAllerZeiten);

besteFussballerAllerZeiten.push("Gianluigi Buffon (goalkeeper)", "Lev Yashin (goalkeeper)", "Peter Schmeichel (goalkeeper)");
console.log(besteFussballerAllerZeiten);

// ========== TEIL 3 ============

const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists);
