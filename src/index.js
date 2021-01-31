import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const dialogsName = [
    {id: 1, name: 'Anya'},
    {id: 2, name: 'Tanya'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Liza'}
];

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Are you here?'}
]

const posts = [
    'Hey, why nobody love me?',
    'It\'s our new program!'
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsName={dialogsName} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);
