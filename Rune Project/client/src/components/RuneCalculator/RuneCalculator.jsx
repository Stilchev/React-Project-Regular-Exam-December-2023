import { useState, useEffect } from 'react';
import calculateRunesNeeded from '../../utils/calculator';
import './RuneCalculator.css'
import RuneButton from './RuneButton/RuneButton';
import StartRuneButton from './StartRuneButton/StartRuneButton';
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

        // const result = calculateRunesNeeded(finalArray)
        // setResultHandler(result)
        setFinalArray(finalArray)
        // // console.log(finalArray);
        // // console.log(result);
        // console.log(finalResult);
        let totalRunesNeeded = 1;
        for (let i = finalArray.length - 1; i >= 0; i--) {
            
            totalRunesNeeded *= finalArray[i].count;
            // finalArray[i].gems = totalRunesNeeded
            //   runesArray[i].dropped = totalRunesNeeded;
            
        }
        // console.log(totalRunesNeeded);
        setFinalResult(totalRunesNeeded)
        setTargetRune(0)
        // return totalRunesNeeded;
        setResult((state)=>({...state,startRuneName:name}))
        setResult((state)=>({...state,result:totalRunesNeeded}))

    }
    // console.log(finalArray[0]);
    // console.log(finalArray[finalArray.length-1]);
    // const clculatorHandler = () => {
    //     calculateRunesNeeded()
    // }
    // const one = finalArray[0];
    // const two = finalArray[finalArray.length-1];
    
    // console.log(one);
    // console.log(two);
    console.log(result);
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
            {/* {startName &&<ResultComponent 
                startName={one.name}
                targetName={two.name}
                totalRunesNeeded={totalRunesNeeded}
                />} */}
                
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
                {/* <p className='calc-result'>Target:{result.targetRuneName}</p>
                <p className='calc-result'>Start:{result.startRuneName}</p>
                <p className='calc-result'>Result{result.result}</p> */}
                </>
                }
                

            <div className="table-container">
                <table className="calculator-gem-table">
                    <thead>
                        <tr>
                            <th colSpan={12}>Required Gems</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="calculator-gem-table">
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\chipped_topaz.png" alt="Chipped Topaz" /><span>Chipped Topaz</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\chipped_amethyst.png" alt="Chipped Amethyst" /><span>Chipped Amethyst</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\chipped_saphire.png" alt="Chipped Sapphire" /><span>Chipped Sapphire</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\chipped_ruby.png" alt="Chipped Ruby" /><span>Chipped Ruby</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\chipped_emerald.png" alt="Chipped Emerald" /><span>Chipped Emerald</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\chipped_diamond.png" alt="Chipped Diamond" /><span>Chipped Diamond</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawed_topaz.png" alt="Flawed Topaz" /><span>Flawed Topaz</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawed_amethyst.png" alt="Flawed Amethyst" /><span>Flawed Amethyst</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawed_saphire.png" alt="Flawed Sapphire" /><span>Flawed Sapphire</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawed_ruby.png" alt="Flawed Ruby" /><span>Flawed Ruby</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawed_emerald.png" alt="Flawed Emerald" /><span>Flawed Emerald</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawed_diamond.png" alt="Flawed Diamond" /><span>Flawed Diamond</span></td>


                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                        <tr className="calculator-gem-table">
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\topaz.png" alt="Topaz" /><span>Topaz</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\amethyst.png" alt="Amethyst" /><span>Amethyst</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\saphire.png" alt="Sapphire" /><span>Sapphire</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\ruby.png" alt="Ruby" /><span>Ruby</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\emerald.png" alt="Emerald" /><span>Emerald</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\diamond.png" alt="Diamond" /><span>Diamond</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawless_topaz.png" alt="Flawless Topaz" /><span>Flawless Topaz</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawless_amethyst.png" alt="Flawless Amethyst" /><span>Flawless Amethyst</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawless_saphire.png" alt="Flawless Sapphire" /><span>Flawless Sapphire</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawless_ruby.png" alt="Flawless Ruby" /><span>Flawless Ruby</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="\images\gemImages\flawless_emerald.png" alt="Flawless Emerald" /><span>Flawless Emerald</span></td>
                            <td className="calculator-gem-table"> <img className='gem' src="" /><span>Total Gems</span></td>


                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default RuneCalculator;