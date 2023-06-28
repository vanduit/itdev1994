import React from "react";
import axios from "axios";
import Color from "../HOC/Color";
import { withRouter } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions/deleteUser";

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listUserData: [],
            first_name: '',
            last_name: '',
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
        this.props.setUserList(callUser && callUser.data && callUser.data.data ? callUser.data.data : []);
    }

    // handleViewDetailUser = (user) => {
    //     console.log('Test abc :', this.props);
    //     this.props.history.push(`/user/${user.id}`);
    // }

    onClickDataDelete = (userId) => {
        this.props.deleteUser(userId);
    };

    handleAddData = () => {
        this.createUser();
    }

    handleChangeFirstName = (event) => {
        let firtChange = event.target.value;
        this.setState({
            first_name: firtChange
        })
    }

    handleChangeLastName = (event) => {
        let lastChange = event.target.value;
        this.setState({
            last_name: lastChange
        })
    }

    createUser = async () => {
        try {
            let newData = {
                first_name: this.state.first_name,
                last_name: this.state.last_name
            }
            const response = await axios.post("https://reqres.in/api/users", { newData });
            const newUser = response.data;
            this.props.setUserList([...this.props.dataRedux, newUser]);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    render() {

        let listUserRedux = this.props.dataRedux
        let listEditUserRedux = this.props.dataReduxEdit

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
                    Firt_Name: <input type="text" value={this.state.firtChange} onChange={(event) => this.handleChangeFirstName(event)} />
                    Last_Name : <input type="text" value={this.state.last_name} onChange={(event) => this.handleChangeLastName(event)} />
                    <button onClick={() => this.handleAddData()} type="submit">Add</button>
                </div>
                {currentPageData && currentPageData.length > 0 && currentPageData.map((item, index) => {
                    return (
                        <div className="list-user-content" key={item.id}>
                            <div className="child" onClick={() => this.handleViewDetailUser(item)}>
                            </div>
                            <div className="child" >
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
                                <button onClick={() => this.onClickDataDelete(item)} type="submit">Delete</button>
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


const mapStatetoProps = (state) => {
    return {
        dataRedux: state.prop2.listUserData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserList: (dataRedux) => dispatch({
            type: 'SET_USER_LIST',
            payload: dataRedux,
        }),

        deleteUser: (userId) => dispatch(
            deleteUser(userId)
        ),

        addUserRedux: () => dispatch({
            type: 'CREATE_USER',
        }),

    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Product);