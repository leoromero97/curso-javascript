const usersApi2 = {
  getUsers: function () {
    return console.log("Trayendo todos los usuarios...");
  },
  getUserById: function (id) {
    return console.log(`La información del usuario con id ${id} es {}`);
  },
  deleteUserById: function (id) {
    return console.log(`Eliminando información del usuario con id: ${id}`);
  },
};

usersApi2.getUsers()
usersApi2.getUserById(5)
usersApi2.deleteUserById(32)