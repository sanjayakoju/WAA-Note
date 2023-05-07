import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersList } from './UsersList';
import { AddUser } from './AddUser';
import React, { useState } from 'react';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UsersList />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
