import React from 'react'
import PropTypes from 'prop-types';


export const Footer = ({message,children}) => {
// console.log(message);
  return (
    <div>
        <h2>{message}</h2>
        <p>{children}</p>
    </div>
  )

}
  Footer.propTypes = {
    message: PropTypes.string
   };

   Footer.defaultProps ={ message:"This is Footer default props",
   children:"copyright 1999-2022 by Refsnes Data. All Rights Reserved"}
   
export default Footer