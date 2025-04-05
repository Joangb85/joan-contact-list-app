import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ContactForm = ({ slug, getUsersList }) => {
    const [nameInput, setNameInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [addressInput, setAddressInput] = useState("");

    const addNewUser = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
            method: "POST",
            body: JSON.stringify(

                {
                    "name": nameInput,
                    "phone": phoneInput,
                    "email": emailInput,
                    "address": addressInput
                }
            ),

            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => getUsersList());
    };
    return (
        < Container className="mt-3 text-light border rounded" style={{ paddingTop: "12px", paddingBottom: "14px", backgroundColor: "#212529", width: "80%" }} >
            <Form>
                <h3 className="mb-4 mt-3 ms-4 bg-dark" style={{ color: "#149eca"}}>
                    Add new contact
                </h3>
                <Form.Group className="mb-3 ms-4 me-4" controlId="formBasicEmail">
                    <Form.Label className="ms-auto">Name</Form.Label>
                    <Form.Control value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        type="text"
                        placeholder="Enter the name and surname"
                    />
                </Form.Group>
                <Form.Group className="mb-3 ms-4 me-4" controlId="formBasicPassword">
                    <Form.Label className="ms-auto">Phone</Form.Label>
                    <Form.Control value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        type="number"
                        placeholder="Enter the phone number"
                    />
                </Form.Group>
                <Form.Group className="mb-3 ms-4 me-4" controlId="formBasicPassword">
                    <Form.Label className="ms-auto">Email</Form.Label>
                    <Form.Control value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        type="email"
                        placeholder="Enter the email"
                    />
                </Form.Group>
                <Form.Group className="mb-5 ms-4 me-4" controlId="formBasicPassword">
                    <Form.Label className="ms-auto">Address</Form.Label>
                    <Form.Control value={addressInput}
                        onChange={(e) => setAddressInput(e.target.value)}
                        type="text"
                        placeholder="Enter the address"
                    />
                </Form.Group>
                <Button className="mb-3 ms-4" style={{ backgroundColor: "#212529", color: "#149eca" }}
                    onClick={() => addNewUser()}
                >
                    Create contact
                </Button>
            </Form>
        </Container>
    );
};