import React from 'react';


function Search(props) {
  const { searchChange } = props;
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search a friend'
        onChange={searchChange}/>
    </div>
  );
}

export default Search;