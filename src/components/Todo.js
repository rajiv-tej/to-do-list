import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {provider , db , auth} from '../FirebaseConfig'
import './Todo.css'
import firebase from "firebase"
import TodoList from './TodoList';



function Todo() {
    const [user] = useAuthState(auth);
   
    const [Todo , setTodo] = useState('');
    const handleAddTodo = (e) => {
        e.preventDefault();
        setTodo("");
        db.collection(`users/${user.uid}/todos`).add({
            inprogress:true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo:Todo
        });
        }
    return (
        <div className="maincontent">
        <div className='todo_container'>
            <div className="greet">
                <div>
                <h1>Hey!</h1></div>
                <h3>{user.displayName}</h3>
                <div >
                    <form className="todo-input"  onSubmit={handleAddTodo}>
                    <input type="text" class="inp"  value={Todo} onChange={(e)=>{setTodo(e.target.value)}} placeholder="Enter A Task Here!"/>
                    <button class="addbtn" type="submit" >+ Add up</button>
                    </form>
                </div>
            </div>
        </div>
        <TodoList/>
        </div>
    )
}

export default Todo
