const Project = (projectArr) => {
    const newArr = Object.entries(projectArr)
    return(
        <>
        <h1>Project</h1>
        {newArr.map(rune=> rune.map(r=>{
            <div>
                <img src={r.imageUrl} alt="" />
                <p></p>
            </div>
        }))}
        </>
    )
}

export default Project;