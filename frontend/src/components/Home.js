import React from 'react';

function HomePage() {
  const username = localStorage.getItem('username');
console.log(username)
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your home page.</p>
    </div>
  );
}

export default HomePage;
