import React from "react";
import ADDTEST from "./AddTest";
import { toast } from 'react-toastify';


class TEST extends React.Component {

    state = {
        listDataTest: [
            { id: 'id01', title: 'TEST DATA 01' },
            { id: 'id02', title: 'TEST DATA 02' },
            { id: 'id03', title: 'TEST DATA 03' },
        ],
        editDataTest: {}
    }

    handleAddNewData = (data) => {
        this.setState({
            listDataTest: [...this.state.listDataTest, data]
        })
        toast.success("Add data scuccess");
    }

    handleEditData = (inputData) => {
        let { listDataTest, editDataTest } = this.state
        let isChkEmty = Object.keys(editDataTest).length === 0;
        //SAVE
        if (isChkEmty === false && editDataTest.id === inputData.id) {
            let listTodoCopy = [...listDataTest];
            let objIndex = listTodoCopy.findIndex((editDataTest => editDataTest.id === inputData.id));
            console.log('Check data 1: ', objIndex);
            listTodoCopy[objIndex].title = editDataTest.title;

            this.setState({
                editDataTest: listTodoCopy,
                editDataTest: {}
            })

            toast.success("Edit data scuccess");
            return;

        }
        this.setState({
            editDataTest: inputData
        })
    }

    handleChangeTitle = (event) => {
        let editTitle = { ...this.state.editDataTest }
        editTitle.title = event.target.value
        this.setState({
            editDataTest: editTitle
        })
    }

    handleDelete = (inputDelete) => {
        let deleteData = this.state.listDataTest;
        deleteData = deleteData.filter(editDataTest => editDataTest.id !== inputDelete.id);
        this.setState({
            listDataTest: deleteData
        })
        toast.success('Delete data succeed');
    }

    render() {
        let { listDataTest, editDataTest } = this.state;
        let isChkEmty = Object.keys(editDataTest).length === 0
        return (
            <div>
                <ADDTEST
                    handleAddNewData={this.handleAddNewData}
                />
                <div className="list-todo-content">
                    {
                        listDataTest && listDataTest.length > 0 &&
                        listDataTest.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {
                                        isChkEmty === true ? <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editDataTest.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editDataTest.title} onChange={(event) => this.handleChangeTitle(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                    }

                                    <button type="submit" onClick={() => this.handleEditData(item)}>
                                        {isChkEmty === false && editDataTest.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button type="submit" onClick={() => this.handleDelete(item)}> Delete </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TEST;