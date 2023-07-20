import "../../styles/filters.css"
const Filters = ({ setPriceRange, priceRange, searchQuery, setSearchQuery, setCategory, clearFilters, category }) => {

  const handleInput = (e) => {
    setPriceRange(e.target.value);
  }
  const handleClick = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className='filters'>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search Input */}
          <div className='form-control'>
            <input type='text' name='text' placeholder='search' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </form>
      </div>
      {/* End Of Search Input */}

      {/* Categories */}
      <div className='form-control'>
        <h5>category</h5>
        <div>
          <button type='button' name='category' value="all" onClick={handleClick} className={`${category === "all" ? 'active' : null}`}>all</button>
          <button type='button' name='category' value="apple" onClick={handleClick} className={`${category === "apple" ? 'active' : null}`}>apple</button>
          <button type='button' name='category' value="samsung" onClick={handleClick} className={`${category === "samsung" ? 'active' : null}`}>samsung</button>
        </div>
      </div>
      {/* End Of Categories */}

      {/* Price */}
      <div className='form-control'>
        <h5>price</h5>
        <p className='price'>{priceRange} </p>
        <input type='range' name='price' onChange={handleInput} min="0" max="5000" />
      </div>
      {/* End Of Price */}


      <button type='button' className='clear-btn' onClick={clearFilters}>
        clear filters
      </button>
    </div>
  );
};




export default Filters;

