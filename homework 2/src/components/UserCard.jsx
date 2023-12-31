
import React from "react";

const UserCard = ({ user ,onAddFriend,isFriend}) => {
  return (
    <div className="card">
      <img src={user.avatar} className="card-img-top" alt={user.name} />
      <div className="card-body">
        <img src={user.image} ></img>
        <h5 className="card-title">{user.firstName}</h5>
        <p className="card-text">{user.email}</p>
        {!isFriend && <button className="btn btn-primary" onClick={() => onAddFriend(user)}>
          Add Friend
        </button>
}
      </div>
    </div>
  );
};

export default UserCard;
