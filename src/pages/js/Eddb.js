import React, { useState } from 'react';
import axios from 'axios';

function Eddb() {
  const [name, setName] = useState('');

  const handleDelete = () => {
    const url = 'http://localhost/delete.php';

    let fData = new FormData();
    fData.append('name', name);

    axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error => alert(error));
  };

  return (
    <div>
      <h2>Delete Record</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={handleDelete}>Delete Record</button>
      </div>
    </div>
  );
}

export default Eddb;
