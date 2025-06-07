const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'segredo_super_secreto',
  resave: false,
  saveUninitialized: true,
}));

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de autenticação
function authMiddleware(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login.html');
  }
}

// Página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Página de login
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// POST login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Usuário fixo de teste
  if (username === 'admin' && password === '123456') {
    req.session.user = username;
    return res.redirect('/dashboard');
  } else {
    return res.send('Usuário ou senha inválidos. <a href="/login.html">Tente novamente</a>');
  }
});

// Dashboard protegido
app.get('/dashboard', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// ✅ Novas rotas protegidas:

// Perfil de Usuário
app.get('/perfil', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});

// Abrir Ocorrência
app.get('/abrir-ocorrencia', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'abrir-ocorrencia.html'));
});

// Pesquisar Ocorrência
app.get('/pesquisar-ocorrencia', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pesquisar-ocorrencia.html'));
});

// Painel de Ocorrências Abertas
app.get('/painel-ocorrencias', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'painel-ocorrencias.html'));
});

// POST para finalizar uma ocorrência
app.post('/ocorrencias/finalizar', authMiddleware, (req, res) => {
  const { id } = req.body;
  console.log(`Finalizar ocorrência com ID: ${id}`);
  
  // Aqui você pode remover da lista ou atualizar no banco de dados (no futuro)
  
  res.send(`Ocorrência ${id} finalizada com sucesso. <a href="/painel-ocorrencias">Voltar</a>`);
});


// Rota de logout opcional
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Erro ao encerrar a sessão.');
    }
    res.redirect('/');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
