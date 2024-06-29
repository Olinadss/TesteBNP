/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next/types'

import { IUser, IUserCreate } from '@/types/user.d'

export const users: IUser[] = []

export default (req: NextApiRequest, res: NextApiResponse) => {
	const user: IUserCreate = req.body

	if (!user.name || !user.email) {
		return res.status(400).json({ error: 'Missing name or email' })
	}

	const newUser: IUser = {
		id: users.length + 1,
		...user,
	}

	users.push(newUser)

	return res.status(201).json(newUser)
}
