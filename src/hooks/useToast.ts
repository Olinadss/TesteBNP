import { ToastContext } from '@/context/contextMessage'
import { useContext } from 'react'

export function useToast() {
	const context = useContext(ToastContext)

	return context
}
