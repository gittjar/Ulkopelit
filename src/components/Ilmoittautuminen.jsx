import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Ilmoittautuminen() {
  const [result, setResult] = useState("");
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Lähetän lomakkeen...");
    const formData = new FormData(event.target);

    formData.append("access_key", "9712f4a5-f8cb-4950-845a-69f06ccbceb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Lomake toimitettu onnistuneesti!");
      setPlayerName(formData.get("name"));
      event.target.reset();
      setTimeout(() => {
        navigate('/kiitos', { state: { playerName: formData.get("name") } });
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form-container">
      <section className="contactform-header-image">
        <img src="/images/kuva008.jpg" alt="Header" />
        <h1>Ilmoittautuminen suljettu ... avataan 2026</h1>
      </section>
      <form onSubmit={onSubmit}>
        <label>
          Nimesi <span className="required">*</span>
          <input type="text" name="name" placeholder="Nimesi tai nimimerkki" required disabled/>
        </label>
        <label>
          Mailan kätisyys<br></br>
          <select name="handles" required disabled>
            <option value="">--Valitse--</option>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </label>
        <label>
          Suosikkijoukkue
          <input type="text" name="team" placeholder="Suosikkijoukkue" disabled/>
        </label>
        <label>
          Sähköposti <span className="required">*</span>
          <input type="email" name="email" placeholder="Sähköposti" required disabled/>
        </label>
        <label>
          Valinnaiset lisätiedot
          <textarea name="message" placeholder="Valinnaiset lisätiedot" disabled></textarea>
        </label>
        <button type="submit" disabled>Lähetä</button>
      </form>
      <div className="form-overlay">
        <span>Ilmoittautuminen suljettu</span>
      </div>
      <span>{result}</span>
      <p>Tietojasi ei luovuteta eteenpäin ja pelien (--.--.2026) jälkeen ne tuhotaan.</p>
    </div>
  );
}

export default Ilmoittautuminen;