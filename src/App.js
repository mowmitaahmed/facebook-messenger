import { useEffect, useState } from 'react';
import {Input,FormControl,IconButton} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase.config';
import firebase from 'firebase/app';
import 'firebase/firestore';
import '@firebase/auth';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in react
  // useEffect = run code on condition in React
  useEffect(()=>{
     db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
       setMessage(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
     })
  }, [])
  useEffect(()=>{
    // If it's blank inside [], this code runs ONCE when the app component loads
    setUsername(prompt('Please Enter Your Name: '));
  },[])// condition

  const sendMessage = (event) => {
      event.preventDefault();
      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      // setMessage([...message, {username: username, message: input}]);
      setInput('');
  }
  return (
    <div className="App">
        <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="Logo_Messenger_NewBlurple"/>
        <h1>Hello Buddy! &#128512;</h1>
        <h2>Welcome {username}</h2>
        <hr/>
        <FlipMove>
        {
          message.map(({id,message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
        </FlipMove>
        <form className="app__form">
          <FormControl className="app_formControl">
            {/* <InputLabel>Enter a message...</InputLabel> */}
            <Input className="app_input" placeholder="Enter a message....." margin="none" value={input} onChange={event => setInput(event.target.value)} />
            <IconButton className="app_iconButton" type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}><SendIcon /></IconButton>
          </FormControl>
        </form>
    </div>
  );
}

export default App;
