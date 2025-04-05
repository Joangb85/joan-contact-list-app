import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Container, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { ContactForm } from "../components/Form";

export const User = () => {
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    let { slug } = useParams();

    const getUsersList = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((response) => {
                setUsers(response.contacts || []);
                console.log(response);
            });
    };

    const removeUser = (id) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
            method: "DELETE",
        }).then(() => getUsersList());
    };

    useEffect(() => {
        getUsersList();
    }, []);

    return (
        <Container className="mt-3">
            <Badge

                className="py-3 px-3 bg-dark border rounded"
                style={{
                    width: "100%",
                }}
            >
                <h1 className="mb-3 mt-2 ms-3 bg-dark text-light d-flex align-items-center justify-content-start">
                    Contacts of {slug}
                </h1>                
            </Badge>
            <ContactForm getUsersList={getUsersList} slug={slug}/>
            {!isEmpty(users) && users.map((element) => (
                <Container
                    className="d-flex align-items-center"
                    key={element.id}
                >
                    <Container className="mt-3 d-flex justify-content-between align-items-center bg-dark border rounded"
                    style={{paddingTop: "9px", paddingBottom: "11px", color: "#149eca", width: "60%"}}>
                        {element.name || "Without name"}<br/>
                        {element.phone || "Without phone"}<br/>
                        {element.email || "Without email"}<br/>
                        {element.address || "Without address"}<br/>
                        <Button
                            className="align-self-start"
                            variant="danger"
                            onClick={() => removeUser(element.id)}
                            style={{ marginRight: "21px", marginTop: "31px", color: "#212529"}}
                        >
                            <strong>X</strong>
                        </Button>
                    </Container>
                </Container>
            ))}
        </Container>
    );
};