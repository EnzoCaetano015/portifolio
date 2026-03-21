import { AnimatePresence, motion } from "framer-motion"
import { TransitionProps } from "./Transition.types"

/**
 * Permite que elementos renderizados condicionalmente tenham uma animação de transição mais suave.
 * Evita shift layout, tornando a experiência do usuário mais fluida.
 */
export const Transition = ({ children, condition, mode = "vertical", includeBlur }: TransitionProps) => {
    return (
        <AnimatePresence>
            {condition && (
                <motion.div
                    layout
                    initial={{
                        opacity: 0,
                        ...(mode !== "center" && (mode === "vertical" ? { height: 0 } : { width: 0 })),
                        ...(includeBlur && { filter: "blur(5px)" }),
                    }}
                    animate={{
                        opacity: 1,
                        ...(mode !== "center" &&
                            (mode === "vertical" ? { height: "auto" } : { width: "auto" })),
                        ...(includeBlur && { filter: "blur(0px)" }),
                    }}
                    exit={{
                        opacity: 0,
                        ...(mode !== "center" && (mode === "vertical" ? { height: 0 } : { width: 0 })),
                        ...(includeBlur && { filter: "blur(5px)" }),
                    }}
                    transition={{ duration: 0.2, visualDuration: 0.8 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}