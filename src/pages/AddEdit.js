import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import './AddEdit.css';
import fireDb from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { toast } from "react-toastify";


const initialState = {
  name: "",
  email: "",
  contact: "",
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, contact } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() })
      } else {
        setData({})
      }
    });
    return () => {
      setData({});
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] })
    } else {
      setState({ ...initialState })
    }

    return () => {
      setState({ ...initialState });
    }
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Veuillez remplir tous les champs");
    } else {
      if (!id) {
        fireDb.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          }
          else {
            toast.success("Contact ajoutée avec succès");
          }
        });
      }else{
        fireDb.child(`contacts/${id}`).set(state,(err) => {
          if(err){
            toast.error(err);
          }
            else{
              toast.success("Contact mise à jour avec succès"); 
            }
        });
      }
      navigate('/');
    }
  };


  return (
    <div style={{ marginTop: "50px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignConte: "center",

        }}
        onSubmit={handleSubmit}
      >

        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="nom..." value={name || ""} onChange={handleInputChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Adresse Email..." value={email || ""} onChange={handleInputChange} />

        <label htmlFor="email">Téléphone</label>
        <input type="number" id="contact" name="contact" placeholder="Téléphone..." value={contact || ""} onChange={handleInputChange} />

        <input type="submit" value={id ? "Mettre à jour " : "Enregistrer"} />

      </form>
    </div>
  );
};

export default AddEdit