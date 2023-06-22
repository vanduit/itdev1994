import React from "react";

class ADDDEMO extends React.Component {

    state = {
        title: ''
    }

    handleAddNewData = (event) => {
        if (!this.state.title) {
            alert('Miss required params');
            return;
        }
        this.props.handleAddNewData({
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
        let { title } = this.state
        return (
            <div>
                <input value={title} onChange={(event) => this.handleOnChangeTitle(event)} type="text" />
                <button onClick={(event) => this.handleAddNewData(event)} type="submit">Add</button>
            </div>
        )
    }
}

export default ADDDEMO;