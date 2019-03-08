import React from 'react';

import AuthorLink from './author-link';
import { AUTHORS } from './constants';


const FooterAuthors = () => (
  <div style={{fontSize: "0.75em"}}>
    Website designed by 
    <AuthorLink author={AUTHORS.nott} style={{color: 'white'}}/>,
    made with love by
    <AuthorLink author={AUTHORS.peaw} style={{color: 'white'}} />, 
    <AuthorLink author={AUTHORS.tun} style={{color: 'white'}} />, 
    <AuthorLink author={AUTHORS.phootip} style={{color: 'white'}} />.
  </div>
)

export default FooterAuthors;