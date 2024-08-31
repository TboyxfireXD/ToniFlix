import React, { useContext, useState } from "react";
import { Context } from "../App";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import "./Movies.css";

function TVsearchCards({
  name,
  popularity,
  overview,
  poster_path,
  vote_count,
  first_air_date,
  vote_average,
  id,
}) {
    
  const [show, setShow] = useState(false);
  const {cast, handleCardClick} = useContext(Context);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const handleShow = () => {
    setShow(!show);
    handleCardClick(id); // Fetch the cast when the modal is shown
  };

  const filteredCast = cast.filter((castMember) => castMember.profile_path);
  const unfilteredCast = cast.filter((castMember) => !castMember.profile_path);

  return (
    <Card style={{ marginTop: "30px" }} className="movie-card">
      <Card.Img variant="top" src={imageUrl + poster_path} alt={name} />
      <Card.Body>
        <Card.Title className="text-center"> {name} </Card.Title>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Description</Accordion.Header>
            <Accordion.Body>{overview}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>

      <Button onClick={handleShow}>View More</Button>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            variant="top"
            src={imageUrl + poster_path}
            alt={name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
            }}
          />
          <div style={{ textAlign: "left", marginTop: "1rem" }}>
            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Overview:
            </p>
            <p style={{ marginBottom: "1rem" }}>{overview}</p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>First Air Date:</strong> {first_air_date}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Popularity:</strong> {popularity}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Vote Count:</strong> {vote_count}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Vote Average:</strong> {vote_average}
            </p>
            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Cast:</p>
            {filteredCast.map((castMember) => (
              <p key={castMember.cast_id}>
                <img
                  src={imageUrl + castMember.profile_path}
                  alt={castMember.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <strong>{castMember.name}</strong> as {castMember.character}
              </p>
            ))}
            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Others:
            </p>
            {unfilteredCast.map((casts) => (
              <p key={casts.id}>
                <strong>{casts.name}</strong> as {casts.character}
              </p>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default TVsearchCards;
