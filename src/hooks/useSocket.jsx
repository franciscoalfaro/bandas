import { useEffect, useMemo, useState } from 'react';

import { io } from 'socket.io-client';

const sockets = io('/');

export const useSocket  = ()=>{

    const socket = useMemo( ()=> sockets)

    const [online, setOnline] = useState(false)

    useEffect(() => {
        setOnline(socket.connected)
    
      }, [socket])
      
      useEffect(()=>{
        socket.on('connect', ()=>{
          setOnline(true)
        })
    
      },[socket])
    
      useEffect(()=>{
        socket.on('disconnect', ()=>{
          setOnline(false)
        })
    
      },[socket])

    return {
        online,
        socket
    }

}