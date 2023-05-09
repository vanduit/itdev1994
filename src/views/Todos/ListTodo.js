import React from "react";
import "./ListTodo.scss";

class ListTodo extends React.Component{

    state = {
        listTodos : [
            {id : 'todo1', title: 'Doing Homework'},
            {id : 'todo2', title: 'Watching Video'},
            {id : 'todo3', title: 'Play Video Game'}
        ]
    }
    render(){

        let {listTodos} = this.state; // <=> this.listTodos = this.state.listTodos;
        return(
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" />
                    <button type="button"> Add </button>
                </div>
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item,index)=>{
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1} - {item.title}</span>
                                    <button type="button">Edit</button>
                                    <button type="button">Delete</button>
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