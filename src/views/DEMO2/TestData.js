import React from "react";

class TestData extends React.Component {

    handleDelete = (dataDelete) => {
        this.props.handleDeleteCopyNew(dataDelete);
    }

    render() {
        let { listAllData, listEditData } = this.props
        return (
            <div>
                {
                    listAllData && listAllData.length > 0 && listAllData.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <span>{index + 1} - {item.title}   <span onClick={() => this.handleDelete(item)}>x</span></span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TestData;