import React from 'react';

const Todolist = (props) => {
    const { tsk, deleteToDo, id } = props;
    return (
            // Remember here why we are able to delete the correct item when we click on the deleted button because as we know when we are redering this
            //component the react is asking us the unique id for that component each time in the map so here comes the trick this is where we are associating
            //a unique index to each item and we are passing that index as well when we are calling the deleteToDo(id) method thats where we are doing the filtering
            //of the data and updating it eventually in the font end using the setTaskArray() function
        <div style={{ display: "flex", justifyContent: "center",margin:"0.6rem" }}>
            <span  onClick={() => { deleteToDo(id) }} style={{
                cursor: "pointer", padding: "2px 0px",
                backgroundColor: "red",width:"23px",borderRadius:"50%",marginRight:"20px"
            }} >X &nbsp;</span><li >{tsk} </li>
        </div>
    )
}

export default Todolist




