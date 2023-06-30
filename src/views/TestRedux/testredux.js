import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";

class Testredux extends React.Component {

    onClickDataDelete = (user) => {
        this.props.deleteUserRedux(user);
        //console.log('TEST DELETE : ', this.props.deleteUserRedux(user));
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    handleEditUser = (item) => {
        this.props.editUserRedux(item);
    }

    handleChangeTitle = (event) => {
        this.props.editDataTitle({
            ...this.props.dataReduxEdit,
            name: event.target.value
        })
    }

    handleBuyProduct = (Product) => {
        this.props.fireProduct(Product);
        //console.log('handleBuyProduct', this.props.fireProduct(Product));
    }

    render() {
        let listUserData = this.props.dataRedux
        let listEditUser = this.props.dataReduxEdit
        let ischkEmty = Object.keys(listEditUser).length === 0
        return (
            <div>
                {
                    listUserData && listUserData.length > 0 && listUserData.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {
                                    ischkEmty === true ? <span>{index + 1} - {item.name} - {item.price} <span onClick={() => this.onClickDataDelete(item)}>x</span></span>
                                        :
                                        <>
                                            {listEditUser.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={listEditUser.name} onChange={(event) => this.handleChangeTitle(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.name}
                                                </span>
                                            }
                                        </>
                                }
                                {/* <button onClick={() => this.handleEditUser(item)} className="edit" type="button">
                                    {ischkEmty === false && listEditUser.id === item.id ? 'Save' : 'Edit'}
                                </button> */}
                                <button onClick={() => this.handleBuyProduct(item)}>
                                    Mua hàng
                                </button>
                            </div>
                        )
                    })

                }
                <button style={{ cursor: "pointer" }} onClick={() => this.handleCreateUser()}>Add new</button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        dataRedux: state.prop1.users,
        dataReduxEdit: state.prop1.editUser
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
        editUserRedux: (dataInput) => dispatch({
            type: 'EDIT_USER',
            payload: dataInput
        }),
        editDataTitle: (inputData) => dispatch({
            type: 'TITLE_EDIT',
            payload: inputData
        }),

        fireProduct: (Product) => dispatch(
            addToCart(Product)
        ),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Testredux);