import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function Home() {
  const clientes = [
    new Cliente('Gabriel', 28, '1'),
    new Cliente('Rosita', 25, '2'),
    new Cliente('Amanda', 28, '3'),
    new Cliente('Camila', 25, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="blue" 
                     className="mb-4"
                     onClick={() => setVisivel('form')}>
                  Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario cliente={clientes[0]}
              clienteMudou={salvarCliente}
              cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}
