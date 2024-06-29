/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from '@/styles/formulario.module.css'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { users } from './api/users/create'
import { useEffect } from 'react'

interface FormData {
	name: string
	email: string
}

const newFormValidationSchema = zod.object({
	name: zod.string().min(1, { message: 'Informe seu nome' }),
	email: zod.string().email({ message: 'Informe um e-mail válido' }),
})

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(newFormValidationSchema),
	})

	async function handleSubmitForm(data: FormData) {
		const response = await fetch('/api/users/create', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		console.log('users', response)
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<input
						{...register('name', { required: true })}
						type='text'
						placeholder='Name'
					/>
					{errors.name && <span>{errors.name.message}</span>}
					<input
						{...register('email', { required: true })}
						type='email'
						placeholder='E-mail'
					/>
					{errors.email && <span>{errors.email.message}</span>}

					<button type='submit' data-type='confirm'>
						Enviar
					</button>
				</form>
			</div>
		</div>
	)
}
