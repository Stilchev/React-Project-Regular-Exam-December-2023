const diablo2Runes = {
    el: { number: 1, name: 'El', reqLevel: 11 },
    eld: { number: 2, name: 'Eld', reqLevel: 11 },
    tir: { number: 3, name: 'Tir', reqLevel: 13 },
    nef: { number: 4, name: 'Nef', reqLevel: 13 },
    eth: { number: 5, name: 'Eth', reqLevel: 15 },
    ith: { number: 6, name: 'Ith', reqLevel: 15 },
    tal: { number: 7, name: 'Tal', reqLevel: 17 },
    ral: { number: 8, name: 'Ral', reqLevel: 19 },
    ort: { number: 9, name: 'Ort', reqLevel: 21 },
    thul: { number: 10, name: 'Thul', reqLevel: 23 },
    amn: { number: 11, name: 'Amn', reqLevel: 25 },
    sol: { number: 12, name: 'Sol', reqLevel: 27 },
    shael: { number: 13, name: 'Shael', reqLevel: 29 },
    dol: { number: 14, name: 'Dol', reqLevel: 31 },
    hel: { number: 15, name: 'Hel', reqLevel: 0 }, // Hel has no level requirement
    io: { number: 16, name: 'Io', reqLevel: 35 },
    lum: { number: 17, name: 'Lum', reqLevel: 37 },
    ko: { number: 18, name: 'Ko', reqLevel: 39 },
    fal: { number: 19, name: 'Fal', reqLevel: 41 },
    lem: { number: 20, name: 'Lem', reqLevel: 43 },
    pul: { number: 21, name: 'Pul', reqLevel: 45 },
    um: { number: 22, name: 'Um', reqLevel: 47 },
    mal: { number: 23, name: 'Mal', reqLevel: 49 },
    ist: { number: 24, name: 'Ist', reqLevel: 51 },
    gul: { number: 25, name: 'Gul', reqLevel: 53 },
    vex: { number: 26, name: 'Vex', reqLevel: 55 },
    ohm: { number: 27, name: 'Ohm', reqLevel: 57 },
    lo: { number: 28, name: 'Lo', reqLevel: 59 },
    sur: { number: 29, name: 'Sur', reqLevel: 61 },
    ber: { number: 30, name: 'Ber', reqLevel: 63 },
    jah: { number: 31, name: 'Jah', reqLevel: 65 },
    cham: { number: 32, name: 'Cham', reqLevel: 67 },
    zod: { number: 33, name: 'Zod', reqLevel: 69 },
  };


  import React, { useState, useEffect } from 'react';

const RuneTable = () => {
  const [runes, setRunes] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint for the rune data
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => setRunes(data))
      .catch(error => console.error('Error fetching rune data:', error));
  }, []);

  return (
    <div>
      <h2>Rune Table</h2>
      <table>
        <thead>
          <tr>
            <th>Rune Name</th>
            <th>Number</th>
            <th>Level Requirement</th>
          </tr>
        </thead>
        <tbody>
          {runes.map(rune => (
            <tr key={rune.number}>
              <td>{rune.name}</td>
              <td>{rune.number}</td>
              <td>{rune.reqLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RuneTable;
