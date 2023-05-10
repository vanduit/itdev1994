import React from "react";

class AddTodo extends React.Component{

    state = {
        title : ''
    }

    handleChangeTitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }

    handleOnClick = (event)=>{
        event.preventDefault()
        if(!this.state.title){
            alert('missing required params');
            return;
        }
        
        this.props.addNewTodo({
            title:this.state.title
        });

        this.setState({
            title: ''
        })
    }

    render(){
        let {title} = this.state.title;
        return(
            <div className="add-todo">
                    <input type="text" value={this.state.title} onChange={(event)=>this.handleChangeTitle(event)} />
                    <button type="submit" className="add" onClick={(event)=>this.handleOnClick(event)}> Add </button>
            </div>
        )
    }
}

export default AddTodo;