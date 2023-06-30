import React from 'react';

class AddComponent extends React.Component {


    state = {
        title: '',
        salary: ''
    }
    handleChangeTitle = (event) => {

        this.setState({
            title: event.target.value
        })
    }

    handleChangeLast = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleBtnTest = () => {
        let listData = {
            title: this.state.title,
            salary: this.state.salary
        }
        this.props.handleRootFunction(listData);
    }


    handleOnClick = (event) => {
        event.preventDefault() // hàm javascript ko load lại trang.
        if (!this.state.title || !this.state.salary) {
            alert('missing required params');
            return;
        }
        console.log('>> check data >>', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">Job's title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitle(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeLast(event)}
                    />
                    <br /><br />
                    <input type="submit" onClick={(event) => this.handleOnClick(event)} />
                </form>
                <button type="submit" onClick={() => this.handleBtnTest()}>
                    Test
                </button>
            </div>
        )
    }
}

export default AddComponent;