import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => { console.log(error) }
);

export const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS "
      + "Users "
      + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
    )
  })
}

export const addUser = (name, age) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Users (Name, Age) VALUES (?,?)",
        [name, age],
        (_, { insertId }) => {
          resolve(insertId)
        },
        (_, error) => {
          reject(error)
        }
      )
    })
  })
}

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Users",
        [],
        (_, { rows }) => {
          resolve(rows._array)
        },
        (_, error) => {
          reject(error)
        }
      )
    })
  })
}
