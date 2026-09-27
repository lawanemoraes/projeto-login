# Projeto Login – Git e GitHub
Página de login desenvolvida com **HTML, CSS e JavaScript**, versionada com Git
seguindo o fluxo de branches `main`, `develop`, `feature/`, `hotfix/` e `release/`.
**Versão atual:** v1.1.0

## Funcionalidades
- **Login** (`index.html`): validação de campos vazios e de credenciais.
- **Dashboard** (`dashboard.html`): painel com menu e boas-vindas ao usuário logado.
- **Cadastro** (`cadastro.html`): cadastro de novos usuários com validação.

## Como usar
1. Abra o `index.html` no navegador (ou acesse o site hospedado no GitHub Pages).
2. Faça login com o usuário de teste:
 - Usuário: `adm`
 - Senha: `123`
3. Após o login, você será redirecionado ao dashboard.

## Estrutura de arquivos
```
├── index.html
├── style.css
├── script.js
├── dashboard.html
├── dashboard.css
├── cadastro.html
├── cadastro.js
└── README.md
```
## Estratégia de branches
| Branch      | Finalidade                     |
| ----------- | ------------------------------ |
| `main`      | Código estável e publicado     |
| `develop`   | Desenvolvimento ativo          |
| `feature/*` | Novas funcionalidades          |
| `hotfix/*`  | Correções urgentes em produção |
| `release/*` | Preparação de novas versões    |

## Histórico da versão
- **v1.0.0**: tela de login com validação.
- **v1.1.0**: dashboard, cadastro, correção da tag `<button>` e ajustes visuais.