import { useEffect, useState } from "react"
import { useContext } from "react"
import AuthContext from "../../../contexts/authContext"
import { Link } from "react-router-dom"

import * as hrsService from '../../../services/hrsService'

const HighRunesList = () => {
    const[hrs, setHrs] = useState([])
    const { email, userId } = useContext(AuthContext);

    useEffect(()=>{
        hrsService.getAll()
            .then(result => setHrs(result))
            .catch(err => console.log(err))
    }, [])

    

    return(
        <div className='runes-table'>
      {/* <h2>Rune Table</h2> */}
      <table>
        <thead>
          <tr>
            <th>High Rune</th>
            <th>Character</th>
            <th>Area</th>
            
          </tr>
        </thead>
        <tbody>
          {hrs.map(hr => (
            <tr key={hr._id}>
              <td className='runes-table-cell'>{hr.rune}</td>
              <td><strong className='strong-cell'>{hr.character}</strong></td>
              <td>{hr.zone}</td>
              {userId === hr._ownerId && (
                    <div className="buttons">
                        <Link to={'/'} >Details</Link>
                        
                    </div>
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default HighRunesList