(pt-br)

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

- **Node.js 18 (LTS)**\
  [Baixe aqui o instalador oficial](https://nodejs.org/pt/download/prebuilt-installer).

- **Conta no GitHub**\
  Necessária para realizar o fork do projeto.

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

## Detalhes dos Testes

Este repositório inclui três especificações (specs):

- **Home**: Valida o acesso à página inicial do site.
- **Login**: Testa combinações de credenciais válidas e inválidas.
- **Active Session**: Verifica se uma sessão de login já está ativa em outro local, permitindo prosseguir ou abortar a sessão.

### Limitações

- **Limite de Usuários/Workers**:\
  Testes com múltiplos usuários podem gerar erros de acesso devido à tentativa de violação de chave primária.\
  Para ajustar o limite de workers, edite o arquivo `playwright.config.ts`:

  ```typescript
  workers: process.env.CI ? 1 : undefined;
  ```

  Altere `undefined` para `1`.

- **Navegadores Disponíveis**:\
  Por padrão, os navegadores **Chromium**, **Firefox** e **WebKit** estão habilitados.\
  Para ajustar essa configuração, edite o arquivo `playwright.config.ts`.

- **Testes Mobile**:\
  Não há suporte para múltiplos navegadores em testes mobile nesta versão.

---

## Contribuições

Contribuições são bem-vindas!\
Para reportar problemas ou sugerir melhorias, abra uma [issue](https://github.com/suarepo/issues) neste repositório.

---

### Contato

Para dúvidas ou suporte, entre em contato com [wwalmeida88@gmail.com](mailto:wwalmeida88@gmail.com).


(en-us)


# Playwright-QahalSys

## Automated Testing Demonstration for the QahalSys Platform

### About the Platform

QahalSys is a church management platform developed by Robertsoft. It provides tools to assist in the administration of religious organizations, such as:

- Member management and event scheduling.
- Tithing and offering collection.
- Communication between leadership and members.
- Organization of activities like worship services, meetings, and volunteer schedules.

This repository demonstrates automated tests related to logging into the QahalSys platform.

---

## Requirements

- **Node.js 18 (LTS)**  [Download the official installer here](https://nodejs.org/en/download/prebuilt-installer).

- **GitHub Account**  Required to fork the project.

---

## Environment Setup

1. Install Node.js 18 (LTS).
2. Log into your GitHub account.
3. Fork this repository.
4. Clone the project to your desired directory:
   ```bash
   git clone <REPOSITORY-URL>
   ```
5. In the terminal, install the required dependencies in the project directory:
   ```bash
   npm install
   ```

---

## Running the Tests

1. **Run tests in Headless mode (no graphical interface):**

   ```bash
   npx playwright test
   ```

2. **Run tests with a graphical interface (Headed mode):**

   ```bash
   npx playwright test --headed
   ```

3. **View the test report:**

   ```bash
   npx playwright show-report
   ```

---

## Test Details

This repository includes three specifications (specs):

- **Home**: Validates access to the website's home page.
- **Login**: Tests combinations of valid and invalid credentials.
- **Active Session**: Checks if a login session is already active elsewhere, allowing either to proceed or abort the session.

### Limitations

- **User/Worker Limit**:  Tests with multiple users may result in access errors due to attempts to violate the primary key constraint.  To adjust the worker limit, edit the `playwright.config.ts` file:

  ```typescript
  workers: process.env.CI ? 1 : undefined;
  ```

  Change `undefined` to `1`.

- **Available Browsers**:  By default, **Chromium**, **Firefox**, and **WebKit** browsers are enabled.  To adjust this configuration, edit the `playwright.config.ts` file.

- **Mobile Tests**:  No support for multiple browsers in mobile tests in this version.

---

## Contributions

Contributions are welcome!To report issues or suggest improvements, please open an [issue](https://github.com/yourrepo/issues) in this repository.

---

### Contact

For questions or support, contact [wwalmeida88@gmail.com](mailto:wwalmeida88@gmail.com).



