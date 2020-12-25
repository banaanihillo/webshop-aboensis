import React from "react"

const Search = (props) => {
    const {itemsForSale, setFilteredItems} = props

    const handleSearch = (event) => {
        const filteredItems = itemsForSale.filter(item =>
            item.name.toLowerCase().includes(
                event.target.value.toLowerCase()
            )
        )
        filteredItems.sort((item1, item2) => {
            return (Date.parse(item2.date) - Date.parse(item1.date))
        })
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
