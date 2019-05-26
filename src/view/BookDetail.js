import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class BookDetail extends Component {
    render() {
        return (
            <Card>
                <Image src={this.props.book.imgUrl} />
                <Card.Content>
                    <Card.Header align='center'>{this.props.book.title}</Card.Header>
                    <Card.Meta>{this.props.book.author}</Card.Meta>
                    <Card.Meta>{this.props.book.publisher}</Card.Meta>
                    <Card.Meta>${this.props.book.price}</Card.Meta>
                    <Card.Meta>{this.props.book.introduce}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}

export default BookDetail