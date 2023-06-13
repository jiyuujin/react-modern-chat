import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import * as styles from './App.styles'
import { Chat } from './features/chat/components/Chat'
import { ChatInput } from './features/chat/components/ChatInput/ChatInput'

const App = () => {
  const [count, setCount] = useState(0)

  useEffectOnce(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1)
    }, 300)

    return () => clearInterval(id)
  })

  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <Chat width={392} height={512}>
          {Array.from({ length: count }).map((_, i) => (
            <Chat.User
              key={i}
              avatar={
                <img
                  width={30}
                  height={30}
                  css={styles.avatar}
                  alt=""
                  src="./assets/bakeneko2.png"
                />
              }
              time="12:00"
              who={i % 2 === 0 ? 'me' : 'other'}
            >
              <Chat.UserMessage who={i % 2 === 0 ? 'me' : 'other'}>
                {'text message'.repeat((i % 10) + 1)}
              </Chat.UserMessage>
            </Chat.User>
          ))}
        </Chat>
        <div css={styles.inputWrapper}>
          <ChatInput placeholder="Shift+Enterで送信、Enterで改行" />
        </div>
      </div>
    </div>
  )
}

export default App
