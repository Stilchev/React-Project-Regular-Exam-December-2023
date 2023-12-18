import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as hrsService from '../../../services/hrsService'

import './CreateHighRune.css'

const CreateHighRune = () => {
  const navigate = useNavigate();
    
    const createHrsSubmitHandler = async (e) => {
        e.preventDefault();

        const hrsData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await hrsService.create(hrsData);

            navigate('/hrs/list');
        } catch (err) {
            
            console.log(err);
        }
    }

  return (
    <div className="create-hrs">
      <form className='create-hrs-form' onSubmit={createHrsSubmitHandler}>
        <div>
          <label>Choose Rune:</label>
          <select name="rune" >
            {['Vex', 'Ohm', 'Lo', 'Sur', 'Ber', 'Jah', 'Cham', 'Zod'].map((rune) => (
              <option key={rune}>
                {rune} 
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Zone:</label>
          <input
            type="text"
            name="zone"
            placeholder="Enter zone"
          />
        </div>
        <div>
          <label>Character:</label>
          <input
            type="text"
            name="character"
            placeholder="Enter character"
          />
        </div>
        <div>
          <button className='btn-create-hrs' type="submit">Submit</button>
          
        </div>
      </form>
    </div>
  );
};

export default CreateHighRune;
