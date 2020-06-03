import React from 'react';

const Header =(props)=>{
    return (
      <div className="Col-12 ">
        <ul className="search">
          <li>
            <h2>Where in the world?</h2>
          </li>
          <li>
            {props.changeHandler}
            <input
              type="text"
              placeholder="Search"
              value={props.searchTerm}
              onChange={props.onSearch}
            />
          </li>
        </ul>

        <hr />
      </div>
    );
}

export default Header;