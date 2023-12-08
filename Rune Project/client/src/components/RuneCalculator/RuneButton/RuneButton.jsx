const RuneButton = ({number,name,imageUrl,targetRuneHandler,startRuneHandler}) => {
    const onClickTargetRune = () => {
        targetRuneHandler(number, name)
    }
    
    return(
        <>
        
            <div className='calc-button' style={{ display: 'inline-block',}}>
                <button className='calc-button' onClick={onClickTargetRune}>
                    < div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={imageUrl} alt={name} />
                        <span>{name}</span>
                    </div>

                </button>
            </div>
            </>
        
    )
}

export default RuneButton;