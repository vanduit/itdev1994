import React from "react";
import axios from "axios";
import "./ListUser.scss";
import Color from "../HOC/Color";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {

    state = {
        listUserData: [],
        name: '',
        job: ''
    }

    async componentDidMount() {
        let callUser = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            listUserData: callUser && callUser.data && callUser.data.data ? callUser.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        console.log('Test abc :', this.props);
        this.props.history.push(`/user/${user.id}`);
    }

    handleDeleteData = async (id) => {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        this.setState(prevState => ({
            listUserData: prevState.listUserData.filter(listUserData => listUserData.id !== id)
        }));
    }

    handleChangeName = (event) => {
        let nameChange = event.target.value;
        this.setState({
            name: nameChange
        })
    }

    handleChangeJob = (event) => {
        let jobChange = event.target.value;
        this.setState({
            job: jobChange
        })
    }

    handleAddData = async () => {
        let { name, job } = this.state
        let newData = {
            name: name,
            job: job
        }
        let response = await axios.post("https://reqres.in/api/users", newData);
        console.log('lllll :', response.status);
        if (response.status === 201) {
            // Thêm dữ liệu thành công, cập nhật danh sách người dùng
            let addedUser = response.data;
            this.setState(prevState => ({
                listUserData: [...prevState.listUserData, addedUser],
                name: '',
                job: ''
            }));
        } else {
            // Xử lý lỗi khi thêm dữ liệu
            console.log('Thêm dữ liệu thất bại');
        }
    }

    render() {
        let { listUserData } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Get All List User
                </div>
                <div>
                    Name: <input type="text" value={this.state.name} onChange={(event) => this.handleChangeName(event)} />
                    Job : <input type="text" value={this.state.job} onChange={(event) => this.handleChangeJob(event)} />
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
                            <div>
                                <button onClick={() => this.handleEditData()} type="submit">Edit</button>
                                <button onClick={() => this.handleDeleteData(item.id)} type="submit">Delete</button>
                                <button onClick={() => this.handleAddData()} type="submit">Add</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withRouter(ListUser);