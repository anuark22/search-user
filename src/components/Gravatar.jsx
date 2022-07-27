import React from 'react';
import md5 from 'md5';
const Gravatar = (props) => {
    const email = props.email;
    const hash = md5(email);
    return (  
        <img src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} className={props.className} alt="avatar" /> 
    );
}
 
export default Gravatar;