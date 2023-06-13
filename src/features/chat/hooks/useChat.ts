import React, { useRef, useState, useCallback, useEffect } from 'react'
import { useEffectOnce } from 'react-use'
import { useVirtualizer } from '@tanstack/react-virtual'

export function useChat(children: React.ReactNode[]) {
  const count = React.Children.count(children)
  const parentRef = useRef<HTMLDivElement>(null)
  const [calculating, setCalculating] = useState(true)

  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  })

  function getScrollTop() {
    if (!parentRef?.current) return 0
    return 99999999999999
  }

  const scrollBottom = useCallback(async () => {
    parentRef?.current?.scrollTo({ top: getScrollTop() })
  }, [])

  useEffectOnce(() => {
    scrollBottom().then(() => setCalculating(false))
  })

  useEffect(() => {
    scrollBottom()
  }, [scrollBottom])

  return {
    calculating,
    parentRef,
    scrollBottom,
    virtualizer,
  }
}
