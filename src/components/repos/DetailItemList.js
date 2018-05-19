import React from 'react';

const DetailItemList = ({ name, avatar, contributions }) => {
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left" />
        <div className="media-body">
          <div className="media-heading">
            <a href={name.url}>{name.name}</a>
          </div>
          <div className="media-heading">
            Number of contributions: {contributions}
          </div>
          <img src={avatar} alt="" />
        </div>
      </div>
    </li>
  );
};

export default DetailItemList;
