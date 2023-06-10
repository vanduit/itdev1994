import React from "react";

class AddDemoToDoApp extends React.Component {

    state = {
        title: ''
    }

    handleOnClickAdd = (event) => {
        if (!this.state.title) {
            alert('Missing prameter required')
        }
        this.props.handleAddNewData({
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }

    handleOnChangeTile = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    render() {

        let { title } = this.state;

        return (
            <div>
                <input value={title} onChange={(event) => this.handleOnChangeTile(event)} type="text" /> <button type="button" onClick={(event) => this.handleOnClickAdd(event)}> Add </button>
            </div>
        )
    }
}

export default AddDemoToDoApp;