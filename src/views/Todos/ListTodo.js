import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component{

    state = {
        listTodos : [
            {id : 'todo1', title: 'Doing Homework'},
            {id : 'todo2', title: 'Watching Video'},
            {id : 'todo3', title: 'Play Video Game'}
        ]
    }

    addNewTodo = (todo)=>{
        this.setState({
            listTodos : [...this.state.listTodos,todo]
        })
    }

    handleOnEdit = ()=>{
        alert('Edit data');
    }

    render(){

        let {listTodos} = this.state; // <=> this.listTodos = this.state.listTodos;
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
                                    <span> {index + 1} - {item.title}</span>
                                    <button onClick={()=>this.handleOnEdit()} className="edit" type="button">Edit</button>
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