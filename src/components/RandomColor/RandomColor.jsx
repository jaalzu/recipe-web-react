import { useState } from "react";

export default function RandomColorBox() {
  const [color, setColor] = useState("#ffffff");

  // Función para generar un color aleatorio en formato HEX
  const randomHex = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

  const handleClick = () => {
    setColor(randomHex());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    alert(`¡Color ${color} copiado!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <div
        onClick={handleClick}
        style={{
          width: "200px",
          height: "200px",
          margin: "0 auto",
          borderRadius: "16px",
          backgroundColor: color,
          transition: "background-color 0.5s ease",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
        }}
      />
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", fontWeight: "bold" }}>
        {color}
      </p>
      <button
        onClick={handleCopy}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          border: "none",
          background: "#333",
          color: "white",
          cursor: "pointer"
        }}
      >
        Copiar color
      </button>
    </div>
  );
}
