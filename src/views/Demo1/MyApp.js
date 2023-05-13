import React from 'react';
import Color from '../HOC/Color';
import ListMyApp from './ListMyApp';
import { toast } from 'react-toastify';


class MyApp extends React.Component {

    state = {
        listMyApp: [
            { id: 'MyApp1', title: 'PlayGame01' },
            { id: 'MyApp2', title: 'PlayGame02' },
            { id: 'MyApp3', title: 'PlayGame03' },
            { id: 'MyApp4', title: 'PlayGame04' },
        ],
        editMyApp: {}
    }

    addDataMyApp = (myapp) => {
        this.setState({
            listMyApp: [...this.state.listMyApp, myapp]
        })

        toast.success("Add data scuccess");
    }

    handleChangeTitle = (event) => {
        let ediMyAppCopy = { ...this.state.editMyApp }
        ediMyAppCopy.title = event.target.value;
        this.setState({
            editMyApp: ediMyAppCopy
        })
    }

    handleDeleteMyApp = (myapp) => {
        let listDataMyApp = this.state.listMyApp;
        listDataMyApp = listDataMyApp.filter(item => item.id !== myapp.id);
        this.setState({
            listMyApp: listDataMyApp
        })
        toast.success("Delete data scuccess");
    }

    handleEditMyApp = (myapp) => {
        let { listMyApp, editMyApp } = this.state;
        let ischkEmty = Object.keys(editMyApp).length === 0; // true
        // Save
        if (ischkEmty === false && editMyApp.id === myapp.id) {
            let editDataCopy = [...listMyApp];
            let objIndex = editDataCopy.findIndex((item => item.id === myapp.id));
            editDataCopy[objIndex].title = editMyApp.title;

            this.setState({
                listMyApp: editDataCopy,
                editMyApp: {}
            })
            toast.success("Edit data scuccess");
            return;
        }
        //Edit
        this.setState({
            editMyApp: myapp
        })
    }

    handleChangeTitle = (event) => {
        let editDataMyApp = { ...this.state.editMyApp }
        editDataMyApp.title = event.target.value;
        this.setState({
            editMyApp: editDataMyApp
        })
    }

    render() {
        let { listMyApp, editMyApp } = this.state;
        let ischkEmty = Object.keys(editMyApp).length === 0;
        console.log('Check Emty Obj', ischkEmty);
        return (
            <>
                <div className="title">
                    <h3>MyApp</h3>
                </div>
                <ListMyApp
                    addDataMyApp={this.addDataMyApp}
                />
                <div className="list-myapp-container">
                    {listMyApp && listMyApp.length > 0 &&
                        listMyApp.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {ischkEmty === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editMyApp.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editMyApp.title} onChange={(event) => this.handleChangeTitle(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>

                                    }

                                    <button onClick={() => this.handleEditMyApp(item)} className="edit" type="button">
                                        {ischkEmty === false && editMyApp.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button onClick={() => this.handleDeleteMyApp(item)} className="delete" type="button">Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Color(MyApp);