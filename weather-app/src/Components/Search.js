import React from 'react';

const Search = (props) => {
    return (
        <div className={`ui inverted ${props.color} menu`}>
            <input type="text" placeholder="Search by..."></input>
        </div>
    )
}

export default Search