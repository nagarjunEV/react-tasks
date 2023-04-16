import React, { useState } from 'react';

function TaskEleven() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accounts, setAccounts] = useState([
    { username: 'JohnDoe1', password: '1234567' },
  ]);

  const onSubmit = (e) => {
    // YOUR CODE HERE
    e.preventDefault();

    if (username.length < 6 || password.length < 6) {
      window.alert(`Username and password must be more than 6 characters`);
      return;
    }

    const userExists = accounts.some((user) => {
      return user.username == username && user.password == password;
    });

    let message = '';
    if (userExists) message = `Logged In successfully! Hi ${username}`;
    else message = `New account created! Welcome, ${username}`;
    setAccounts([...accounts, { username: username, password: password }]);

    window.alert(message);
    setUsername('');
    setPassword('');
    console.log(accounts);
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'solid',
        padding: 10,
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        value={username}
        type="text"
        onChange={(e) => {
          if (e.target.value.length > 20)
            window.alert('Username cannot exceed 20 character');
          else setUsername(e.target.value);
        }}
        style={{ marginBottom: 5 }}
      />
      <input
        value={password}
        type="text"
        onChange={(e) => {
          if (e.target.value.length > 20)
            window.alert('Password cannot exceed 20 character');
          else setPassword(e.target.value);
        }}
        style={{ marginBottom: 10 }}
      />
      <button style={{ alignSelf: 'center' }} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default TaskEleven;
