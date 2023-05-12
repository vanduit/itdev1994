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
        ],
        editMyApp: {}
    }

    addDataMyApp = (myapp) => {
        this.setState({
            listMyApp: [...this.state.listMyApp, myapp]
        })

        toast.success("Add data scuccess");
    }

    render() {
        let { listMyApp, editMyApp } = this.state;
        return (
            <>
                <div className="title">
                    <h3>MyApp</h3>
                </div>
                <ListMyApp
                    addDataMyApp={this.addDataMyApp}
                />
                <div className="list-myapp-container">

                </div>
            </>
        )
    }
}

export default Color(MyApp);