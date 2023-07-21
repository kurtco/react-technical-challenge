# Welcome to Appspace React FE Challenge

Project created to use the public API of "Rick and Morty" using the Graphql version

The documentation followed is in the following link:
https://rickandmortyapi.com/documentation/#graphql

### My decisions:

**I used Graphql**

GraphQL is an alternative to REST APIs as it avoids multiple requests for specific information and allows clients (Front-end) to request only the necessary information. 

Additionally, it provides flexibility by allowing customers to define what data they want in a single query, improving efficiency and user experience.


**UI Design** 

I have decided to use styled-components since I saw that it was already configured in the project and used in the "sample" file, so I decided to keep it uniform. You will be able to see that each component has a styles file inside its respective folder following the **"styled-components"** syntax.

I set a UI adaptable to different screen sizes based on **"Flex-box"**. In the case of the "Search" component, I have decided to use **" media queries"** to perform a better user experience when it's used on mobile breakpoints

**Project structure**

It is created based on "clean architecture", as you can see the following modules:

* **Domain:** all the **"interfaces"** and **"enums"** files that allow setting the project to follow TypeScript’s core principles of checking the shape of the values, functions, data contract, etc. All the **"Labels"** of the app UI are framed in constants based on enums types


* **Application:** Inside the **"src"** folder, the project is divided into components and pages to have a code structure easy to understand and scale

* **Services:** Is the layer in charge of handling the Graphql Request and responses  **"(using a try-catch statement)"** 

**Good Practices**

* **Unit test:** I added 4 Unit tests using **React Testing Library** for the pages that make up the application, such as CharacterList and DetailsList. These tests cover basic scenarios and are written in **Behavior-Driven Development (BDD) style**, providing clear explanations of the application's behavior.




## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

---

#### If you feel the need to extend the webpack config you can use this command.

### `npm run eject`
