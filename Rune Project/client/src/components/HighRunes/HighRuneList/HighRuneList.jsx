import { useEffect, useState } from "react"
import { useContext } from "react"
import AuthContext from "../../../contexts/authContext"
import { Link } from "react-router-dom"

import * as hrsService from '../../../services/hrsService'

const HighRunesList = () => {
    const [hrs, setHrs] = useState([])
    const { email, userId, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        hrsService.getAll()
            .then(result => setHrs(result))
            .catch(err => console.log(err))
    }, [])

    

    return (
        <div className='runes-table'>
            {/* <h2>Rune Table</h2> */}
            <table>
                <thead>
                    <tr>
                        <th>High Rune</th>
                        <th>Character</th>
                        <th>Area</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {hrs.map(hr => (
                       
                            <tr key={hr._id}>
                                <td className='runes-table-cell'>{hr.rune}</td>
                                <td><strong className='strong-cell'>{hr.character}</strong></td>
                                <td>{hr.zone}</td>

                                <td>
                                    <Link to={`/hrs/${hr._id}`}>

                                        <button className="btn-details" type="button">Details</button>
                                    </Link>
                                </td>

                            </tr>
                            

                       
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HighRunesList