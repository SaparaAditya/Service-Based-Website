import React from 'react';


const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <center>
        <img src="chatdoc.png" alt="Card" className="card-img-top" />
        </center>
        <div className="card-body">
          <center>
          <h2 className="card-title">ChatWithDocument</h2><br />
        </center>
          <p className="card-text">Upload pdf, document or ppt file</p>
          <p className="card-text">And ask whatever you want</p><br />
        <center>
            <a rel="stylesheet" id='lnk' href="https://chatwithdocument-3.onrender.com/" target='blank'>Enter</a>
        {/* <button className="btn btn-primary" id='bt1' onClick={}>Button</button> */}
        </center>
        
          
        </div>
      </div>
    </div>
  );
};

export default Card;
