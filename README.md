# Projeto-Integrador-II
Projeto de sistema web desenvolvido para a disciplina de Projeto Integrador do curso superior de tecnologia da informação da UFMS

# 🛡️ SisGeR - Sistema de Gerenciamento de Ocorrências

SisGeR é um sistema web desenvolvido com Node.js e Express para gerenciar ocorrências de forma segura, simples e eficiente. Ele permite o login de usuários, abertura e finalização de ocorrências, além de oferecer uma interface intuitiva para acompanhamento e pesquisa.

---

## 📌 Funcionalidades

- 🔐 Autenticação de usuário com `express-session`
- 📋 Dashboard com opções de navegação protegida
- 📝 Registro de nova ocorrência
- 🔍 Pesquisa simulada de ocorrências
- 📊 Painel com ocorrências abertas e opção de finalizar
- 👤 Página de perfil do usuário

---

## 🚀 Tecnologias Utilizadas

| Tecnologia        | Função                                              |
|-------------------|-----------------------------------------------------|
| **Node.js**       | Ambiente de execução para JavaScript no backend     |
| **Express.js**    | Framework web leve para rotas e middlewares         |
| **HTML + CSS**    | Interface de usuário responsiva                     |
| **express-session** | Gerenciamento de sessões de usuário               |
| **body-parser**   | Leitura de dados enviados por formulários HTML      |

---

## 📁 Estrutura do Projeto

```
/project-root
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── perfil.html
│   ├── abrir-ocorrencia.html
│   ├── pesquisar-ocorrencia.html
│   └── painel-ocorrencias.html
│
└── server.js
└── package.json
└── package-lock.json
```

---

## 🛠️ Como Executar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/sisger.git
   cd sisger
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 🔐 Usuário de Teste

- **Usuário:** `admin`
- **Senha:** `123456`

---

## 📌 Decisões de Implementação

- Uso de **sessões** para autenticação simples.
- Organização dos arquivos HTML na pasta `public/`, servidos como estáticos.
- Middleware de proteção de rotas para impedir acesso não autorizado.
- Ocorrências simuladas inicialmente em HTML (sem banco de dados).
- Botão **"Finalizar"** em cada ocorrência aberta, com envio via formulário `POST`.

---

## 🔄 Futuras Melhorias

- Integração com banco de dados (SQLite, PostgreSQL ou MongoDB)
- Cadastro de usuários e controle de permissões
- CRUD completo das ocorrências
- Filtros de pesquisa e paginação
- Melhoria de segurança: XSS, CSRF, validações

---

## 📃 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e contribuir.

---

## 👨‍💻 Autor

Desenvolvido por [Anderson Miranda da Silva](https://github.com/Anderson-crunk)
