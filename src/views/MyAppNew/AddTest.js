import React from "react";

class ADDTEST extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClick = (event) => {
        if (!this.state.title) {
            alert('Missing require prameter');
        }

        this.props.handleAddNewData({
            title: this.state.title
        })

        this.setState({
            title: ''
        })

    }

    render() {
        let { title } = this.state;
        return (
            <>
                <input value={title} onChange={(event) => this.handleOnChangeTitle(event)} type="text" />
                <button onClick={(event) => this.handleOnClick(event)} type="button" >Add</button>
            </>
        )
    }
}

export default ADDTEST;