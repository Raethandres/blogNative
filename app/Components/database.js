import Expo, { SQLite } from 'expo';
const db = SQLite.openDatabase('db.db');

const database={
    row:[],
    st:()=>{},
    constructor(st){
        this.st=st
        db.transaction(tx => {
            tx.executeSql(
              'create table if not exists list (id integer primary key not null, name text, idv text);'
            );
            tx.executeSql(
              'create table if not exists data (id integer primary key not null, name int, idv text);'
            );
         });
    },

    select(data){
        db.transaction(tx => {
            tx.executeSql(
              'select * from data where id = ?;',
              [data],
              (_, { rows })=> this.st(rows._array)
            );
          });
      },
    
    selectAll(){
        db.transaction(tx => {
            tx.executeSql('select * from data', [], (_, { rows }) =>
            this.st(rows._array)
            );
          });
    },

    returnS(data){
        console.log(JSON.stringify(data),"r")
        this.row=data._array
      },

    insert(data){
        db.transaction(tx => {
            tx.executeSql('insert into data (idv, name) values (?,?)', [data.id,data.name]);
            
          },err=>
        console.log(err)
    );
    },

    getRow(){
      return this.row
    }




}
export default database;