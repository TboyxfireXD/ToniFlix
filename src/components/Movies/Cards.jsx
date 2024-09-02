import React, { useContext, useState } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import "../TV/Movies.css";
import { Context } from "../../App";

function Cards({
  title,
  overview,
  poster_path,
  vote_count,
  release_date,
  vote_average,
  id,
}) {

  const {cast, handleCardClick} = useContext(Context)
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
    handleCardClick(id); // Fetch the cast when the modal is shown
  };

  // Filter the cast to remove members without a profile_path
  const filteredCast = cast.filter(castMember => castMember.profile_path);
  const unfilteredCast = cast.filter(castMember => !castMember.profile_path);

  return (
    <Card style={{ marginTop: "30px" }} className="movie-card">
      <Card.Img variant="top" src={imageUrl + poster_path} alt={title} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
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
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            variant="top"
            src={imageUrl + poster_path}
            alt={title}
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
              <strong>Release Date:</strong> {release_date}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Vote Count:</strong> {vote_count}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Vote Average:</strong> {vote_average}
            </p>
            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Cast:</p>
            {filteredCast.map((castMembers) => (
              <p key={castMembers.cast_id}>
                <img
                  src={imageUrl + castMembers.profile_path}
                  alt={castMembers.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <strong>{castMembers.name}</strong> as {castMembers.character}
              </p>
            ))}
            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Others:</p>
            {unfilteredCast.map((casts) =>(
              <p key={casts.id}>
                <strong>{casts.name}</strong>  as {casts.character}
              </p>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default Cards;