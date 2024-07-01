# MVP-Editora-Unifeso

**Membro:** Erick Luiz Almeida Santos

**Tema:** Reestruturação do site da Editora Unifeso para tornar a produção científica mais acessível e compreensível para a comunidade Unifeso.

**Tecnologias Utilizadas:** HTML, CSS, JavaScript, React, C#, Docker.

**Público-Alvo:**
- **Usuários Finais:** Comunidade Unifeso, incluindo estudantes, funcionários e acadêmicos interessados em publicações da Editora.
- **Gestão de Editores:** Equipe responsável pelo registro e gerenciamento de publicações e tarefas administrativas.

**Dores do Público-Alvo:**
- **Usuário Final:** Dificuldade em acessar e encontrar publicações acadêmicas específicas, falta de visibilidade e interatividade limitada.
- **Gerenciamento de Editores:** Ineficiências no registro e gerenciamento de publicações, necessidade de controle de acesso seguro e organizado.

**Definição de MVP:**
Sistema web que permite acesso rápido e fácil às publicações acadêmicas da Editora Unifeso, com funcionalidades básicas como registro de publicação, pesquisa avançada, visualização detalhada, comentários e avaliações, controle de acesso diferenciado, sistema de recomendação e design que reflete a identidade visual da Editora.

**Forma de Acesso:**
- Clone o repositório e instale as dependências usando `dotnet restore` para o backend e `npm install` para o frontend.
- Inicie o servidor backend com `dotnet run` e acesse a API via http://localhost:5000/swagger.
- Inicie o servidor frontend com `npm start` e acesse o site via http://localhost:3000.

**Requisitos Funcionais:**
- **Cadastro de Publicações:** Permitir cadastro de novas publicações com título, autor, data, resumo e categoria.
- **Pesquisa Avançada:** Funcionalidade de pesquisa por autor, categoria, data e palavras-chave.
- **Visualização Detalhada:** Permitir visualização completa da publicação com opção de download.
- **Comentários e Avaliações:** Usuários registrados podem comentar e avaliar publicações.
- **Controle de Acesso:** Implementar diferentes níveis de acesso para administradores.
- **Sistemas de Recomendação:** Recomendar publicações com base no histórico e preferências do usuário.
- **Design e Identidade Visual:** Refletir identidade visual da Editora Unifeso na plataforma.

**Requisitos Não Funcionais:**
- **Segurança de Dados:** Garantir segurança e privacidade dos dados dos usuários.
- **Desempenho Rápido:** Responder rapidamente para grande número de usuários.
- **Disponibilidade:** Interface intuitiva e fácil de usar.
- **Confiabilidade:** Sistema disponível e funcional na maior parte do tempo.
- **Fácil Manutenção:** Fácil de manter e atualizar para sustentabilidade a longo prazo.
- **Escalabilidade:** Capacidade de escalar para mais usuários e publicações sem degradação do desempenho.
