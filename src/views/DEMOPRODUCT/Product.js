import React from "react";
import axios from "axios";
import Color from "../HOC/Color";
import { withRouter } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { connect } from "react-redux";

class Product extends React.Component {

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
        this.props.setUserList(callUser && callUser.data && callUser.data.data ? callUser.data.data : []);
    }

    // handleViewDetailUser = (user) => {
    //     console.log('Test abc :', this.props);
    //     this.props.history.push(`/user/${user.id}`);
    // }

    onClickDataDelete = (userId) => {

        this.props.deleteUserRedux({
            id: userId
        });
    }

    render() {

        let listUserRedux = this.props.dataRedux
        console.log('YYYY :', listUserRedux);
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
                {currentPageData && currentPageData.length > 0 && currentPageData.map((item, index) => {
                    return (
                        <div className="list-user-content">
                            <div className="child" key={item.id} onClick={() => this.handleViewDetailUser(item)}>
                            </div>
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
                                <button onClick={() => this.onClickDataDelete(item.id)} type="submit">Delete</button>
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
            payload: dataRedux
        }),

        deleteUserRedux: (userId) => dispatch({
            type: 'DELETE_USER',
            payload: userId
        }),
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Product);