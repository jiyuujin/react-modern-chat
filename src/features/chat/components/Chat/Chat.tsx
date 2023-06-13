import React, { useImperativeHandle } from 'react'
import SimpleBar from 'simplebar-react'
import { useChat } from '../../hooks/useChat'
import * as styles from './Chat.styles'
import 'simplebar-react/dist/simplebar.min.css'

export interface ChatProps {
  width: number;
  height: number;
}

export const Chat = React.forwardRef(
  (props: React.PropsWithChildren<ChatProps>, ref) => {
    const { width, height } = props
    const children = React.Children.toArray(props.children)
    const { calculating, parentRef, scrollBottom, virtualizer } =
      useChat(children)

    useImperativeHandle(ref, () => ({
      scrollBottom,
    }))

    return (
      <div css={styles.root(calculating)}>
        <SimpleBar
          css={styles.vScrollWrapper(width, height)}
          scrollableNodeProps={{ ref: parentRef }}
        >
          <ul css={styles.list(virtualizer.getTotalSize())}>
            {virtualizer.getVirtualItems().map((virtualRow) => {
              return (
                <li
                  key={virtualRow.index}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  css={styles.item(virtualRow.start)}
                >
                  {children[virtualRow.index]}
                </li>
              )
            })}
          </ul>
        </SimpleBar>
      </div>
    )
  }
)
