import React from 'react'
import * as styles from './UserMessage.styles'

export interface ChatUserMessageProps {
  who: 'me' | 'other'
}

export function UserMessage(props: React.PropsWithChildren<ChatUserMessageProps>) {
  const { children, who } = props

  return (
    <div css={[styles.root, styles.side[who]]}>
      <div css={[styles.wrapper, styles.position[who]]}>
        <p css={styles.text}>
          {children}
        </p>
      </div>
    </div>
  )
}
