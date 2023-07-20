"use client"

import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from "../constants/breakpoints"
import useWindowSize from "./useWindowSize"

const useBreakpoint = ({
  minWidth = 0,
  maxWidth = Infinity,
  minHeight = 0,
  maxHeight = Infinity
}) => {
  const width = useWindowSize().width
  const height = useWindowSize().height
  return (
    width >= minWidth &&
    width <= maxWidth &&
    height >= minHeight &&
    height <= maxHeight
  )
}

const useIsMobile = () => {
  return useBreakpoint({ maxWidth: MOBILE_MAX_WIDTH })
}

const useIsTablet = () => {
  return useBreakpoint({
    minWidth: MOBILE_MAX_WIDTH + 1,
    maxWidth: TABLET_MAX_WIDTH
  })
}

const useIsDesktop = () => {
  return useBreakpoint({ minWidth: TABLET_MAX_WIDTH + 1 })
}

export { useBreakpoint, useIsDesktop, useIsTablet, useIsMobile }
