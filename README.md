# Swag Labs End-to-End tests
E2E testing of Swag Labs Website using WebdriverIO with Test Driven Development and Page Object Model (POM) which is an architectural design pattern commonly used in test automation, especially for web applications. The primary goal of the Page Object Model is to enhance test code maintainability, readability, and reusability. Code is written in Typescript and Eslint is used for code linting and ensuring code quality.

# Table of contents

* [Getting Started](#get-started)
* [Setup Locally](#setup-locally)
* [WebdriverIO Configuration](#webdriverio-configuration)
* [Run the tests](#run-the-tests)
* [Generate testing report](#generate-testing-report)

## Getting Started
Make sure you have configured right your git account and you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Setup Locally
 ```bash
 git clone https://github.com/YlberPllana/WebdriverIO-Typescript-POM.git
 ```
 ```bash
 cd your-project
 ```
 ```bash
 cd src
 ```
## WebdriverIO Configuration
* Create a file named .env in the root directory of the project(inside src folder). Replace "your_swag_labs_username" and "your_swag_labs_password" with your actual credentials for the Swag Labs website.
 ```bash
{
    "USERNAME": "your_swag_labs_username",
    "PASSWORD": "your_swag_labs_password"
}
 ```

#### Install project dependencies:
 ```bash
 npm install
 ```
## How to run the tests
#### Running WebdriverIO Tests
 ```bash
 npm run test
 ```

### Generate Testing report:

To generate testing report run the command below after tests are executed:
```bash
 npm run report
 ```
HTML Report can be found at allure-report directory with this name: index.html.

### Find Problems

ESLint statically analyzes the code to find problems.

```bash
npm run lint
```