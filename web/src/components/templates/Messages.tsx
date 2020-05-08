import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';

import { OtherMessage } from '../molecules/OtherMessage';
import { MyMessage } from '../molecules/MyMessage';
import { Message } from '../../types/message';
import {firebaseDb} from "../../firebase/config";
import {UserSessionContext} from "../../Router";


export const Messages = () => {
    const { userSession } = useContext(UserSessionContext);
    const [messages, setMessages] = useState<Message[]>([]);
    useEffect(() => {
        firebaseDb.ref('/messages').on('child_added', (data) => {
            setMessages(prevState => [...prevState, data.val()]);
        });
    }, []);


    return (
        <SCContainer>
            {
                messages.length ? (
                    messages.map((message, k) => message.uid === userSession.uid ? <MyMessage key={k} message={message} /> : <OtherMessage key={k} message={message} />)
                ) : (
                    <></>
                )
            }
        </SCContainer>
    )
};

const SCContainer = styled.div`
  min-height: calc(100vh - 168px);
  display: flex;
  flex-direction: column;
`