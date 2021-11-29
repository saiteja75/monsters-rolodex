import React from "react";
import './search-field.style.css';
export const SearchField = (props) => {
    return (
        <input type="search" placeholder={props.placeholder} className='search' onChange={props.handler}></input>
    )
}