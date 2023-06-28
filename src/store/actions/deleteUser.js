import axios from "axios";

export const deleteUser = (userId) => {
    console.log('TEST AXIOS :', userId.id);
    return (dispatch) => {
        axios
            .delete(`https://reqres.in/api/users/${userId}`)
            .then(() => {
                dispatch({
                    type: "DELETE_USER",
                    payload: userId
                });
            })
            .catch((error) => {
                console.error("Lỗi xóa dữ liệu:", error);
            });
    };

};