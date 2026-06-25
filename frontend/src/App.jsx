import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/message")
      .then((response) => {
        setMessage(response.data.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Frontend</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;