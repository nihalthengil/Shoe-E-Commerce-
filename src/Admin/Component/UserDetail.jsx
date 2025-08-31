import axios from "axios";
import React, { useState } from "react";

const UserDetail = ({ user }) => {
  console.log(user);
  const [block,SetBlock]=useState(user.isblocked)
    const Isblocked =()=>{
        const newStatus=!block
        axios.patch(`http://localhost:3000/users/${user.id}`,{isblocked:newStatus})
        SetBlock(newStatus)
    }
  return (
    <div>
      <div className="flex">
        <h3>{user.id}</h3>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>

      </div>
        <button onClick={Isblocked}>{block?"UnBlock":"Block"}</button>
    </div>
  );
};

export default UserDetail;
