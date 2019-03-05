import React from 'react';
import $ from 'jquery';

const Link = ({ to, children, className="" }) => (
  <a href={to} onClick={() => $.scrollify.move(to)} className={className}>{children}</a>
)

export default Link;