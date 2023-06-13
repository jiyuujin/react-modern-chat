import React, { Fragment } from 'react'
import { ChatUserMessageProps } from '../UserMessage/UserMessage'
import * as styles from './User.styles'

export interface ChatUserProps extends ChatUserMessageProps {
  avatar?: React.ReactNode;
  name?: string;
  time?: string;
}

export function User(props: React.PropsWithChildren<ChatUserProps>) {
  return (
    <Fragment>
      {props.who === 'other' ? <Other {...props} /> : <Me {...props} />}
    </Fragment>
  )
}

function Other(props: React.PropsWithChildren<ChatUserProps>) {
  const { children, avatar, name, time, who } = props

  return (
    <div css={[styles.root, time && styles.offset]}>
      <div css={[styles.user, styles.wrapper[who]]}>
        <div css={styles.avater}>{avatar}</div>
        <div css={styles.item}>
          <div css={styles.nameBox}>
            {name && <p css={styles.name}>{name}</p>}
          </div>

          <div css={styles.messages}>
            <div>{children}</div>
            <span css={styles.timeBox}>
              {time && <div css={styles.time}>{time}</div>}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Me(props: React.PropsWithChildren<ChatUserProps>) {
  const { children, time, who } = props

  return (
    <div css={[styles.root, time && styles.offset]}>
      <div css={[styles.user, styles.wrapper[who]]}>
        <span css={styles.timeBox}>
          {time && <div css={styles.time}>{time}</div>}
        </span>
        <div>{children}</div>
      </div>
    </div>
  )
}
