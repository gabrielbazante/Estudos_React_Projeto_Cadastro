import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

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
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
