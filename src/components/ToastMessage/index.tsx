import { useState } from 'react'

import { IToastMessage } from '@/types/toast-message.d'

import styles from './style.module.css'

type ToastMessageProps = {
	content: IToastMessage
}

export const ToastMessage: React.FC<ToastMessageProps> = ({
	content: data,
}) => {
	const [isVisible, setIsVisible] = useState(true)

	function handleClose() {
		setIsVisible(false)
	}

	if (!isVisible) return null

	return (
		<div
			className={styles.container}
			data-toast-type={data.type}
			data-toast-id={data.id}
		>
			<span data-content>{data.message}</span>

			<span data-close>╳</span>
		</div>
	)
}
