import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let callDetailUser = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: callDetailUser && callDetailUser.data && callDetailUser.data.data ? callDetailUser.data.data : {}
            })
        }
    }

    handleBackButton = () => {
        this.props.history.push(`/user`);
    }

    render() {
        let { user } = this.state;
        let isCheckEmty = Object.keys(user).length === 0;
        return (
            <div className="list-content-DetailUser">
                {isCheckEmty === false &&
                    <div>
                        <div>User is name: {user.first_name} - {user.last_name}</div>
                        <div>User is email: {user.email} </div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(DetailUser);