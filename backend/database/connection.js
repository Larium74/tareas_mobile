import {createPool} from "mysql2/promise"
import {objectConnection} from "./objectConnection.js"


const connectiondb =createPool (objectConnection)

connectiondb.getConnection ()
.then (()=> {console.log ("Server connect to the databasse")})
.catch ((error)=> {console.log ("Error to connect with the database", error)})

export default connectiondb;