import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Container, Badge, Button } from "react-bootstrap";
import { NavLink } from "react-router";

export const Agenda = () => {
    const [agendas, setAgendas] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const getAgendaList = () => {
        fetch(`https://playground.4geeks.com/contact/agendas`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((response) => {
                setAgendas(response.agendas);
            });
    };

    const addNewContact = (slug) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
            method: "POST",
            body: JSON.stringify({ slug }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => getAgendaList());
    };

    const removeContacts = (slug) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
            method: "DELETE",
        }).then(() => getAgendaList());
    };

    useEffect(() => {
        getAgendaList(setAgendas);
    }, []);

    return (
        <Container className="mt-3">
            <Badge
                className="py-3 px-3 bg-dark border rounded"
                style={{ width: "100%" }}
            >
                <h1
                    className="mb-3 ms-1 text-light bg-dark d-flex align-items-center justify-content-start"
                >
                    Agenda's list
                </h1>
                <input
                    type="text"
                    placeholder="Create a new agenda"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.code === "Enter" && inputValue.trim() !== "") {
                            addNewContact(inputValue);
                            setInputValue("");
                        }
                    }}
                    style={{
                        padding: "10px",
                        marginTop: "9px",
                        marginBottom: "5px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        width: "100%",
                    }}
                />
            </Badge>
            {!isEmpty(agendas) && agendas.map((element) => (
                <Container
                    className="d-flex align-items-center"
                    key={element.slug}
                >
                    <Container
                        className="mt-1 py-2 border rounded"
                        style={{backgroundColor: "#212529", color: "#149eca" }}
                    >
                        <strong className="ms-1">{element.slug}</strong>
                        <NavLink to={`/User/${element.slug}`} end>
                            <Button className="justify-content-center ms-3" style={{ backgroundColor: "#212529", color: "#149eca" }} >Contacts</Button>
                        </NavLink>
                        <Button
                            className="float-end"
                            variant="danger"
                            size="sm"
                            style={{ marginTop: "4px", color: "#212529" }}
                            onClick={() => removeContacts(element.slug)}
                        >
                            <strong>X</strong>
                        </Button>
                    </Container>
                </Container>
            ))}
        </Container>
    );
};