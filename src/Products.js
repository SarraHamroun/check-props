import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import propTypes from 'prop-types';
const Products = (props) => {
    return (
        <Card style={props.myStyle}>
          {props.children}
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.size}</Card.Text>
            <Card.Text>{props.price}</Card.Text>
            <Card.Text>{props.Brand}</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      );
}
Products.defaultProps = {
  Brand: 'ZARA'
}
Products.propTypes = {
  name: propTypes.string
};
export default Products