import React, { useState } from 'react';

const ColorChangingButtons = () => {
  const [buttonColor, setButtonColor] = useState('#3498db'); // Default color is blue

  const colorPalette = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6', '#1abc9c'];

  const handleColorChange = (color) => {
    setButtonColor(color); // Change the color of all buttons to the selected color
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h3>Select a Color:</h3>
      <div style={{ marginBottom: '20px' }}>
        {colorPalette.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            {color}
          </button>
        ))}
      </div>

      <div>
        <button
          style={{
            backgroundColor: buttonColor,
            color: '#fff',
            padding: '10px 20px',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Button 1
        </button>

        <button
          style={{
            backgroundColor: buttonColor,
            color: '#fff',
            padding: '10px 20px',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Button 2
        </button>

        <button
          style={{
            backgroundColor: buttonColor,
            color: '#fff',
            padding: '10px 20px',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Button 3
        </button>
      </div>
    </div>
  );
};

export default ColorChangingButtons;
