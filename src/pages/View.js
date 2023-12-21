import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { useParams, Link } from 'react-router-dom';
import './View.css';

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`contacts/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  return (
    <div style={{ marginTop: "40px" }}>
      <div className="card">
        <div className="card-header">
            <p>Informations de contact l'étudiant <strong>{user.name}</strong></p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br/>
          <br/>
          <strong>Nom: </strong>
          <span>{user.name}</span>
          <br/>
          <br/>
          <strong>Email: </strong>
          <span>{user.email}</span>
          <br/>
          <br/>
          <strong>Contact: </strong>
          <span>{user.contact}</span>
          <br/>
          <br/>

          <Link to="/">
          <button className="btn btn-edit">Retour à l'accueil</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View