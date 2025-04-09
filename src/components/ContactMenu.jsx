import { useState } from "react";
import { Html } from "@react-three/drei";
import { Menu, X } from "lucide-react";

function ContactMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Html position={[10, 3, 0]} center>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            color: isHovered ? "#ff00ff" : "#00ffcc",
            fontSize: "1.5rem",
            fontFamily: "'Orbitron', sans-serif",
            transition: "color 0.3s ease",
          }}
        >
        </span>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isHovered ? "#ff00ff" : "#00ffcc",
            fontSize: "2rem",
            transition: "color 0.3s, transform 0.2s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "0",
            minWidth:"27.44vh",
            minHeight:"1vh",
            background: "rgba(30, 30, 30, 0.95)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0, 255, 204, 0.7)",
            backdropFilter: "blur(10px)",
            textAlign: "right",
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          <a href="https://github.com/AxelGumiit" target="_blank" style={linkStyle}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/axel-gumiit-2992501a4/" target="_blank" style={linkStyle}>
            LinkedIn
          </a>
          <a href="mailto:axelgumiit1@gmail.com" style={linkStyle}>
            Email: axelgumiit1@gmail.com
          </a>
          <a href="tel:0774011143" style={linkStyle}>
            Phone: 07740111143
          </a>
        </div>
      )}
    </Html>
  );
}

// Contact Menu Link Style
const linkStyle = {
  display: "block",
  color: "#00ffcc",
  textDecoration: "none",
  fontSize: "1.2rem",
  marginBottom: "10px",
  transition: "color 0.3s ease",
};

export default ContactMenu;
