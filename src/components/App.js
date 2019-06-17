import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div className="ui container">
       <UserList />
      <div className="ui large buttons fluid" style={{ marginTop: '3rem' }}>
        <button
          className="ui button teal"
          onClick={() => setResource('posts')}
        >
          Posts
        </button>
        <div className="or" />
        <button
          className="ui button violet"
          onClick={() => setResource('todos')}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
