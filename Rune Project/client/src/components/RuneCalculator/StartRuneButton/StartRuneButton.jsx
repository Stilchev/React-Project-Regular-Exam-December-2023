const StartRuneButton = ({number,name,imageUrl,startRuneHandler}) => {
    
    const onClickStartRune = () => {
        startRuneHandler(number,name)
    }
    return(
        <>
        
            <div className='calc-button' style={{ display: 'inline-block',}}>
                <button className='calc-button' onClick={onClickStartRune}>
                    < div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={imageUrl} alt={name} />
                        <span>{name}</span>
                    </div>

                </button>
            </div>
            </>
        
    )
}

export default StartRuneButton;