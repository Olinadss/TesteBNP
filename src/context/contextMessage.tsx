import { IToastMessage } from '@/types/toast-message'
import { createContext, useState, useContext, ReactNode } from 'react'

interface IToastMessageProps {
	message: IToastMessage | undefined
	setMessage: (message: IToastMessage | undefined) => void
}

export const ToastContext = createContext<IToastMessageProps>(
	{} as IToastMessageProps,
)

interface ToastProviderProps {
	children: ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	const [message, setMessage] = useState<IToastMessage>()

	return (
		<ToastContext.Provider value={{ message, setMessage }}>
			{children}
		</ToastContext.Provider>
	)
}
