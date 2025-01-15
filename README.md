
# Playwright-QahalSys

## Automated Test Demonstration for the QahalSys Platform

### About the Platform

QahalSys is a church management platform developed by Robertsoft. It offers tools to assist in the administration of religious organizations, such as:

- Member management and event organization.
- Tithes and offerings collection.
- Communication between leadership and members.
- Organizing activities like services, meetings, and volunteer schedules.

This repository demonstrates automated tests related to the login on the QahalSys platform.

---

## Requirements

- **Node.js 18 (LTS)**  [Download the official installer here](https://nodejs.org/en/download/).

- **GitHub Account**  Required to fork the project.

---

## Environment Setup

1. Install Node.js 18 (LTS).
2. Log in to your GitHub account.
3. Fork this repository.
4. Clone the project into the desired directory:
   ```bash
   git clone <REPOSITORY-URL>
   ```
5. In the terminal, install the necessary dependencies in the project directory:
   ```bash
   npm install
   ```
6. Install Playwright:
   ```bash
   npm init playwright@latest
   ```
   During the installation, answer the questions as follows:
   - Do you want to use TypeScript or JavaScript?: **Typescript**
   - Where to put your end-to-end tests?: **e2e**
   - Add a GitHub Actions workflow?: **y**
   - Install Playwright browsers (can be done manually via 'npx playwright install')?: **y**
   - `directory/playwright.config.ts` already exists. Override it?: **n**
   - `directory/.github/workflows/playwright.yml` already exists. Override it?: **n**
   - `directory/tests-examples/demo-todo-app.spec.ts` already exists. Override it?: **n**

---

## Running Tests

1. **Run tests in Headless mode (without graphical interface):**
   ```bash
   npx playwright test
   ```

2. **Run tests with graphical interface (Headed mode):**
   ```bash
   npx playwright test --headed
   ```

3. **View test report:**
   ```bash
   npx playwright show-report
   ```

---

## GitHub Actions Integration

This project is integrated with [GitHub Actions](https://github.com/features/actions), enabling automated test execution whenever a new push or pull request is made to the "main" branch of the repository. The CI (Continuous Integration) workflow ensures that tests are automatically executed, providing quick feedback on the code status.

To check the results, you can view the executions in the repository by accessing the **Actions** section.

---

## Test Details

This repository includes three specifications (specs):

- **Home**: Validates access to the site's homepage.
- **Login**: Tests valid and invalid credential combinations.
- **Active Session**: Checks if a login session is already active in another location, allowing the session to proceed or abort.

### Limitations

- **User/Worker Limit**: Tests with multiple users simultaneously may generate access errors due to primary key violation attempts. If errors occur, adjust the worker limit by editing the `playwright.config.ts` file:
  ```typescript
  workers: process.env.CI ? 1 : undefined;
  ```
  Change `undefined` to `1`.

- **Available Browsers**: By default, the **Chromium**, **Firefox**, **Microsoft Edge**, **Google Chrome**, **WebKit**, **Mobile Chrome**, and **Mobile Safari** browsers are available. However, only the **Chromium** browser is enabled. To adjust this setting, edit the `playwright.config.ts` file.

- **Mobile Tests**: Multiple browsers are not supported for mobile tests in this version.

---

### Evidence

- **Types**: Evidence is recorded as screenshots and videos. To remove or enable only one of them, edit the `playwright.config.ts` file, removing the options `screenshot: 'on'` and `video: 'on'`.

---

## Contributions

Contributions are welcome! To report issues or suggest improvements, open an [issue](https://github.com/suarepo/issues) in this repository.

---

### Contact

For questions or support, contact [wwalmeida88@gmail.com](mailto:wwalmeida88@gmail.com).
