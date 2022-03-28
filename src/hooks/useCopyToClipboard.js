import { useState } from "react";

export const useCopyToClipboard = (resetInterval = 2000) => {
    const [isCopied, setCopied] = useState(false)
    const handleCopyToClipboard = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, resetInterval)
    }
    return {isCopied, handleCopyToClipboard}
}