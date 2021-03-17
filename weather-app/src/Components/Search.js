import React from 'react';





export default class Search extends React.Component {
    render(){
    return(
        <div>
            <div className={`ui inverted blue menu`}>
                <input type="text" placeholder="Search by..."></input>
                <button className={'ui red button'}> Search </button>
            </div>
        </div>
        
    )}
}
