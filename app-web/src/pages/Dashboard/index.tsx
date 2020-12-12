import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, TableContainer } from './styles';

interface Usuario {
  id: string;
  nome: string;
  sobrenome: string;
}

const Dashboard: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function loadUsuarios(): Promise<void> {
      try {
        const { data } = await api.get('usuarios');         

        setUsuarios(data);

      } catch (error) {
        console.log(error);
      }
    }

    loadUsuarios();
  }, [usuarios]);

  return (
    <>
      <Header />
      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
              </tr>
            </thead>

            <tbody>              
                {usuarios.map(usuario => {
                  return (<tr key={ usuario.id }>
                    <td className="nome">{ usuario.nome }</td>
                    <td className="sobrenome">
                      { usuario.sobrenome }
                    </td>
                  </tr>);
                }
              )}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
