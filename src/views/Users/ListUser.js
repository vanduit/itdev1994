import React from "react";
import axios from "axios";
import "./ListUser.scss";
import Color from "../HOC/Color";
import { withRouter } from "react-router-dom";
import ReactPaginate from 'react-paginate';

class ListUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listUserData: [],
            currentPage: 0, // Trang hiện tại
            perPage: 2, // Số lượng phần tử trên mỗi trang
            listEditData: {}
        }
    }

    handlePageChange = ({ selected }) => {
        this.setState({
            currentPage: selected,
        });
    };

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
        let firtChange = event.target.value;
        this.setState({
            first_name: firtChange
        })
    }

    handleChangeJob = (event) => {
        let lastChange = event.target.value;
        this.setState({
            last_name: lastChange
        })
    }

    handleAddData = async () => {
        let { first_name, last_name } = this.state
        let newData = {
            first_name: first_name,
            last_name: last_name
        }
        if (!first_name && !last_name) {
            alert('Data is not found');
            return;
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
        let { listEditData } = this.state;
        let isChkEmty = Object.keys(listEditData).length === 0;
        if (isChkEmty === false && this.state.listEditData.id === item.id) {
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

    handleCancle = () => {
        this.setState({
            listEditData: {}
        })
    }

    render() {
        let { listUserData, listEditData, currentPage, perPage } = this.state;
        let isChkEmty = Object.keys(listEditData).length === 0;

        let offset = currentPage * perPage;
        let currentPageData = listUserData.slice(offset, offset + perPage);

        let pageCount = Math.ceil(listUserData.length / perPage);

        return (
            <div className="list-user-container">
                <div className="title">
                    Get All List User
                </div>
                <div>
                    Firt_Name: <input type="text" value={this.state.name} onChange={(event) => this.handleChangeName(event)} />
                    Last_Name : <input type="text" value={this.state.job} onChange={(event) => this.handleChangeJob(event)} />
                    <button onClick={() => this.handleAddData()} type="submit">Add</button>
                </div>
                {currentPageData && currentPageData.length > 0 && currentPageData.map((item, index) => {
                    return (
                        <div className="list-user-content">
                            <div className="child" key={item.id} onClick={() => this.handleViewDetailUser(item)}>

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
                            </div>
                            <div>
                                <button onClick={() => this.handleEditUser(item)} className="edit" type="button">
                                    {isChkEmty === false && listEditData.id === item.id ? 'Save' : 'Edit'}
                                </button>
                                <button onClick={() => this.handleDeleteData(item.id)} type="submit">Delete</button>
                                <button type="submit" onClick={() => this.handleCancle()}>Cancel</button>
                            </div>
                        </div>

                    )
                })}
                <div>
                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        breakLabel="..."
                        breakClassName="break-me"
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </div>


        )

    }
}

export default withRouter(ListUser);