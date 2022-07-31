import React from 'react'
import "./TodoList.css"
import {auth, db} from "../FirebaseConfig"
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

function TodoList() {
    const [user] = useAuthState(auth);
    const [Todos] = useCollectionData(db.collection(`users/${user.uid}/todos`) , {idField : "id"});
    const sorttodo=(Todos)=>{

       
        if(Todos){
            Todos.sort((a,b)=>{return (a.timestamp - b.timestamp ) });
        }
        
    }
    setTimeout(sorttodo(Todos), 5000);
 
    const finishTask=(id , inprogress)=>{
        db.collection(`users/${user.uid}/todos`).doc(id).set({inprogress:!inprogress} , {merge:true});
    }
    const deletetodo=(id)=>{
        db.collection(`users/${user.uid}/todos`).doc(id).delete()
    }
    return (
        <>
        <div className="todo-container">
            {Todos && Todos.map((todo)=> (
                <>
                <div  className={(todo.inprogress)?"todo_card":"todo_card finished"} id={todo.id}>
                <div className="todo">{todo.todo}</div>
                <div className="icons">
                    <svg onClick={()=>finishTask(todo.id , todo.inprogress)} className="okay" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>
                    <svg onClick={()=>deletetodo(todo.id)} className="bin" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"/></svg>           
                </div>
                </div>
                </>
            ))}
           
            
           
        </div>
        </>
    )
}

export default TodoList
