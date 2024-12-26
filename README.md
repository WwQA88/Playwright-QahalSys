
# Playwright-QahalSys

## Demonstrativo de Testes Automatizados para a Plataforma QahalSys

### Sobre a Plataforma

QahalSys é uma plataforma de gestão de igrejas desenvolvida pela Robertsoft. Ela oferece ferramentas para auxiliar a administração de organizações religiosas, como:

- Controle de membros e gestão de eventos.
- Arrecadação de dízimos e ofertas.
- Comunicação entre liderança e membros.
- Organização de atividades como cultos, reuniões e escalas de voluntários.

Este repositório demonstra testes automatizados relacionados ao login na plataforma QahalSys.

---

## Requisitos

- **Node.js 18 (LTS)**  [Baixe aqui o instalador oficial](https://nodejs.org/pt/download/prebuilt-installer).

- **Conta no GitHub**  Necessária para realizar o fork do projeto.

---

## Configuração do Ambiente

1. Instale o Node.js 18 (LTS).
2. Acesse sua conta no GitHub.
3. Faça o fork deste repositório.
4. Clone o projeto no diretório desejado:
   ```bash
   git clone <URL-DO-REPOSITÓRIO>
   ```
5. No terminal, instale as dependências necessárias no diretório do projeto:
   ```bash
   npm install
   ```
6. Instale o Playwright:
   ```bash
   npm init playwright@latest
   ```
   Durante a instalação, responda às perguntas da seguinte forma:
   - Do you want to use TypeScript or JavaScript?: **Typescript**
   - Where to put your end-to-end tests?: **e2e**
   - Add a GitHub Actions workflow?: **y**
   - Install Playwright browsers (can be done manually via 'npx playwright install')?: **y**
   - `diretorio/playwright.config.ts` already exists. Override it?: **n**
   - `diretorio/.github/workflows/playwright.yml` already exists. Override it?: **n**
   - `diretorio/tests-examples/demo-todo-app.spec.ts` already exists. Override it?: **n**

---

## Execução dos Testes

1. **Executar testes em modo Headless (sem interface gráfica):**
   ```bash
   npx playwright test
   ```

2. **Executar testes com interface gráfica (modo Headed):**
   ```bash
   npx playwright test --headed
   ```

3. **Visualizar o relatório de testes:**
   ```bash
   npx playwright show-report
   ```

---

## Integração com GitHub Actions

Este projeto está integrado ao [GitHub Actions](https://github.com/features/actions), permitindo a execução de testes automatizados sempre que houver um novo push ou um "pull request" para a branch "main" no repositório. O fluxo de trabalho de CI (Integração Contínua) garante que os testes sejam executados automaticamente, oferecendo feedback rápido sobre o estado do código.

Para conferir os resultados, você pode verificar as execuções no repositório, acessando a seção **Actions**.

---

## Detalhes dos Testes

Este repositório inclui três especificações (specs):

- **Home**: Valida o acesso à página inicial do site.
- **Login**: Testa combinações de credenciais válidas e inválidas.
- **Active Session**: Verifica se uma sessão de login já está ativa em outro local, permitindo prosseguir ou abortar a sessão.

### Limitações

- **Limite de Usuários/Workers**: Testes com múltiplos usuários ao mesmo tempo podem gerar erros de acesso devido à tentativa de violação de chave primária. Havendo erros, ajuste o limite de workers editando o arquivo `playwright.config.ts`:
  ```typescript
  workers: process.env.CI ? 1 : undefined;
  ```
  Altere `undefined` para `1`.

- **Navegadores Disponíveis**: Por padrão, os navegadores **Chromium**, **Firefox**, **Microsoft Edge**, **Google Chrome**, **WebKit**, **Mobile Chrome** e **Mobile Safari** estão disponíveis. Entretanto, somente o navegador **Chromium** está habilitado. Para ajustar essa configuração, edite o arquivo `playwright.config.ts`.

- **Testes Mobile**: Não há suporte para múltiplos navegadores em testes mobile nesta versão.

---

### Evidências

- **Tipos**: As evidências são gravadas em screenshot e vídeo. Caso queira remover ou deixar apenas uma delas habilitada, edite o arquivo `playwright.config.ts`, removendo as opções `screenshot: 'on'` e `video: 'on'`.

---

## Contribuições

Contribuições são bem-vindas! Para reportar problemas ou sugerir melhorias, abra uma [issue](https://github.com/suarepo/issues) neste repositório.

---

### Contato

Para dúvidas ou suporte, entre em contato com [wwalmeida88@gmail.com](mailto:wwalmeida88@gmail.com).
