/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/modal.module.css'
import { Modal } from '@/components/Modal'

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	function handleModalConfirm() {
		setModalIsOpen(false)
	}

	function renderModalContent() {
		return (
			<div data-modal-content className={styles['modal-form']}>
				<div onSubmit={() => false}>
					<p>Tem certeza que deseja excluir o item?</p>
				</div>
			</div>
		)
	}

	return (
		<>
			<main className={styles.container}>
				<button type='button' onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			<Modal
				isOpen={modalIsOpen}
				title='Confirmação'
				onClose={() => setModalIsOpen(false)}
				onConfirm={handleModalConfirm}
				footer={{
					confirmText: 'Confirmar',
					cancelText: 'Cancelar',
				}}
			>
				{renderModalContent()}
			</Modal>
		</>
	)
}
