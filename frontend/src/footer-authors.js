import React from 'react';

import { AUTHORS } from './constants';

const AuthorLink = ({author}) => (
  <a href={author.link} target="_blank" rel="noopener noreferrer" className="author-link">
    {author.name}
  </a>
)

const FooterAuthors = () => (
  <div style={{fontSize: "0.75em"}}>
    Website designed by 
    <AuthorLink author={AUTHORS.nott} />,
    made with love by
    <AuthorLink author={AUTHORS.peaw} />, 
    <AuthorLink author={AUTHORS.tun} />, 
    <AuthorLink author={AUTHORS.phootip} />.
  </div>
)

export default FooterAuthors;