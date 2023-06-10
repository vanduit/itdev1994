import React from "react";

class AddExample extends React.Component {

    state = {
        title: ''
    }

    handleOnClickAdd = (event) => {
        if (!this.state.title) {
            alert('Missing prameter required');
            return;
        }
        this.props.handleAddData({
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {

        let { title } = this.state;

        return (
            <div>
                <input value={title} onChange={(event) => this.handleOnChangeTitle(event)} type="text" />
                <button type="button" onClick={(event) => this.handleOnClickAdd(event)}> Add </button>
            </div>
        )
    }
}

export default AddExample;