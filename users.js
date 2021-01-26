let users = [];

const addUser = ({ id, name, room }) => {
  const formattedName = name.trim().toLowerCase();
  const formattedRoom = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === formattedRoom && user.name === formattedName
  );

  if (existingUser) {
    return { error: "Username is taken" };
  }

  const newUser = { id, name: formattedName, room: formattedRoom };

  users.push(newUser);
  return { user: newUser };
};

const removeUser = (id) => {
  let removedUser;

  users = users.filter((user) => {
    if (user.id === id) {
      removedUser = user;
      return false;
    }
    return true;
  });

  if (removedUser) {
    return removedUser;
  }

  return {};
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => {
    return user.room === room;
  });
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
