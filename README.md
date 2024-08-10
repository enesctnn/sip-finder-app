# Sip Finder App

## Overview

This project is a sip finder app built with Next.js 14 using the App Router. It allows users to search for cocktails,add to cocktail basket, save/remove their favorites, and view saved cocktails. The application also includes a login page to protect access to the cocktail pages with dummy users.

## Features

1. **Cocktail Search Page**:
   - A search bar to find cocktails by name.
   - Display search results with cards.
   - Each card includes a button to add the cocktail to a basket.
   - Basket is stored in RAM and cleared on page refresh.
   - A save button to add cocktails to the saved cocktails page.

2. **Saved Cocktails Page**:
   - Displays cocktails that have been saved by the user.
   - Cards are persistent and do not clear after a page refresh.
   - Users can remove cocktails from the list.

3. **Login Page**:
   - A login page with a dummy user.
   - Redirects users to the auth page if they try to access cocktail pages without being logged in.

4. **Middleware for Authentication and Authorization**:
   - **API Authentication**: Middleware checks for routes that require authentication and handles API requests accordingly.
   - **Authentication Protection**: Routes defined as authentication-required are protected, redirecting logged-in users away from the login page and ensuring only authenticated users can access protected pages.
   - **Public Routes**: Public routes are accessible without authentication.
   - **Redirection**: Users are redirected to the login page if they attempt to access protected routes without being logged in. Authenticated users are redirected away from the login page if they attempt to access it.

---

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/enesctnn/sip-finder-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd sip-finder-app
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Set up environment variables:

    Create a `.env` file in the root of the project and add the following line:

    ```env
    NEXT_PUBLIC_THE_COCKTAIL_DB_URL=https://www.thecocktaildb.com/api/json/v1/1/
    ```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser to see the application in action.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

The Sip Finder App is deployed on Vercel. You can access the live application at [https://sip-finder-app.vercel.app/](https://sip-finder-app.vercel.app/).

---

## Development Notes

- **Styling**: The project uses SASS for styling. CSS Modules are also implemented.
- **Routing**: Routes are managed in `routes.ts` with appropriate middleware for authentication and authorization.

---

## Dependencies

- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)** [![npm](https://img.shields.io/npm/v/@hookform/resolvers)](https://www.npmjs.com/package/@hookform/resolvers)
- **[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)** [![npm](https://img.shields.io/npm/v/@tanstack/react-query)](https://www.npmjs.com/package/@tanstack/react-query)
- **[axios](https://www.npmjs.com/package/axios)** [![npm](https://img.shields.io/npm/v/axios)](https://www.npmjs.com/package/axios)
- **[next](https://www.npmjs.com/package/next)** [![npm](https://img.shields.io/npm/v/next)](https://www.npmjs.com/package/next)
- **[react](https://www.npmjs.com/package/react)** [![npm](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/react)
- **[react-dom](https://www.npmjs.com/package/react-dom)** [![npm](https://img.shields.io/npm/v/react-dom)](https://www.npmjs.com/package/react-dom)
- **[react-hook-form](https://www.npmjs.com/package/react-hook-form)** [![npm](https://img.shields.io/npm/v/react-hook-form)](https://www.npmjs.com/package/react-hook-form)
- **[react-icons](https://www.npmjs.com/package/react-icons)** [![npm](https://img.shields.io/npm/v/react-icons)](https://www.npmjs.com/package/react-icons)
- **[zod](https://www.npmjs.com/package/zod)** [![npm](https://img.shields.io/npm/v/zod)](https://www.npmjs.com/package/zod)

## DevDependencies

- **[@types/node](https://www.npmjs.com/package/@types/node)** [![npm](https://img.shields.io/npm/v/@types/node)](https://www.npmjs.com/package/@types/node)
- **[@types/react](https://www.npmjs.com/package/@types/react)** [![npm](https://img.shields.io/npm/v/@types/react)](https://www.npmjs.com/package/@types/react)
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)** [![npm](https://img.shields.io/npm/v/@types/react-dom)](https://www.npmjs.com/package/@types/react-dom)
- **[eslint](https://www.npmjs.com/package/eslint)** [![npm](https://img.shields.io/npm/v/eslint)](https://www.npmjs.com/package/eslint)
- **[eslint-config-next](https://www.npmjs.com/package/eslint-config-next)** [![npm](https://img.shields.io/npm/v/eslint-config-next)](https://www.npmjs.com/package/eslint-config-next)
- **[sass](https://www.npmjs.com/package/sass)** [![npm](https://img.shields.io/npm/v/sass)](https://www.npmjs.com/package/sass)
- **[typescript](https://www.npmjs.com/package/typescript)** [![npm](https://img.shields.io/npm/v/typescript)](https://www.npmjs.com/package/typescript)

---

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that you follow the coding guidelines and include appropriate tests.

## Contact

If you have any questions or need further assistance, please contact:

- **Email**: enespcetin@gmail.com

Thank you for your attention to this matter.

Best regards,

Muhammet Enes Çetin

Project Owner & Sole Developer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.