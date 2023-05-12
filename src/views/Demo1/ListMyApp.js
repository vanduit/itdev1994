import React from "react";

class ListMyApp extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitel = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClick = (event) => {
        if (!this.state.title) {
            alert('Missing require parameter');
            return;
        }

        this.props.addDataMyApp({
            title: this.state.title
        })

        this.setState({
            title: ''
        })

    }

    render() {
        let { title } = this.state;
        return (
            <div className="list-myapp">
                <div className="col-12">
                    <input type="text" value={title} onChange={(event) => this.handleOnChangeTitel(event)} />
                    <button type="submit" onClick={(event) => this.handleOnClick(event)}>Add</button>
                </div>
            </div>
        )
    }
}

export default ListMyApp;