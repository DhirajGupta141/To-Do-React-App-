import React from 'react';

const Todolist = (props) => {
    const { tsk, deleteToDo, id } = props;
    return (
        <div style={{ display: "flex", justifyContent: "center",margin:"0.6rem" }}>
            <span  onClick={() => { deleteToDo(id) }} style={{
                cursor: "pointer", padding: "2px 0px",
                backgroundColor: "red",width:"23px",borderRadius:"50%",marginRight:"20px"
            }} >X &nbsp;</span><li >{tsk} </li>
        </div>
    )
}

export default Todolist




