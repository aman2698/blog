import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default ({match: {url}}) => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>Blog</li>
          
          <li style={{float: 'inline-end'}}>{url === '/' ? <Link to="/new" className="btn btn-new">New Story</Link> : <Link to="/" className="btn btn-new">Home</Link>}</li>
          <li><Link to="/bookmark" className="btn btn-bookmarks">Bookmarks</Link></li>
        </ul>
      </nav>
    </header>
  )
}
