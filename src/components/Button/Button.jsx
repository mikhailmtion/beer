import React from 'react';

function Button({randomHandle}) {
  return (
    <button  onClick={() =>  randomHandle()}className="button">Random beer</button>
  );
}

export default Button;