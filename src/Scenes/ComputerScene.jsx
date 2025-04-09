import { Experience } from "./MainScene";
import { useState, useEffect } from "react";
import { Environment, Html, PerspectiveCamera } from "@react-three/drei";
import ContactMenu from "../components/ContactMenu";
import homeIcon from "../assets/home.png"


export const ComputerScene = () => {
  const [scene, setScene] = useState("computerScene");

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const maxMessages = 5;

  // Load message count from localStorage
  const [messageCount, setMessageCount] = useState(() => {
    return Number(localStorage.getItem("messageCount")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("messageCount", messageCount);
  }, [messageCount]);

  const handleReturnHome = () => {
    setScene("main");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (messageCount >= maxMessages) {
      setStatus("limitReached");
      return;
    }

    const response = await fetch("https://formspree.io/f/mjkyabyo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setMessageCount((prevCount) => prevCount + 1);
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      {scene === "computerScene" && (
        <>
          <group>
            <PerspectiveCamera makeDefault position={[0, 3, 5]} fov={100}/>
            <Environment preset="sunset" />
            <ambientLight intensity={1} />
            <group position={[0, 5, 0]}>
              <ContactMenu />
            </group>
            <Html position={[-18, 12, -3]} style={{ position: "relative", top: "20px", left: "20px", zIndex: 1000 }}>
              <img
                src={homeIcon}
                alt="Return to Home"
                style={{
                  width: "10.97vh",
                  height: "10.97vh",
                  cursor: "pointer",
                  backgroundColor: "white",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
                  border: "2px solid rgba(0, 255, 255, 0.8)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
                onClick={handleReturnHome}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow = "0 0 25px rgba(0, 255, 255, 1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.6)";
                }}
              />
            </Html>

            <Html position={[0, 2, 0]} center>
              <div
                style={{
                  width: "100vh",
                  height: "65.86vh",
                  background: "linear-gradient(135deg, #1c1c1c, #0e0f11)",
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
                  overflow: "auto",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: '"Orbitron", sans-serif',
                }}
              >
                <h2
                  style={{
                    fontSize: "32px",
                    textAlign: "center",
                    marginBottom: "30px",
                    color: "#00F2FF",
                    textShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                  }}
                >
                  Contact Us
                </h2>

                <form onSubmit={handleSubmit} style={{ width: "80%", display: "flex", flexDirection: "column", gap: "15px" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={textareaStyle}
                  />
                  <button type="submit" style={buttonStyle} disabled={messageCount >= maxMessages}>
                    {messageCount >= maxMessages ? "Limit Reached" : "Send"}
                  </button>
                </form>

                {status === "success" && <p style={{ color: "#00F2FF", marginTop: "10px" }}>Message sent successfully!</p>}
                {status === "error" && <p style={{ color: "red", marginTop: "10px" }}>Failed to send message. Try again.</p>}
                {status === "limitReached" && <p style={{ color: "orange", marginTop: "10px" }}>Message limit reached. Please try later.</p>}

                <p style={{ color: "#00F2FF", marginTop: "15px" }}>
                  Messages Left: {maxMessages - messageCount}
                </p>
              </div>
            </Html>
          </group>
        </>
      )}

      {scene === "main" && <Experience />}
  
    </>
  );
};

// Input Styling
const inputStyle = {
  padding: "12px",
  borderRadius: "12px",
  border: "2px solid #00F2FF",
  backgroundColor: "#1c1c1c",
  color: "#fff",
  fontSize: "18px",
  boxShadow: "0 0 5px rgba(0, 255, 255, 0.5)",
  transition: "border 0.3s, box-shadow 0.3s",
};


const textareaStyle = {
  ...inputStyle,
  height: "13.17vh",
};


const buttonStyle = {
  padding: "12px 30px",
  backgroundColor: "#00F2FF",
  border: "none",
  color: "black",
  fontSize: "18px",
  borderRadius: "12px",
  cursor: "pointer",
  boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
  transition: "background-color 0.3s, transform 0.3s",
};

export default ComputerScene;
