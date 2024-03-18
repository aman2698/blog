import React from 'react';
import Bookmarks from './Bookmarks';

export default ({bookmarks}) => {
  return (
    <div className="bookmark-page" style={{padding:'0px 10px'}}>
      <h1>Your Bookmarks</h1>
      <Bookmarks bookmarks={bookmarks} />
    </div>
  )
}
