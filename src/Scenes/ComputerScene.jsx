import { Experience } from "./MainScene";
import { useState } from 'react';
import { Environment, Html, OrbitControls } from '@react-three/drei';

export const ComputerScene = () => {
  const [scene, setScene] = useState("computerScene");

  const handleReturnHome = () => {
    setScene("main");
  };

  return (
    <>
      {scene === "computerScene" && (
        <>
          <group>
            <Environment preset="sunset" />
            <ambientLight intensity={1} />

            <Html position={[-5, 3, -5]} center>
              <img
                src="/images/home.png"
                alt="Return to Home"
                style={{
                  width: '100px',
                  height: '100px',
                  cursor: 'pointer',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                }}
                onClick={handleReturnHome}
              />
            </Html>

            <Html position={[0, 0, 0]} center>
              <div
                style={{
                  width: '100vh',
                  height: '600px',
                  background: 'linear-gradient(135deg, #1c1c1c, #0e0f11)',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
                  overflow: 'auto',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: '"Orbitron", sans-serif',
                }}
              >
                <h2
                  style={{
                    fontSize: '32px',
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: '#00F2FF',
                    textShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  Contact Us
                </h2>

                {/* Contact Form */}
                <form
                  style={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: '2px solid #00F2FF',
                      backgroundColor: '#1c1c1c',
                      color: '#fff',
                      fontSize: '18px',
                      boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
                      transition: 'border 0.3s, box-shadow 0.3s',
                    }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.8)'}
                    onBlur={(e) => e.target.style.boxShadow = '0 0 5px rgba(0, 255, 255, 0.5)'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: '2px solid #00F2FF',
                      backgroundColor: '#1c1c1c',
                      color: '#fff',
                      fontSize: '18px',
                      boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
                      transition: 'border 0.3s, box-shadow 0.3s',
                    }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(68, 0, 255, 0.8)'}
                    onBlur={(e) => e.target.style.boxShadow = '0 0 5px rgba(0, 255, 255, 0.5)'}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: '2px solid #00F2FF',
                      backgroundColor: '#1c1c1c',
                      color: '#fff',
                      fontSize: '18px',
                      height: '120px',
                      boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
                      transition: 'border 0.3s, box-shadow 0.3s',
                    }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(68, 0, 255, 0.8)'}
                    onBlur={(e) => e.target.style.boxShadow = '0 0 5px rgba(0, 255, 255, 0.5)'}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '12px 30px',
                      backgroundColor: '#00F2FF',
                      border: 'none',
                      color: 'black',
                      fontSize: '18px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      transition: 'background-color 0.3s, transform 0.3s',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Send
                  </button>
                </form>

                {/* CV Download Button */}
                <div style={{ marginTop: '30px' }}>
                  <a 
                    href="/path/to/cv.pdf" 
                    download 
                    style={{
                      padding: '12px 30px',
                      backgroundColor: '#00F2FF',
                      color: 'black',
                      fontSize: '18px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      transition: 'background-color 0.3s, transform 0.3s',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Download CV
                  </a>
                </div>

                {/* Contact Methods */}
                <div style={{ marginTop: '30px' }}>
                  <h3
                    style={{
                      color: '#00F2FF',
                      marginBottom: '20px',
                      fontSize: '24px',
                      textShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
                    }}
                  >
                    Other Ways to Contact:
                  </h3>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', textAlign: 'center' }}>
                    <li>
                      <a 
                        href="mailto:owner@example.com" 
                        style={{ color: '#00F2FF', textDecoration: 'none', fontSize: '18px' }}
                      >
                        Email: axelgumiit1@gmail.com
                      </a>
                    </li>
                    <li>
                      <a 
                        href="tel:07740111143" 
                        style={{ color: '#00F2FF', textDecoration: 'none', fontSize: '18px' }}
                      >
                        Phone: 07740111143
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/axel-gumiit-2992501a4/" 
                        target="_blank" 
                        style={{ color: '#00F2FF', textDecoration: 'none', fontSize: '18px' }}
                      >
                        LinkedIn: linkedin.com/in/axel-gumiit
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://github.com/AxelGumiit" 
                        target="_blank" 
                        style={{ color: '#00F2FF', textDecoration: 'none', fontSize: '18px' }}
                      >
                        Github: Axel Gumiit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Html>
          </group>
        </>
      )}

      {scene === "main" && <Experience />}
    </>
  );
};
