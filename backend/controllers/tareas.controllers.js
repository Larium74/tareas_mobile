import connectiondb from "../database/connection.js";

export let showTareas = (req, res)=> {
    connectiondb.query ("SELECT * FROM tareas")
    .then ((data)=> {
        console.log ("Tareas showed successly ", data[0])
        res.status (200).json (data[0])
    
    })
    .catch ((error)=> {console.log ("Error to show the Tareas ", error)})
}

export let showOnlyTarea = (req, res)=> {
    const {id} = req.params
    connectiondb.query ("SELECT * FROM tareas WHERE ID_Tarea = ?", [id])
    .then ((data)=> {console.log ("Tarea showd successly ", data[0])})
    .catch ((error)=> {console.log ("Error to show the Tarea ", error)})
}

export let deleteTarea = (req, res) => {
    const {id} = req.params
    connectiondb.query ("DELETE FROM tareas where ID_Tarea = ?", [id])
    .then ((result)=> {
        console.log ("Tarea deleted successly")
        connectiondb.query ("SELECT * FROM tareas")
        .then ((data)=> {res.status (200).json (data[0])})
        .catch ((error)=> {console.log ("No se pudo mostrar ", error)})
    
    })
    .catch ((error)=> {console.log ("Error to delete the Tarea ", error)})
}


export const enviarDatos = (req, res) => {
    const { titulo, descripcion, fecha_fin } = req.body;
    
    connectiondb.query("INSERT INTO tareas (Titulo, Descripcion, Fecha_fin) VALUES (?, ?, ?)", [titulo, descripcion, fecha_fin])
        .then((result) => {
            connectiondb.query ("SELECT * FROM tareas")
            .then ((data)=> {res.status (200).json (data[0])})
            .catch ((error)=> {console.log ("No se han mostrado los datos", error)})
        })
        .catch((error) => {
            console.log("Hubo un error al crear la tarea", error);
            res.status(500).json({ error: "Hubo un error al crear la tarea" });
        });
};


export const updateTarea = (req, res)=> {
    console.log ("Se desea actualizar una tarea")
    const {id} = req.params
    const {titulo, descripcion, fecha_fin} =req.body
    connectiondb.query ("UPDATE tareas SET Titulo = IFNULL (?, Titulo), Descripcion = IFNULL (?, Descripcion), Fecha_fin = IFNULL (?, Fecha_fin) WHERE ID_Tarea = ? ", [titulo, descripcion, fecha_fin, id])
    .then ((data)=> {
        console.log ("Se ha actualizado la tarea", data[0])
        connectiondb.query ("SELECT * FROM tareas")
        .then ((data)=> {res.status (200).json (data[0])})
        .catch ((error)=> console.log ("Error al mostrar los registros ", error))
        
    })
    .catch ((error)=> {console.log ("No se pudo actualizar la tarea ", error)})
}