import React from "react";
import axios from "axios";
import "./ListUser.scss";
import Color from "../HOC/Color";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {

    state = {
        listUserData: [],
        listEditData: {}
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

    handleEditUser = async (item) => {
        if (this.state.listEditData.id === item.id) {
            let { listEditData } = this.state;
            let updatedUser = {
                first_name: listEditData.first_name,
                last_name: listEditData.last_name,
                avatar: listEditData.avatar
            };

            let response = await axios.put(`https://reqres.in/api/users/${item.id}`, updatedUser);
            if (response.status === 200) {
                let updatedUserData = response.data;
                this.setState(prevState => ({
                    listUserData: prevState.listUserData.map(listUserData => listUserData.id === item.id ? updatedUserData : listUserData),
                    listEditData: {}
                }));
            } else {
                // Xử lý lỗi khi cập nhật người dùng
                alert('Cập nhật người dùng thất bại');
            }

        } else {
            // Chọn người dùng để chỉnh sửa
            this.setState({
                listEditData: {
                    id: item.id,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    avatar: item.avatar
                }
            });
        }
    }

    handleChangFirtName = (event) => {
        let editDataFirt = { ...this.state.listEditData };
        editDataFirt.first_name = event.target.value;
        this.setState({
            listEditData: editDataFirt
        })
    }

    handleChangLastName = (event) => {
        let editDataLast = { ...this.state.listEditData };
        editDataLast.last_name = event.target.value;
        this.setState({
            listEditData: editDataLast
        })
    }

    render() {
        let { listUserData, listEditData } = this.state;
        let isChkEmty = Object.keys(listEditData).length === 0;
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
                            {/* <div className="child" key={item.id} onClick={() => this.handleViewDetailUser(item)}>
                            </div> */}
                            <div className="child">
                                {
                                    isChkEmty === true ?
                                        <span>
                                            {index + 1} - {item.last_name} - {item.first_name}
                                            <div><img src={item.avatar} /></div>
                                        </span>
                                        :
                                        <>
                                            {
                                                listEditData.id === item.id ?
                                                    <span>
                                                        {index + 1} -
                                                        <input value={listEditData.first_name} onChange={(event) => this.handleChangFirtName(event)} />
                                                        <input value={listEditData.last_name} onChange={(event) => this.handleChangLastName(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.last_name} - {item.first_name}
                                                        <div><img src={item.avatar} /></div>
                                                    </span>
                                            }
                                        </>


                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleEditUser(item)} className="edit" type="button">
                                    {isChkEmty === false && listEditData.id === item.id ? 'Save' : 'Edit'}
                                </button>
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