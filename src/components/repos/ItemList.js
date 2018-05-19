import React from 'react';

const ListItem = ({ name, id, onRepoSelect }) => {
  return (
    <li onClick={() => onRepoSelect(name, id)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left" />
        <div className="media-body">
          <div className="media-heading">{name}</div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
