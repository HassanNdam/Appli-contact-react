import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import fireDb from "../firebase";
import { Link } from "react-router-dom";
import './Home.css';
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState({})

  const navigate = useNavigate();

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
  }, []);

  const onDelete = (id) =>{
    if(window.confirm("Etes-vous certain de vouloir supprimer ce contact?")){
      fireDb.child(`contacts/${id}`).remove((err) =>{
        if(err){
          toast.error(err);
          navigate('/'); 
        }else{
          toast.success("Contact supprimé avec succès");
        }
      })
    }
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Nom</th>
            <th style={{ textAlign: "center" }}>Adresse Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/view/${id}`}>
                    <button className="btn btn-view">Afficher</button>
                  </Link>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit" >Editer</button>
                  </Link>
                  <button className="btn btn-delete" onClick={() => onDelete(id)}>Supprimer</button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home