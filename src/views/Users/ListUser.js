import React from "react";
import axios from "axios";
import "./ListUser.scss";
import Color from "../HOC/Color";

class ListUser extends React.Component {

    state = {
        listUserData: []
    }

    async componentDidMount() {
        let callUser = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            listUserData: callUser && callUser.data && callUser.data.data ? callUser.data.data : []
        })
    }

    render() {
        let { listUserData } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Get All List User
                </div>
                {listUserData && listUserData.length > 0 && listUserData.map((item, index) => {
                    return (
                        <div className="list-user-content">
                            <div className="child">
                                {item.id} - {item.email} - {item.first_name}
                                <div>
                                    <img src={item.avatar} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Color(ListUser);