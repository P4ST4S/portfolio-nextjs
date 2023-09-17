<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>portfolio-nextjs
</h1>
<h3>◦ Next-level portfolios, now on GitHub!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />

<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/P4ST4S/portfolio-nextjs?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/P4ST4S/portfolio-nextjs?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/P4ST4S/portfolio-nextjs?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/P4ST4S/portfolio-nextjs?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents

- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The project is a Next.js portfolio website for a freelance web developer. It showcases the developer's key qualities such as accessibility, creativity, and technical expertise. The website includes a homepage, contact page, and skills page, each with a well-structured and responsive design. The codebase leverages Next.js, Tailwind CSS, and various components to create a visually appealing and user-friendly portfolio that highlights the developer's skills and encourages potential clients to contact them.

---

## ⚙️ Features

| Feature                | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **⚙️ Architecture**    | The system follows a typical Next.js architecture, with pages, components, and API routes. It uses React for building UI components and Next.js for server-side rendering and routing. The codebase is well-organized and adheres to best practices.                                                               |
| **📖 Documentation**   | The codebase lacks comprehensive documentation. Some files have brief explanations, but there is no centralized documentation or guidelines for contributors. Improving the documentation would enhance the project's maintainability and onboarding process.                                                      |
| **🔗 Dependencies**    | The main dependencies in the codebase are Next.js, Tailwind CSS, and React. Next.js powers the server-side rendering and routing functionality, Tailwind CSS provides styling, and React is used for building UI components. These dependencies are crucial for the system's operation.                            |
| **🧩 Modularity**      | The codebase is modular, with separate components and pages for different sections of the website. Components such as Header and Layout are reusable and interchangeable, promoting code reusability and maintainability. However, more granular component breakdown could improve modularity further.             |
| **✔️ Testing**         | The codebase lacks any explicit testing strategies or tools. There are no unit tests, integration tests, or end-to-end tests present. Implementing a testing framework, such as Jest or React Testing Library, would help ensure code quality and prevent regressions.                                             |
| **⚡️ Performance**    | As the codebase follows best practices of Next.js, it leverages server-side rendering to improve initial load times and performance. Built-in optimizations of Next.js, such as code splitting and dynamic imports, can further improve page load times. Overall, the codebase has potential for good performance. |
| **🔐 Security**        | The codebase does not explicitly address security measures. Secure coding practices, authentication mechanisms, and data validation should be implemented to protect against common security threats like SQL injection and Cross-Site Scripting attacks.                                                          |
| **🔀 Version Control** | The codebase is hosted on GitHub and utilizes Git for version control. The use of Git allows for collaboration among multiple contributors, branch management, and version tracking. Proper usage of branches and pull requests can facilitate collaboration and maintain code quality.                            |
| **🔌 Integrations**    | The codebase does not show any direct integrations with external systems or services. However, it can easily be extended to incorporate integrations with APIs or databases by adding custom API routes or modifying pages to consume external data.                                                               |
| **📶 Scalability**     | The Next.js architecture, with its focus on server-side rendering and efficient page rendering, provides a good foundation for scalability. Additionally, the modular design of the codebase facilitates future growth and scalability by allowing for easy addition or modification of components and pages.      |

---

## 📂 Project Structure

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [next.config.js](https://github.com/P4ST4S/portfolio-nextjs/blob/main/next.config.js)         | The code configures the Next.js project to adhere to strict React mode. It exports the configuration to be used in the project.                                                                                                                                                                                                                    |
| [postcss.config.js](https://github.com/P4ST4S/portfolio-nextjs/blob/main/postcss.config.js)   | This code is a configuration file that allows for the use of Tailwind CSS and Autoprefixer as plugins in a JavaScript-based build system or bundler. It helps to generate and optimize CSS files for web development projects.                                                                                                                     |
| [tailwind.config.ts](https://github.com/P4ST4S/portfolio-nextjs/blob/main/tailwind.config.ts) | This code defines a Tailwind CSS configuration, including the content to be processed, theme customization for colors and backgrounds, and plugins for typography and UI components.                                                                                                                                                               |
| [Header.tsx](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\components\Header.tsx)  | This code defines the Header component for a website. It includes a responsive navbar with a logo, title, and menu items. The menu can be toggled by clicking a button, revealing a dropdown menu with additional links. The code also handles the logic for opening and closing the menu.                                                         |
| [Layout.tsx](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\components\Layout.tsx)  | The code exports a module called Layout that is a React functional component. It takes a prop called children, which is of type React.ReactNode. The returned component renders a Header component at the top and wraps the children with a main element, creating a basic layout structure.                                                       |
| [index.tsx](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\pages\index.tsx)         | This code is for a homepage component that displays information about a freelance web developer. It includes sections for showcasing key qualities such as accessibility, creativity, and technical expertise. The component uses the Next.js framework and the Image component to handle images. The code is well-structured and responsive.      |
| [\_app.tsx](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\pages_app.tsx)           | This code is a Next.js app where the `App` component serves as the entry point. It renders a layout and passes the `Component` and `pageProps` as children. The `Layout` component provides a consistent structure to each page. The code also imports a CSS file for global styling and uses the Lexend font from Google Fonts on the entire app. |
| [\_document.tsx](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\pages_document.tsx) | This code is a Next.js document component that sets the HTML structure, head tag content, and includes a Header component. It also sets the language attribute to French and includes a favicon. The body consists of the Main and NextScript components, which render the main content and Next.js scripts, respectively.                         |
| [hello.ts](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\pages\api\hello.ts)       | This code is a Next.js API route that handles HTTP requests. It expects a request and responds with a JSON object containing the name "John Doe".                                                                                                                                                                                                  |
| [index.tsx](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\pages\contact\index.tsx) | This code defines a Next.js functional component called ContactIndex. It returns a heading element saying "Contact".                                                                                                                                                                                                                               |
| [index.tsx](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\pages\skills\index.tsx)  | This code exports a functional component called SkillsIndex, which displays a heading for the "Skills" page. The NextPage type is used from the "next" module, indicating that this component is intended for use in Next.js projects.                                                                                                             |
| [globals.css](https://github.com/P4ST4S/portfolio-nextjs/blob/main/src\styles\globals.css)    | The code utilizes the Tailwind CSS framework to provide a core set of base styles, reusable components, and utility classes for efficiently building and styling a website.                                                                                                                                                                        |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

> - [Node JS](https://nodejs.org/en/)
> - [NPM (Node Package Manager)](https://www.npmjs.com/)

### 📦 Installation

1. Clone the portfolio-nextjs repository:

```sh
git clone https://github.com/P4ST4S/portfolio-nextjs
```

2. Change to the project directory:

```sh
cd portfolio-nextjs
```

3. Install the dependencies:

```sh
npm install
```

### 🎮 Using portfolio-nextjs

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests

```sh
npm test
```

---

## 🗺 Roadmap

> - [x] `Task 1: Implement Header`
> - [x] `Task 2: Implement Home page`
> - [ ] `Task 3: Implement Skill page`
> - [ ] `Task 4: Implement Contact page`
> - [ ] `Task 5: Implement Projects exemple`

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `MIT License`. See the [LICENSE](./LICENSE) file for additional info.

---

## 👏 Acknowledgments

> - `Google guidelines inspire me alot.`

---
