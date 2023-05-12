import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo');
        // }, 3000)
    }
    //HOC : Higher order components
    // Khi su dụng HOC sẽ giúp cho chúng components hiện tại ta có nhiều props || nhiều option lựa chọn
    render() {
        console.log('>>> Check props >>>', this.props);
        return (
            <div>Hello From HomePage</div>
        )
    }
}

//export default withRouter(Home);
export default Color(Home);