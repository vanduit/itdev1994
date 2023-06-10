import React from "react";
import AddExample from "./AddExample";
import { toast } from 'react-toastify';

class Example extends React.Component {

    state = {
        listExample: [
            { id: '01', title: 'Example 01' },
            { id: '02', title: 'Example 02' },
            { id: '03', title: 'Example 03' },
        ],
        editlistExample: {}
    }

    handleAddData = (data) => {
        this.setState({
            listExample: [...this.state.listExample, data]
        })
        toast.success("Add Data scuccess")
    }

    render() {
        let { listExample, editlistExample } = this.state;
        let isChkEmty = Object.keys(editlistExample).length === 0;
        return (
            <div>
                <AddExample
                    handleAddData={this.handleAddData}
                />
                {
                    listExample && listExample.length > 0 && listExample.map((item, index) => {
                        return (
                            < div key={item.id} >
                                {
                                    isChkEmty === true ? <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editlistExample.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editlistExample.title} onChange={(event) => this.handleChangeTitle(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                }
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}

export default Example;