import { useState, useEffect } from 'react';
// import calculateRunesNeeded from '../../utils/calculator';
import './RuneCalculator.css'
import RuneButton from './RuneButton/RuneButton';
import StartRuneButton from './StartRuneButton/StartRuneButton';
import GemsTable from './GemsTable/GemsTable';
// import ResultComponent from './ResultComponent/ResultComponent';


const RuneCalculator = () => {
    const [runes, setRunes] = useState([]);
    const [filteredRunes, setFilteredRunes] = useState([])
    const [targetRune, setTargetRune] = useState(0)
    const [startRune, setStartRune] = useState(0)
    const [finalArray, setFinalArray] = useState([])
    const [finalResult, setFinalResult] = useState()
    const [result, setResult] = useState({targetRuneName:"", startRuneName:"", result:0})

    useEffect(() => {

        fetch('http://localhost:3030/data/runes')
            .then(response => response.json())
            .then(data => setRunes(data))


            .catch(error => console.error('Error fetching rune data:', error));
    }, []);

    const targetRuneHandler = (runeNumber,name) => {
        
        const result = runes.slice(0, runeNumber)

        setTargetRune(runeNumber)
        
        setFilteredRunes(result)
        setResult((state)=>({...state,targetRuneName:name}))
    }

    

    const startRuneHandler = (startRuneNumber,name) => {
        
        const finalArray = filteredRunes.slice(startRuneNumber - 1)
        setStartRune(startRuneNumber)

        setFinalArray(finalArray)
        
        let totalRunesNeeded = 1;
        for (let i = finalArray.length - 2; i >= 0; i--) {
            
            totalRunesNeeded *= finalArray[i].count;
          
        }
        setFinalResult(totalRunesNeeded)
        setTargetRune(0)
        setResult((state)=>({...state,startRuneName:name}))
        setResult((state)=>({...state,result:totalRunesNeeded}))

    }
    
    return (
        <>
            {!targetRune &&
                <div className='calc-container'>
                    <h2>Select Target Rune:</h2>
                    {runes.map(rune =>
                        <RuneButton
                            key={rune.number}
                            number={rune.number}
                            name={rune.name}
                            imageUrl={rune.imageUrl}
                            targetRuneHandler={targetRuneHandler}
                        />
                    )}

                </div>}
            {targetRune &&
                <div className='calc-container'>
                    <h2>Select Start Rune:</h2>
                    {filteredRunes.map(rune =>
                        <StartRuneButton
                            key={rune.number}
                            number={rune.number}
                            name={rune.name}
                            imageUrl={rune.imageUrl}
                            startRuneHandler={startRuneHandler}

                        />
                    )}

                </div>
            }
            
                {result.result &&
                <>
                <table className='calc-result'>
                    <thead>
                        <tr>
                            <th>Target Rune</th>
                            <th>Start Rune</th>
                            <th>How many {result.startRuneName} for 1 {result.targetRuneName}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.targetRuneName}</td>
                            <td>{result.startRuneName}</td>
                            <td>{result.result}</td>
                        </tr>
                    </tbody>
                </table>
                </>
                }
            <GemsTable />
        </>

    )
}

export default RuneCalculator;