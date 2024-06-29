/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css'
import { IToastMessage } from '@/types/toast-message'
import { ToastMessage } from '@/components/ToastMessage'
import { useToast } from '@/hooks/useToast'
import { ToastProvider } from '@/context/contextMessage'

export default function ContextApi() {
	return (
		<ToastProvider>
			<ContextApiContent />
		</ToastProvider>
	)
}

export function ContextApiContent() {
	const { message, setMessage } = useToast()
	const messages: Array<IToastMessage> = [
		{
			id: '1',
			message: 'Mensagem de sucesso',
			type: 'success',
		},
		{
			id: '2',
			message: 'Mensagem de erro',
			type: 'error',
		},
	]

	function handleSuccessButtonClick() {
		setMessage(messages[0])

		setTimeout(() => {
			setMessage(undefined)
		}, 1000)
	}

	function handleErrorButtonClick() {
		setMessage(messages[1])

		setTimeout(() => {
			setMessage(undefined)
		}, 1000)
	}

	return (
		<ToastProvider>
			<div className={styles.container}>
				<button type='button' onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type='button' onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			{/* <div className={styles['toast-container']}>
				{messages.map((message: IToastMessage) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div> */}

			<div className={styles['toast-container']}>
				{message && <ToastMessage content={message} />}
			</div>
		</ToastProvider>
	)
}
