import { css } from "@emotion/react"

export const verticalScrollbar = css`
    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: lightgrey;
        border-radius: 1px;
        height: 50px;
        outline: none;
        background-clip: padding-box;
    }
`

export const horizontalScrollbar = css`
    &::-webkit-scrollbar {
        height: 3px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: lightgrey;
        border-radius: 1px;
        width: 50px;
        outline: none;
        background-clip: padding-box;
    }
`