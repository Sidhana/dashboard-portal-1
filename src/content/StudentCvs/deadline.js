import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
import './cv.css'
import 'bootstrap/dist/css/bootstrap.css';


class setDeadline extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: Date.now(),
    }
  }

  render() {
    return (

        <div className="container deadline_container1">
          <Card className="set_deadline_card1">
            <Form className="deadline_form">
              <Form.Group controlId="deadline">
                <Form.Label className="deadline_form_label">
                  Set deadline
                </Form.Label>
                <Form.Control
                  className="deadline_form_control"
                  type="date"
                  placeholder={this.state.date}
                ></Form.Control>
              </Form.Group>
            </Form>
            <button
              onClick={this.checkDate}
              className="continue-btn block "
              type="submit"
            >
              Continue
            </button>
          </Card>
        </div>
    )
  }
}

export default setDeadline