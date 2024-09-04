import React from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import "./Movies.css";
import { Context } from "../../App";

function TVcards({
  overview,
  name,
  poster_path,
  vote_count,
  first_air_date,
  vote_average,
  id,
}) {
  const { cast, handleCardClicks, handleVideoClicks, video } =
    useContext(Context);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [show, setShow] = useState(false);

  const handleShow = async () => {
    await handleCardClicks(id);
    await handleVideoClicks(id);
    setShow(!show);
  };

  // Separate cast members with and without profile pictures
  const filteredCast = cast.filter((castMember) => castMember.profile_path);
  const unfilteredCast = cast.filter((castMember) => !castMember.profile_path);

  return (
    <Card style={{ marginTop: "30px" }} className="movie-card">
      <Card.Img variant="top" src={imageUrl + poster_path} alt={name} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
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
              <strong>Vote Count:</strong> {vote_count}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Vote Average:</strong> {vote_average}
            </p>

            {video.length > 0 ? (
              <p style={{ marginBottom: "0.5rem", cursor: "pointer" }}>
                <strong onClick={() => handleShow(id)}>
                  <Link to={`https://www.youtube.com/watch?v=${video[0].key}`}>
                    Watch Trailer
                  </Link>
                </strong>
              </p>
            ) : (
              <p>
                {" "}
                <strong> No Trailer Available</strong>
              </p>
            )}

            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Cast:</p>
            {filteredCast.map((castMember) => (
              <p
                key={castMember.cast_id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={imageUrl + castMember.profile_path}
                  alt={castMember.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <span>
                  <strong>{castMember.name}</strong> as {castMember.character}
                </span>
              </p>
            ))}
            {unfilteredCast.length > 0 && (
              <>
                <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Others:
                </p>
                {unfilteredCast.map((casts) => (
                  <p key={casts.cast_id}>
                    <strong>{casts.name}</strong> as {casts.character}
                  </p>
                ))}
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default TVcards;
