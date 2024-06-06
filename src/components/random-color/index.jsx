import { useState } from 'react';

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const generateColor = () => {
    if (typeOfColor === 'hex') {
      setColor(getRandomHexColor());
    } else {
      setColor(getRandomRgbColor());
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ marginBottom: '20px', color: '#FFF' }}>{color}</div>
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={generateColor}>Generate Random Color</button>
    </div>
  );
}
