import React from 'react';


const Header = (props) => {
  return (
    <h1 className="ui top attached header center aligned">
    <div className="center aligned">Clicky Game! Don't click the same one more then once!</div>
    <div className="right aligned"> Score: {props.score}</div>
      
    </h1>
  )
}

export default Header;