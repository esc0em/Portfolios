import { useState, useCallback, useRef, type ReactNode } from 'react'
import { ToastContext } from './toastStore'

const TOAST_DURATION_MS = 1800

type ToastProviderProps = {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [message, setMessage] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback((msg: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setMessage(msg)
    timeoutRef.current = setTimeout(() => {
      setMessage(null)
      timeoutRef.current = null
    }, TOAST_DURATION_MS)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message != null && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-gray-800 px-4 py-2.5 text-sm font-medium text-white shadow-lg"
        >
          {message}
        </div>
      )}
    </ToastContext.Provider>
  )
}
