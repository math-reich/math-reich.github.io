"use client"

import Header from "./components/header";

export default function Home()
   {

   const itemsDaLista = [
      { id: 1, text: "Primeiro item da lista dinâmica" },
      { id: 2, text: "Segundo item" },
      { id: 3, text: "Terceiro para demonstrar" },
   ];

   const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      alert("O botão foi clicado! Veja o console para mais detalhes.");
      console.log("Evento do clique:", event);
   };

   return (
      <html>
         <body
            style={{width:'100%', padding: 0, margin:'0 0 0 0'}}
         >

            <header>
               {<Header/>}
            </header>

            <main 
               style={{ padding: '2rem', fontFamily: 'sans-serif' }}
            >

               <h1>Matheus Reich</h1>
               
               <hr />

               <h2>Seção de Atributos e Estilo</h2>

               <div 
                  id="div-unica" 
                  className="container-principal" 
                  style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px' }}
               >
                  Esta é uma div com ID, classe e estilo inline.
               </div>

               <hr />

               <h2>Seção de Listas</h2>

               <h3>Itens que preciso fazer:</h3>

               <ul>
                  <li>Aprender mais sobre Next.js</li>
                  <li>Construir um portfólio incrível</li>
                  <li><strong>Dar um commit neste progresso!</strong></li>
               </ul>

               <h3>Passos para o sucesso:</h3>

               <ol>
                  <li>Planejar</li>
                  <li>Codificar</li>
                  <li><em>Testar e Refatorar</em></li>
                  <li>Publicar!</li>
               </ol>

               <hr />

               <h2>Links e Imagens</h2>

               <a 
                  href="https://github.com/math-reich" 
                  target="_blank" 
                  rel="noopener noreferrer"
               >
                  Meu Perfil no GitHub (abre em nova aba)
               </a>
               
               <br />

               <img 
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                  alt="Logo do GitHub"
                  width="100"
                  style={{ marginTop: '1rem' }}
               />
               
               <hr />

               {/* Interatividade: Botões e Eventos */}
               <h2>Interatividade</h2>

               <button onClick={handleButtonClick}>
                  Clique em Mim!
               </button>

               <hr />

               {/* Formulários Simples */}
               <h2>Formulários</h2>

               <div>
                  <label htmlFor="nome-usuario">Nome de Usuário: </label>
                  <input 
                     type="text" 
                     id="nome-usuario"
                     placeholder="Digite seu nome..."
                  />
               </div>

               <div style={{ marginTop: '0.5rem' }}>
                  <input type="checkbox" id="lembrar-me" defaultChecked={true} />
                  <label htmlFor="lembrar-me"> Lembrar de mim</label>
               </div>

               <hr />

               {/* Renderizando uma lista a partir de um array (o jeito React!) */}
               <h3>Lista de Itens Dinâmicos:</h3>
               <ul>
               {itemsDaLista.map(item => (
                  // A prop 'key' é essencial para o React otimizar a lista.
                  // Use sempre um ID único do seu dado para a key.
                  <li key={item.id}>
                     {item.text}
                  </li>
               ))}
               </ul>

            </main>
      
         </body>
      </html>
   );
}