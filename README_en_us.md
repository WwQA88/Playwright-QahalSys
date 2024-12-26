
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

## GitHub Actions Integration

This project is integrated with [GitHub Actions](https://github.com/features/actions), allowing automated tests to run every time there is a push or a pull request for main branch to the repository. The CI (Continuous Integration) workflow ensures that tests are automatically executed, providing fast feedback on the state of the code.

To view the results, you can check the runs in the **Actions** tab of the repository.

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
