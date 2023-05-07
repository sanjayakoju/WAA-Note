import React from 'react';

export const Pagefour = (props) => {
  const user = props.location.state.user;

  let page4 = (
    <div>
      <h3>Thank you for your order!</h3>
      <div>First name: {user.firstname}</div>
      <div>Last name: {user.lastname}</div>
      <div>Address: {user.address}</div>
      <div>Creditcard: {user.creditcard}</div>
    </div>
  );
  return page4;
}