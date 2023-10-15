import React from 'react'

const SearchPage = () => {
  return (
    <div>
      <form>
        <label>
          <input type="text" name="searchMovieTitle" required />
          <button type='submit'>Search</button>
    </label>
    </form>
    </div>
  )
}

export default SearchPage