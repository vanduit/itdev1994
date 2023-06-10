import React from "react"
import AddDemoToDoApp from "./AddDemoToDoApp"
import { toast } from 'react-toastify';

class ToDoAppDemo extends React.Component {

    state = {
        listData: [
            { id: '01', title: 'DEMO TEST 01' },
            { id: '02', title: 'DEMO TEST 02' },
            { id: '03', title: 'DEMO TEST 03' },
        ],
        addListData: {}
    }

    handleAddNewData = (data) => {
        this.setState({
            listData: [...this.state.listData, data]
        })
        toast.success("Add data scuccess");
    }

    handleOnChangeAdd = (event) => {
        let addListDataCopy = { ...this.state.listData };
        addListDataCopy.title = event.target.value;
        this.setState({
            addListData: addListDataCopy
        })
    }

    render() {
        let { listData, addListData } = this.state;
        let isChkEmty = Object.keys(addListData).length === 0;
        return (
            <div>
                <AddDemoToDoApp
                    handleAddNewData={this.handleAddNewData}
                />
                <div>
                    {
                        listData && listData.length > 0 && listData.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {
                                        isChkEmty === true ? <span>{index + 1} - {item.title}</span>
                                            :
                                            <div>
                                                {
                                                    addListData.id === item.id ?
                                                        <span>
                                                            {index + 1} - <input type="text" value={addListData.title} onChange={(event) => this.handleOnChangeAdd(event)} />
                                                        </span>
                                                        :
                                                        <span>{index + 1} - {item.title}</span>
                                                }
                                            </div>

                                    }

                                    <button type="submit" onClick={() => this.handleEditData(item)}>
                                        {isChkEmty === false && addListData.id === item.id ? 'Save' : 'Edit'}
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

export default ToDoAppDemo