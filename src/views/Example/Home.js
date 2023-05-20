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
        console.log('Check delete user ', user)
        //this.props.deleteUserRedux(user)
    }

    //HOC : Higher order components
    // Khi su dụng HOC sẽ giúp cho chúng components hiện tại ta có nhiều props || nhiều option lựa chọn
    render() {
        console.log('>>> Check props >>>', this.props.dataRedux);
        let abc = this.props.dataRedux;
        console.log('>>Check log data', abc);
        return (
            <>
                <div>Hello From HomePage</div>
                <div>
                    {abc && abc.length > 0 && abc.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} <span style={{ cursor: "pointer" }} onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}


const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER',
            payload: userDelete
        })
    }
}

//export default withRouter(Home);
export default connect(mapStatetoProps, mapDispatchToProps)(Color(Home));