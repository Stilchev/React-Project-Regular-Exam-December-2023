import { useNavigate, useParams } from 'react-router-dom';
import * as hrsService from '../../../services/hrsService'
import { useEffect, useState } from 'react';
import useForm from '../../../hooks/useForm';

const HighRuneEdit = () => {
    const navigate = useNavigate()
    const hrId = useParams()
    const [hr, setHr] = useState({
        rune: '',
        zone: '',
        character: '',
    })

    useEffect(()=>{
        hrsService.getOne(hrId)
            .then(result=>{setHr(result)})
    }, [hrId]);

    const editGameSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await hrsService.edit(hrId, values);

            navigate('/hrs');
        } catch (err) {
            
            console.log(err);
        }
    }

    const onChange = (e) => {
        setHr(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

        
    };
    // const { values, onChange, onSubmit } = useForm(editGameSubmitHandler, hr);
    return(
        <div className="create-hrs">
      <form className='create-hrs-form' onSubmit={editGameSubmitHandler}>
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
            value={hr.zone}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Character:</label>
          <input
            type="text"
            name="character"
            placeholder="Enter character"
            value={hr.character}
            onChange={onChange}
          />
        </div>
        <div>
          <button className='btn-edit-hrs' type="submit">Edit</button>
          
        </div>
      </form>
    </div>
    )
}

export default HighRuneEdit;