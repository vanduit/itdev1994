import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo_1.png";
import { connect } from "react-redux";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo');
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        //console.log('Check delete user ', user)
        this.props.deleteUserRedux(user)
    }

    handleEditUser = (userId) => {
        this.props.editUserRedux(userId);
    };

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    handleChangeTitle = (event) => {
        console.log('Edit abc : ', event);
        let editTodoCopy = { ...this.state.editUsers };
        editTodoCopy.title = event.target.value;
        this.setState({
            editUsers: editTodoCopy
        })
    }

    //HOC : Higher order components
    // Khi su dụng HOC sẽ giúp cho chúng components hiện tại ta có nhiều props || nhiều option lựa chọn
    render() {
        let listUser = this.props.dataRedux;
        let editUsers = this.props.dataReduxEditUsers;
        let ischkEmty = Object.keys(editUsers).length === 0;
        console.log('>>Check ischkEmty data', ischkEmty);
        return (
            <>
                <div>Hello From HomePage</div>
                <div>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {
                                    ischkEmty === true ?
                                        <span>{index + 1} - {item.name} &nbsp; <span style={{ cursor: "pointer" }} onClick={() => this.handleDeleteUser(item)}>x</span></span>
                                        :
                                        <>
                                            {editUsers.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editUsers.name} onChange={(event) => this.handleChangeTitle(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.name}
                                                </span>
                                            }
                                        </>
                                }
                                <button onClick={() => this.handleEditUser(item.id)} className="edit" type="button">
                                    {ischkEmty === false && editUsers.id === item.id ? 'Save' : 'Edit'}
                                </button>
                            </div>
                        )
                    })}

                    <button style={{ cursor: "pointer" }} onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}


const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users,
        dataReduxEditUsers: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER',
            payload: userDelete
        }),
        addUserRedux: () => dispatch({
            type: 'CREATE_USER',
        }),
        editUserRedux: (userEdit) => dispatch({
            type: 'EDIT_USER',
            payload: userEdit
        })
    }
}

//export default withRouter(Home);
export default connect(mapStatetoProps, mapDispatchToProps)(Color(Home));