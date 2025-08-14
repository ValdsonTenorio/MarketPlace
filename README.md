
# MarketPlace

> Um marketplace moderno desenvolvido com Node.js no backend e React no frontend, com foco em cadastro, listagem e gerenciamento de produtos.

---

## 🔹 Descrição

O **MarketPlace** é um projeto fullstack que permite:

- Cadastro de usuários e empresas
- Criação, edição e exclusão de produtos
- Listagem de produtos para visualização
- Integração entre frontend React e backend Node.js (API REST)

Este projeto serve como base para quem quer aprender **desenvolvimento web completo**, com práticas de frontend, backend e comunicação via API.

---

## 🔹 Tecnologias Utilizadas

**Backend:**

- Node.js
- Express
- MongoDB / Mongoose
- JWT (autenticação)
- CORS

**Frontend:**

- React
- React Router
- Axios
- Chakra UI (estilização)
- Formulários com validação

**Ferramentas auxiliares:**

- Git/GitHub
- Postman (para testes de API)

---

## 🔹 Funcionalidades

### Backend

- CRUD de produtos
- CRUD de empresas
- Autenticação de usuários com JWT
- Validação de dados

### Frontend

- Páginas de login e registro
- Dashboard de produtos
- Formulários de cadastro de empresa e produto
- Estilização responsiva com Chakra UI
- Consumo de API do backend via Axios

---

## 🔹 Estrutura do Projeto

```
MarketPlace/
│
├── backend/         # API Node.js
│   ├── controllers/ # Lógica de rotas
│   ├── models/      # Modelos do banco de dados
│   ├── routes/      # Rotas da aplicação
│   └── server.js    # Entrada do backend
│
├── frontend/        # Aplicação React
│   ├── src/
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── pages/      # Páginas do site
│   │   ├── services/   # Comunicação com a API
│   │   └── App.jsx     # Arquivo principal do React
│   └── package.json
└── README.md
```

---

## 🔹 Como Rodar o Projeto

### Pré-requisitos

- Node.js (16.x ou superior)
- npm ou yarn
- MongoDB (local ou Atlas)

### Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/ValdsonTenorio/MarketPlace.git
cd MarketPlace
```

2. **Configurar Backend:**

```bash
cd backend
npm install
# Criar arquivo .env com:
# PORT=5000
# MONGO_URI=sua_string_mongodb
npm start
```

3. **Configurar Frontend:**

```bash
cd ../frontend
npm install
npm start
```

4. **Acessar no navegador:**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## 🔹 Contribuição

Contribuições são bem-vindas!  

- Abra uma **issue** para discutir mudanças
- Faça **fork** do projeto e crie um **pull request**
- Siga o padrão de código e boas práticas

---

## 🔹 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo `LICENSE` para mais detalhes.
