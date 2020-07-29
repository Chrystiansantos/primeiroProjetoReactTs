import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/image/logo-svg.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/33062949?s=400&u=4b6a9d50322ba79ba9c2df7b9c84a81b25fe93e5&v=4"
            alt="Chrystian Santos"
          />
          <div>
            <strong>ChrystianSantos/goStack</strong>
            <p>Projeto elaborado no curso de TS RN RW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/33062949?s=400&u=4b6a9d50322ba79ba9c2df7b9c84a81b25fe93e5&v=4"
            alt="Chrystian Santos"
          />
          <div>
            <strong>ChrystianSantos/goStack</strong>
            <p>Projeto elaborado no curso de TS RN RW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/33062949?s=400&u=4b6a9d50322ba79ba9c2df7b9c84a81b25fe93e5&v=4"
            alt="Chrystian Santos"
          />
          <div>
            <strong>ChrystianSantos/goStack</strong>
            <p>Projeto elaborado no curso de TS RN RW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/33062949?s=400&u=4b6a9d50322ba79ba9c2df7b9c84a81b25fe93e5&v=4"
            alt="Chrystian Santos"
          />
          <div>
            <strong>ChrystianSantos/goStack</strong>
            <p>Projeto elaborado no curso de TS RN RW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/33062949?s=400&u=4b6a9d50322ba79ba9c2df7b9c84a81b25fe93e5&v=4"
            alt="Chrystian Santos"
          />
          <div>
            <strong>ChrystianSantos/goStack</strong>
            <p>Projeto elaborado no curso de TS RN RW da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
