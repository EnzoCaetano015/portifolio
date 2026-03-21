export type TransitionProps = {
    /**
     * Condition for the `children` to be displayed.
     */
    condition: boolean
    children: React.ReactNode
    includeBlur?: boolean
    mode?: "vertical" | "horizontal" | "center"
}