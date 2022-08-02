import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";


export const Contact = () => {
    // const formInitialDetails = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // }

    // const [formDetails, setFormDetails] = useState(formInitialDetails);
    // // const [buttonText, setButtonText] = useState('Send');
    // // const [status, setStatus] = useState({});

    // const onFormUpdate = (category, value) => {
    //     setFormDetails({
    //       ...formDetails,
    //       [category]: value
    //     })

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/xjvlzaao",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thank You :)", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });

    }

   
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleOnSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" id="firstname" name="firstname" placeholder="First Name" required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" id="lastname" name="lastname" placeholder="Last Name"  required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" id="email" name="email" placeholder="Email"  required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" id="phone" name="phone" placeholder="Phone No"  required/>
                                </Col>
                                <Col>
                                    <textarea row="6" id="message" name="message" placeholder="Message"  required/>
                                    <button type="submit" disabled={serverState.submitting} className="myCrazyBtn third">
                                                Submit
                                                </button>
                                                
                                                {serverState.status && (
                                                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                                    {serverState.status.msg}
                                                </p>
                                                )}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}