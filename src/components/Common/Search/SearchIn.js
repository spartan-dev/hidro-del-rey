import React from 'react'
import SearchBox from './SearchBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledSearch = (props) => {
  return (
    <>
      <SearchBox>
        <input type="search/text"/>
        <i>
        <FontAwesomeIcon  style={{color:'#000000'}} icon={props.icon} />
        </i>
      </SearchBox>
    </>
  )
}

export default StyledSearch