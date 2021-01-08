import { Card, CardContent, Typography } from '@material-ui/core';
import React,{forwardRef} from 'react';
import './Message.css';

const Message = forwardRef(({username, message},ref) => {
    const isUser = username === message.username;
    console.log(message);
    // console.log(isUser);
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography mb={0} color="white" variant="h5" component="h2">{!isUser && `${message.username || "Unknown user"}:`}  {message.message}</Typography>
                    {/* <Typography mb={0} color="white" variant="h5" component="h2">{message.timestamp.seconds}</Typography> */}
                </CardContent>
            </Card>
        </div>
    );
});

export default Message;