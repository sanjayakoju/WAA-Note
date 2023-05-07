import React , { useState } from 'react';

export const Pagethree = (props) => {
  const [user, setUser] = useState(props.location.state.user);

  const handleOnSubmit = () => {
    props.history.push("/pagefour", {user :user});
  }

  const handleFieldChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value });
   }

  let page3 = (
    <div>
      <div>First name: {user.firstname}</div>
      <div>Last name: {user.lastname}</div>
      <div>Address: {user.address}</div>
      <form>
        <h3>Page 3</h3>
        <div>
          Creditcard number
           <input
            type="text"
            placeholder="Address"
            name="creditcard"
            onChange={handleFieldChange} />
        </div>
        <button onClick={handleOnSubmit}>Next</button>
      </form>
    </div>
  );
  return page3;
}