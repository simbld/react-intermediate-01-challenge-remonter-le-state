import React, { useState } from 'react';
import Search from './components/Search';
import './App.css';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState([
    'kieran',
    'alan',
    'ryan',
    'nigel',
    'geraint',
    'garin',
  ]);
  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {users
        .filter((user) => user.includes(searchValue))
        .map((user, index) => (
          <p key={index}>{user}</p>
        ))}
    </div>
  );
}
