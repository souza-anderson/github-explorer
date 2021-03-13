import { useEffect, useState } from 'react'
import { RepositoryItem } from './RespositoryItem'

import '../styles/repositories.scss'

interface Repository {
	name: string;
	description: string;
	html_url: string;
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState<Repository[]>([])

	useEffect(() => {
		fetch('https://api.github.com/users/souza-anderson/repos')
			.then(res => res.json())
			.then(data => setRepositories(data))
	}, [])

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				{repositories.map(repository => {
					return <RepositoryItem key={repository.name} repository={repository} />
				})}				
			</ul>
		</section>
	)
}