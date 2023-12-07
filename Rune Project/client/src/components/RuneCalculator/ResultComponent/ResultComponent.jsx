// import calculateRunesNeeded from "../../../utils/calculator";

const ResultComponent = ({startName, targetName, totalRunesNeeded}) => {
    // const result = calculateRunesNeeded(finalArray)
    return(
        <div>
            <p>Start Rune{startName}:{totalRunesNeeded}</p>
            <p>Target Rune: {targetName}</p>
        </div>
    )
}

export default ResultComponent;