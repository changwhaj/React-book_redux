import React, { Component } from 'react';
import { Item, ItemMeta } from 'semantic-ui-react';

class BookListItem extends Component {
    render() {
        const {
            book,
            onBookSelect,
        } = this.props;

        return (
            <Item onClick={() => onBookSelect(book)}>
                <Item.Image size='tiny' src={book.imgUrl} />
                <Item.Content verticalAlign='top' align='left'>
                    <Item.Header>{book.title}</Item.Header>
                    <ItemMeta>${book.price}</ItemMeta>
                    <Item.Description>{book.author}</Item.Description>
                </Item.Content>
            </Item>
        )
    }
}

export default BookListItem;