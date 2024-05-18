import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("light-mode");

  const handleMode = () => {
    const newMode = mode === "light-mode" ? "dark-mode" : "light-mode";
    setMode(newMode);
    document.body.classList.replace(mode, newMode);
    const textArea1 = document.getElementById("code");
    textArea1.classList.replace(mode, newMode);
    const textArea2 = document.getElementById("output");
    textArea2.classList.replace(mode, newMode);
    localStorage.setItem("mode", newMode);
  };

  const getOutput = async () => {
    const url = "http://localhost:4000/run";
    const payload = {
      language,
      code,
    };
    try {
      const response = await axios.post(url, payload);
      // const data = response.json();
      setOutput(response.data);
    } catch (error) {
      setOutput(error?.response?.data?.error || "Syntax Error");
    }
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light-mode";
    setMode(savedMode);
    document.body.classList.add(savedMode);
    document.getElementById("code").classList.add(savedMode);
    document.getElementById("output").classList.add(savedMode);
  }, []);

  return (
    <div>
      <div className="header">
        <h1>Online Code Compiler</h1>
        <span onClick={handleMode} className={mode}>
          {mode === "dark-mode" ? <MdOutlineLightMode /> : <MdDarkMode />}
        </span>
      </div>

      <div className="container">
        <div className="codeEditor">
          <div className="codeEditor__heading">
            <span>Code Editor</span>
            <span>
              <select
                name="language"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="cpp">c++</option>
                <option value="rs">rust</option>
                <option value="sol">solidity</option>
                <option value="mo">motoko</option>
              </select>
            </span>
            <button onClick={getOutput}>Run</button>
          </div>
          <textarea
            className="textArea"
            name="code"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="codeOutput">
          <p>Output</p>
          <textarea
            className="textArea"
            name="output"
            id="output"
            value={output}
            readOnly
            // onChange={(e) => setOutput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
