import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export const Pageone = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const gotoNextPage = () => {
    navigate('/pagetwo', {state:{username:username}});
  }

  let page1 = (
    <form>
      <h3>Page 1</h3>
      <div>
        Name
          <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)} />
      </div>
      <button onClick={gotoNextPage}>Next</button>
    </form>
  );
  return page1;
}