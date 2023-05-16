import React from "react";
import axios from "axios";
import "./ListUser.scss";
import Color from "../HOC/Color";
import { withRouter } from "react-router-dom";

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

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
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
                            <div className="child" key={item.id} onClick={() => this.handleViewDetailUser(item)}>
                                {index + 1} - {item.last_name} - {item.first_name}
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

export default withRouter(ListUser);