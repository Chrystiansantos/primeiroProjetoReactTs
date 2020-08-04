import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo,Issues } from './style';

import logoImg from '../../assets/image/logo-svg.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  // useRouteMatch ira pegar os parametro que vem na rota
  const { params } = useRouteMatch<RepositoryParams>();
  return <>
    <Header>
      <img src={logoImg} alt="Github Explore" />
      <Link to="/">
        <FiChevronsLeft size={16}></FiChevronsLeft>
        Voltar
      </Link>
    </Header>
    <RepositoryInfo>
      <header>
        <img src="https://avatars0.githubusercontent.com/u/33062949?s=460&u=4b6a9d50322ba79ba9c2df7b9c84a81b25fe93e5&v=4" alt="" />
        <div>
          <strong>ChrystianSantos/goBarber</strong>
          <p>Descricao repositorio</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>18008</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>48</strong>
          <span>Fork</span>
        </li>
        <li>
          <strong>67</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
      <Link to="asdad">
        <div>
          <strong>asdasd</strong>
          <p>asdsadsadda</p>
        </div>
        <FiChevronRight size={20}></FiChevronRight>
      </Link>
    </Issues>
  </>
}

export default Repository;
