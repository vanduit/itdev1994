import React from "react";
import ADDDEMO from "./AddDemo";
import TestData from "./TestData";
import { toast } from 'react-toastify';

class DEMO2 extends React.Component {

    state = {
        listAllData: [
            { id: '01', title: 'NGUYEN VAN A' },
            { id: '02', title: 'NGUYEN VAN B' },
            { id: '03', title: 'NGUYEN VAN C' },
        ],
        listEditData: {}
    }

    handleDeleteCopyNew = (job) => {
        let deleteData = this.state.listAllData;
        deleteData = deleteData.filter(listEditData => listEditData.id !== job.id);
        this.setState({
            listAllData: deleteData
        })
        toast.success('Delete data succeed');
    }

    handleAddNewData = (AddNewData) => {
        this.setState({
            listAllData: [...this.state.listAllData, AddNewData]
        })
        toast.success("Add Data sccueed");
    }

    handleClickNewData = (inputData) => {
        let { listAllData, listEditData } = this.state;
        let isChkEmty = Object.keys(listEditData).length === 0;
        if (isChkEmty === false && listEditData.id === inputData) {
            let lisAllDataCopy = [...listAllData];
            let ObjectID = lisAllDataCopy.findIndex(listEditData => listEditData.id === inputData.id);
            lisAllDataCopy[ObjectID].title = listEditData.title;
            this.setState({
                listEditData: lisAllDataCopy,
                listEditData: {}
            })
            toast.success("Edit Data Scuceed");
            return;
        }
        this.setState({
            listEditData: inputData
        })
    }

    handleChangeTitle = (event) => {
        let editTitle = { ...this.state.listEditData }
        editTitle.title = event.target.value;
        this.setState({
            listEditData: editTitle
        })
    }

    render() {

        let { listAllData, listEditData } = this.state;
        let isChkEmty = Object.keys(listEditData).length === 0;
        return (
            <>
                <ADDDEMO
                    handleAddNewData={this.handleAddNewData}
                />
                <TestData
                    listAllData={this.state.listAllData}
                    listEditData={this.state.listEditData}
                    handleDeleteCopyNew={this.handleDeleteCopyNew}
                />
                <div>
                    {
                        listAllData && listAllData.length > 0 && listAllData.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {
                                        isChkEmty === true ? <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {
                                                    listEditData.id === item.id ? <span>{index + 1}-<input value={listEditData.title} onChange={(event) => this.handleChangeTitle(event)} type="text" /></span>
                                                        :
                                                        <>
                                                            <span>{index + 1} - {item.title}</span>
                                                        </>
                                                }
                                            </>
                                    }
                                    <button type="submit" onClick={() => this.handleClickNewData(item)}>
                                        {isChkEmty === false && listEditData.id === item.id ? 'SAVE' : 'EDIT'}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }

}

export default DEMO2;