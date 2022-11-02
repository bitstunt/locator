function Index (props) {
    let options = ['hello', 'hello again', 'once more']
    let filterOption = (options, query) => {
        if(!query)
        return [];
        
        query = query.toLowerCase()
        return options.filter((e) => {
            return e.includes(query)
        })
    }
    let result = filterOption(options, props.query);
    let option = result.map((e,i) => {return (
        <li key={i}>{e}</li>
    )})
    return(
        <div className="iContainer">
            {option}
        </div>
    );
}

export default Index;