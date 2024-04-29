import React from "react";

function Notification(props) {
  return (
    <div className='notification' style={{ backgroundColor: "white" }}>
      <h3>{props.message}</h3>
    </div>
  );
}

export default Notification;
