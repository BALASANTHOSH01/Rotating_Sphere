# [Rotating Sphere](https://github.com/BALASANTHOSH01/Rotating_Sphere)

## Introduction

The **Rotating Sphere** project is a visually captivating 3D animation created using **React Three Fiber (R3F)**. The sphere features dynamic, pulsating animations, giving it a lifelike and interactive appearance. This project demonstrates the powerful combination of React and Three.js to create engaging 3D graphics on the web. Built as part of my internship at Infomarki, this project highlights my learning and application of advanced web development techniques using modern libraries and frameworks.

## Technology Used

- **React**: A JavaScript library for building user interfaces.
- **React Three Fiber (R3F)**: A React renderer for Three.js, allowing the creation of 3D graphics using React components.
- **Three.js**: A JavaScript library that makes creating 3D graphics on the web easier.
- **Simplex Noise**: A method for creating natural-looking noise patterns, used in the sphere's animation.
- **Vercel**: A platform for deploying and hosting web applications.

## Installation and Setup

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/rotating-sphere.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd rotating-sphere
    ```

3. **Install the dependencies**:
    ```sh
    npm install
    ```

4. **Start the development server**:
    ```sh
    npm start
    ```

The project will be running at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code for the project.
  - `components/Projects`: Contains React components used in the project.
    - `Nucleus.jsx`: Defines the nucleus component with dynamic, pulsating animation.
  - `App.jsx`: The main React component that sets up the scene and renderer.
  - `index.js`: The entry point of the application.

## Animation Details

The sphere animation is achieved using a combination of Three.js geometries and materials, enhanced with Simplex Noise for natural-looking distortions. The nucleus component uses an icosahedron geometry, and its vertices are dynamically altered to create a pulsating effect.

## Live Demo

Check out the live demo of the project [here](https://rotating-sphere.vercel.app/).


## Conclusion

This project showcases the potential of combining React with Three.js to create stunning 3D graphics on the web. It serves as an excellent example of leveraging modern web technologies to build interactive and engaging user experiences.

---

Feel free to explore, modify, and use this project as a reference for your own 3D web development endeavors. Contributions and feedback are welcome!
