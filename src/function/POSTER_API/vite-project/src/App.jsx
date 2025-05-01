import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [inp, setInp] = useState('');
  const [value, setValue] = useState('Toy Story');

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${value}&apikey=6ba12f37`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [value]);

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  const handleClick = () => {
    setValue(inp);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Movies</h2>
      <input 
        type="text" 
        value={inp} 
        onChange={handleChange} 
        placeholder="Enter movie name"
      />
      <button onClick={handleClick}>Search</button>

      {data && data.Response !== "False" ? (
  <div>
    <h3>{data.Title}</h3>
    <img src={data.Poster} alt={data.Title} style={{ width: '200px' }} />
  </div>
) : (
  <p></p>
)}


    </div>
  );
};

export default App;
