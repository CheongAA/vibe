import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const SideBar = () => {
  return (
    <div className="h-screen bg-black p-5">
      <h1 className="text-xl font-bold font-mono uppercase text-white">vibe</h1>
      <SearchBar />
      <Navigation />
    </div>
  );
};

export default SideBar;
