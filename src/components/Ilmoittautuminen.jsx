import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Ilmoittautuminen() {
  const [result, setResult] = useState("");
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
      event.target.reset();
      setTimeout(() => {
        navigate('/kiitos');
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form-container">
      <Link to="/">
        <button>Etusivu</button>
      </Link>
      <h2>Ilmoittautuminen</h2>
      <p>Ilmoittautumislomake 22.2.2025 peleihin</p>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Nimesi" required />
        <input type="text" name="handles" placeholder="Mailan kätisyys" />
        <input type="text" name="team" placeholder="Suosikkijoukkue" />
        <input type="email" name="email" placeholder="Sähköposti" required />
        <textarea name="message" placeholder="Valinnaiset lisätiedot"></textarea>
        <button type="submit">Lähetä</button>
      </form>
      <span>{result}</span>
    </div>
  );
}

export default Ilmoittautuminen;