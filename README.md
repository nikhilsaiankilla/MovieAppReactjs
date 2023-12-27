# IMDb Clone

Welcome to the IMDb Clone project! This is a web application created using React, Redux, React Router, and several other libraries to replicate some functionalities of the popular movie and TV show database, IMDb. The project utilizes modern web development technologies and practices to provide a seamless user experience.

## Demo

View the live demo: [IMDb Clone Live Demo](https://movie-app-react-js-nikhil.vercel.app/)

## Images

![Screenshot 2023-12-27 211521](https://github.com/nikhilsaiankilla/MovieAppReactjs/assets/109269825/404d6eeb-3dba-496a-bb80-aec7b93830a3)

![Screenshot 2023-12-27 211535](https://github.com/nikhilsaiankilla/MovieAppReactjs/assets/109269825/402dedba-a11d-4c7a-8b5e-5b709e07ec79)

![Screenshot 2023-12-27 211731](https://github.com/nikhilsaiankilla/MovieAppReactjs/assets/109269825/4f109ad3-c92b-4202-8c2b-d4498fa0981c)

## Features

- **Top Rated Movies and TV Shows:** Fetches data from the TMDB API to display top-rated movies and TV shows.
- **Infinite Search Page:** Implements an infinite scroll for a dynamically loading search page.
- **Lazy Loading Images:** Uses the `react-lazy-load-image-component` library for optimized image loading.
- **Video Playback:** Integrates the `react-player` library for playing movie trailers or clips.
- **Redux State Management:** Utilizes Redux and the `@reduxjs/toolkit` for efficient state management.
- **Routing:** Implements client-side routing using React Router for a seamless single-page application.

## Technologies Used

- React
- Redux
- React Router
- React Lazy Load Image Component
- React Infinite Scroll Component
- React Player
- React Redux
- React Router DOM
- Sass
- React Icons
- Axios
- Dayjs
- @reduxjs/toolkit

## Installation

1. Clone the repository: `git clone https://github.com/nikhilsaiankilla/MovieAppReactjs`
2. Change into the project directory: `cd MovieAppReactjs`
3. Install dependencies: `npm install`

## Usage

1. Run the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:5173`

## Project Structure

The project is organized as follows:

|-- src 
|-- components
|-- hooks
|-- pages
|-- store
|-- App.jsx
|-- main.jsx
|-- public
|-- .gitignore
|-- package.json
|-- README.md


- **components:** Contains reusable React components.
- **hooks:** Custom hooks for enhanced usability.
- **pages:** React components representing different pages of the application.
- **redux:** Redux store setup, actions, and reducers.

## Custom Hook

The project includes custom hooks for improved code organization and reusability. These can be found in the `src/hooks` directory.

- `useFetch`: This hook fetches the data by taking the url endpoints as a parameters.

## Acknowledgments

Special thanks to the contributors and libraries that made this project possible.

- TMDB API: [TMDB API DOCS](https://developer.themoviedb.org/docs)

## License

This project is open for personal use and learning purposes. You are free to clone, modify, and use the code as a reference for your own projects. However, please note that this project is not licensed for commercial use or redistribution without permission.



