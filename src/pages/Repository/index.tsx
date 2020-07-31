import React from 'react'
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  // useRouteMatch ira pegar os parametro que vem na rota
  const { params } = useRouteMatch<RepositoryParams>();
  console.log(params)
  return <h1>Repository: {params.repository}</h1>
}

export default Repository;
