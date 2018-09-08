import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  renderComments(comments) {
    const listComments = comments.map((comment) =>
      <li key={comment.id.toString()}>
      <p>
        {comment.comment}</p>
      <p>--{comment.author},&nbsp;
        {new Intl.DateTimeFormat('en-US',
          {year: 'numeric', month: 'short', day: '2-digit'}).format(
          new Date(Date.parse(comment.date)))}</p>
      </li>
    );

    return (
      <ul className="list-unstyled">{listComments}</ul>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
        <div className="row">
        <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
        </Card>
        </div>

        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(this.props.dish.comments)}
        </div>
        </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default DishDetail;
