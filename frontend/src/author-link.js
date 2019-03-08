import React from 'react';

const AuthorLink = ({author, style={}}) => (
  <a href={author.link} target="_blank" rel="noopener noreferrer" className="author-link" style={style}>
    {author.name}
  </a>
)

export default AuthorLink