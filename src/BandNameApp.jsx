import React from 'react'
import { SocketProvider } from './context/SocketContext'
import App from './App'

export const BandNameApp = () => {
  return (
    <SocketProvider>
        <App></App>
    </SocketProvider>
  )
}
