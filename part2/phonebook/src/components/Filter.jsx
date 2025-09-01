const Filter = ({filterName, onFilterChange}) => {
    return(
        <p>
            Filter shown with 
            <input value={filterName} onChange={onFilterChange}/>
        </p>
    )
}

export default Filter