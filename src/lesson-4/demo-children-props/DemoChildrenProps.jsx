import React, { Component } from 'react'
import Button from './Button'

export default class DemoChildrenProps extends Component {
    render() {
        return (
            <div>
                {/* Truyền children props bằng cachs tryền nd vào 2 thẻ đóng mở của component */}
                <Button>See more</Button>
                <Button>Sign up</Button>
                <Button>Sign in</Button>
                <Button>Add to cart</Button>
            </div>
        )
    }
}
