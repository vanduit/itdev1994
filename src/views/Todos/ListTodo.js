import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";

import {toast} from 'react-toastify';

class ListTodo extends React.Component{

    state = {
        listTodos : [
            {id : 'todo1', title: 'Doing Homework'},
            {id : 'todo2', title: 'Watching Video'},
            {id : 'todo3', title: 'Play Video Game'}
        ],
        editTodo : {}
    }

    addNewTodo = (todo)=>{
        this.setState({
            listTodos : [...this.state.listTodos,todo]
        })

        toast.success("Add data scuccess");
    }

    handleEditTodo = (todo)=>{

        let {editTodo, listTodos} = this.state;

        let ischkEmty = Object.keys(editTodo).length === 0;
        //save
        if(ischkEmty === false && editTodo.id === todo.id){

            let listTodoCopy = [...listTodos];
            let objIndex = listTodoCopy.findIndex((item=>item.id === todo.id));

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos : listTodoCopy,
                editTodo: {}
            })

            toast.success("Edit data scuccess");

            return;
        }

        //edit
        this.setState({
            editTodo : todo
        })
    }

    handleChangeTitle = (event)=>{

        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo : editTodoCopy
        })
    }

    handleDeleteTodo = (todo)=>{

        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);

        this.setState({
            listTodos : currentTodo
        })

        toast.success("Delete data scuccess");
    }

    handleOnEdit = ()=>{
        alert('Edit data');
    }

    render(){

        let {listTodos, editTodo} = this.state; // <=> this.listTodos = this.state.listTodos;

        let ischkEmty = Object.keys(editTodo).length === 0;
        console.log('Check Emty Obj', ischkEmty);

        return(
            <div className="list-todo-container">
                
                <AddTodo 
                    addNewTodo = {this.addNewTodo}
                />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item,index)=>{
                            return (
                                <div className="todo-child" key={item.id}>
                                    {ischkEmty === true ?
                                    <span> {index + 1} - {item.title}</span>
                                    <button className="edit" type="button">Edit</button>
                                    <button className="delete" type="button">Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;