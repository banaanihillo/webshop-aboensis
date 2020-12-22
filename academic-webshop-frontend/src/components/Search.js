import React from "react"

const Search = (props) => {
    const {itemsForSale, setFilteredItems} = props

    const handleSearch = (event) => {
        const filteredItems = itemsForSale.filter(item =>
            item.name.toLowerCase().includes(
                event.target.value.toLowerCase()
            )
        )
        setFilteredItems(filteredItems)
    }

    return (
        <span className = "App-header-search-bar">
            Search: 
            <input onChange = {handleSearch} />
        </span>
    )
}

export default Search
