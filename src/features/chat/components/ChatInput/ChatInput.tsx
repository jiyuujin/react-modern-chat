import React from 'react'
import { Carbon } from '../../../../components/Carbon'
import * as styles from './ChatInput.styles'

type _ChatInputProps = React.HTMLProps<HTMLTextAreaElement>;

export type ChatInputProps = Omit<_ChatInputProps, 'ref'>;

export const ChatInput = React.forwardRef(
  (props: ChatInputProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const { rows = 1, ...rest } = props

    return (
      <div css={styles.root}>
        <textarea {...rest} ref={ref} rows={rows} css={[styles.input]} />
        <button>
          <Carbon />
        </button>
      </div>
    )
  }
)
