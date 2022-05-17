import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            // Nhận nd giữa 2 thẻ đóng mở component bằng this.props.children
            // Giống innerHTML
            <button className="btn btn-success">{this.props.children}</button>
        )
    }
}
