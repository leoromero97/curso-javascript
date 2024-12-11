// Arrow functions en métodos, set y get dentro de objetos.
const reproductorDeMusicaFunctions09 = {
  songName: "",
  reproducir: (id) => console.log(`Reproduciendo canción con id ${id}`),
  pausar: () => console.log("Pausando canción..."),
  borrar: (id) => console.log(`Borrando canción con id ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando la playlist ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la playlist ${nombre}`),
  set newSong(songName) {
    this.cancion = songName;
    console.log(`Agregando canción: ${songName}...`);
  },
  get obtainSong() {
    console.log(`Obteniendo canción agregada: ${this.cancion}`);
  },
};

reproductorDeMusicaFunctions09.reproducir("01");
reproductorDeMusicaFunctions09.pausar();
reproductorDeMusicaFunctions09.borrar("02");
reproductorDeMusicaFunctions09.crearPlaylist("El fercho de medallo");
reproductorDeMusicaFunctions09.reproducirPlaylist("Mor no le temas a la oscuridad");

reproductorDeMusicaFunctions09.newSong = "PPP"
reproductorDeMusicaFunctions09.obtainSong;
