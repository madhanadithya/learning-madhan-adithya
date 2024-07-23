import React, { useState } from 'react';

function NameGenderPrediction() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  const predictGender = () => {
    if (name === '') {
      alert('Please enter a name.');
      return;
    }

    const apiUrl = `https://api.genderize.io/?name=${name}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('response not ok');
        }
        return response.json();
      })
      .then(data => {
        setResult(data);
      })
      .catch(error => {
        console.error('Error', error);
        alert('Error');
      });
  };

  return (
    <div className="outter">
      <h1>PREDICT UR GENDER</h1>
      <label htmlFor="nameInput">Enter a name:</label>
      <input
        type="text"
        id="nameInput"
        placeholder="Enter a name..."
        value={name}
        onChange={(e) => setName(e.target.value.trim())}
      />
      <button onClick={predictGender}>Predict</button>

      {result && (
        <div id="result">
          <h2>Result</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Gender:</strong> {result.gender}</p>
          <p><strong>Probability:</strong> {(result.probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default NameGenderPrediction;
