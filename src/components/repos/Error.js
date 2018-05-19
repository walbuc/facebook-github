import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="alert alert-danger">
      <strong>Oops!</strong> {message}, try again later.
    </div>
  );
};

export default Error;
