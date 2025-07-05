import React, { useEffect, useState } from "react";
import "./ListUser.css";
import cross_icon from '../Assets/cross_icon.png';
import { backend_url } from "../../App";

const ListUser = () => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = () => {
    fetch(`${backend_url}/allusers`) // Ensure this endpoint is implemented on the backend
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const removeUser = async (id) => {
    await fetch(`${backend_url}/removeuser`, { // Ensure this endpoint is implemented on the backend
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  };

  return (
    <div className="listuser">
      <h1>All Users List</h1>
      <div className="listuser-format-main">
        <p>User ID</p>
        <p>Email Address</p>
        <p>Full Name</p>
        <p>Created</p>
        <p>Remove</p>
      </div>
      <div className="listuser-allusers">
        <hr />
        {allUsers.map((user, index) => (
          <div key={index}>
            <div className="listuser-format-main listuser-format">
              <p>{user._id}</p>
              <p>{user.email}</p>
              <p>{user.name}</p>
              <p>{new Date(user.date).toLocaleDateString()}</p>
              <img
                className="listuser-remove-icon"
                onClick={() => removeUser(user._id)}
                src={cross_icon}
                alt="Remove User"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
