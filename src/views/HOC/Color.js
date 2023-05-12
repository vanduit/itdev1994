import React from "react";
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {

    const colorRandom = getRandomColor();
    // khi return để react hiểu đang viết component
    //nhận đầu vào là gì trả đầu ra như vậy
    // đầu vào nhận props, đầu ra trả ra props
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;