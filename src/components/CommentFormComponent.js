import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
      Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggleModal() {
    console.log("toggleModal");
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
      this.toggleModal();
      console.log('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
  }

  render() {
    return(
      <div>
      <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <div className="form-group">
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select model=".rating"  id="rating" name="rating"
                        className="form-control" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Control.select>
                </div>
                <div className="form-group">
                    <Label htmlFor="author">Your Name</Label>
                    <Control.text model=".author" placeholder="Your Name" id="author" name="author"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(15)
                        }}  />
                        <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                         />
                </div>
                <div className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea model=".comment" rows="6"  id="comment" name="comment"
                    className="form-control"  />
                </div>
                <Button type="submit" value="submit" color="primary">Submit</Button>
            </LocalForm>
          </ModalBody>
      </Modal>
      </div>
    )
  }
}

export default CommentForm;
