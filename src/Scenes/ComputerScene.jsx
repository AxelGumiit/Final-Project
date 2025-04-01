import { Experience } from "./MainScene";
import { useState } from "react";
import { Environment, Html, PerspectiveCamera } from "@react-three/drei";
import ContactMenu from "../components/ContactMenu";

export const ComputerScene = () => {
  const [scene, setScene] = useState("computerScene");
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [messageCount, setMessageCount] = useState(0); // Track messages sent
  const maxMessages = 5; // Set the message limit

  const handleReturnHome = () => {
    setScene("main");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if message limit is reached
    if (messageCount >= maxMessages) {
      setStatus("limitReached");
      return;
    }

    const response = await fetch("https://formspree.io/f/mjkyabyo ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Clear form
      setMessageCount((prevCount) => prevCount + 1); // Increment message count
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      {scene === "computerScene" && (
        <>
          <group>
            <PerspectiveCamera makeDefault position={[0, 3, 5]} fov={100} near={0.1} far={1000} />
            <Environment preset="sunset" />
            <ambientLight intensity={1} />
            <group position={[0, 5, 0]}>
              <ContactMenu />
            </group>

            {/* Home Button */}
            <Html position={[-19, 12, -3]} style={{ position: "fixed", top: "20px", left: "20px", zIndex: 1000 }}>
              <img
                src="/images/home.png"
                alt="Return to Home"
                style={{
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
                onClick={handleReturnHome}
              />
            </Html>

            {/* Contact Form */}
            <Html position={[0, 2, 0]} center>
              <div
                style={{
                  width: "100vh",
                  height: "600px",
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

                {/* Form */}
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

                {/* Form Submission Status Messages */}
                {status === "success" && <p style={{ color: "#00F2FF", marginTop: "10px" }}>Message sent successfully!</p>}
                {status === "error" && <p style={{ color: "red", marginTop: "10px" }}>Failed to send message. Try again.</p>}
                {status === "limitReached" && <p style={{ color: "orange", marginTop: "10px" }}>Message limit reached. Please try later.</p>}

                {/* Display remaining messages */}
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

// Textarea Styling
const textareaStyle = {
  ...inputStyle,
  height: "120px",
};

// Button Styling
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
