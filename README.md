# Sip Finder App

## Overview

This project is a sip finder app built with Next.js 14 using the App Router. It allows users to search for cocktails, save their favorites, and view saved cocktails. The application also includes a login page to protect access to the cocktail pages with dummy users.

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

### Deployment

To deploy the application on Vercel, follow these steps:

1. Push your code to GitHub.
2. Sign in to Vercel and import your project from GitHub.
3. Configure build settings and environment variables if needed.
4. Deploy your project.

## Development Notes

- **Styling**: The project uses SASS for styling. CSS Modules are also implemented.
- **Routing**: Routes are managed in `routes.ts` with appropriate middleware for authentication and authorization.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that you follow the coding guidelines and include appropriate tests.

## Contact

If you have any questions or need further assistance, please contact:

- **Email**: enespcetin@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.