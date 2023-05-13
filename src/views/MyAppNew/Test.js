import React from "react";
import ADDTEST from "./AddTest";
import { toast } from 'react-toastify';

class TEST extends React.Component {

    state = {
        listDataTest: [
            { id: 'id01', title: 'TEST DATA 01' },
            { id: 'id02', title: 'TEST DATA 02' },
            { id: 'id03', title: 'TEST DATA 03' },
        ]
    }

    handleAddNewData = (data) => {
        this.setState({
            listDataTest: [...this.state.listDataTest, data]
        })
        toast.success("Add data scucced!");
    }

    render() {
        return (
            <div>
                <ADDTEST
                    handleAddNewData={this.handleAddNewData}
                />
            </div>
        )
    }
}

export default TEST;