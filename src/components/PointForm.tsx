import React, { useState } from "react";
import "./registro.css";
import { useHistory } from "react-router";
import { InputChangeEventDetail, InputCustomEvent, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useUserStore } from "../../store/user.store";


const PointsForm: React.FC = () => {
  const { setUser } = useUserStore();
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack(); // 🔹 vuelve a la ruta anterior
  };

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    status: "",
  });

  const handleChange =
    (key: keyof typeof formData) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await setUser(formData);
      alert("usuario creado con éxito");
      // puedes redirigir o limpiar el formulario si quieres
    } catch (error) {
      alert("Error al crear el usuario");
    }
  };

  return (

    <div className="register-bg">

      <div className="phone-frame">
        <IonIcon
          icon={chevronBackOutline}
          onClick={handleGoBack}
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            fontSize: "28px",
            color: "#000",
            cursor: "pointer",
            zIndex: 10,
          }}
        />
        <form className="register-card" onSubmit={handleSubmit}>
          <img
            className="logo"
            src="../f1b28a798154152dd8d9eb0ba94b14a6285da1ae.png"
            alt="Siwventas"
          />

          <div className="spacer" />

          <input
            className="input"
            type="text"
            placeholder="id"
            value={formData.id}
            onChange={handleChange("id")}
          />
          <input
            className="input"
            type="text"
            placeholder="title"
            value={formData.title}
            onChange={handleChange("title")}
          />

          <input
            className="input"
            type="text"
            placeholder="description"
            value={formData.description}
            onChange={handleChange("description")}
          />

          <input
            className="input"
            type="date"
            placeholder="date"
            value={formData.date}
            onChange={handleChange("date")}
          />

          <input
            className="input"
            type="boolean"
            placeholder="status"
            value={formData.status}
            onChange={handleChange("status")}
          />

          <button className="btn btn-primary"  type="submit">
            Crear point
          </button>
        </form>
      </div>
    </div>
  );
};

export default PointsForm;
