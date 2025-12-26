# Midnight Industrial Analog Clock

A sophisticated, aesthetically pleasing analog clock application built with React. This project features a "Midnight Industrial" design with a glassmorphism interface, real-time geolocation tracking, and smooth, precise hand movements.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.x-61dafb.svg)

## 🌟 Features

-   **Analog Interface**: A fully custom CSS-driven analog clock face.
-   **Precision Movement**: Smooth hand rotations for hours, minutes, and seconds, including sub-second precision.
-   **Geolocation**: Automatic detection and display of the user's current latitude and longitude.
-   **Digital Backup**: A secondary digital time display for quick reference.
-   **Midnight Industrial Aesthetic**:
    -   Deep radial gradient backgrounds.
    -   Glassmorphism effects (blur, transparency).
    -   Glowing accents for visibility.
    -   Responsive design.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v14.0.0 or higher)
-   npm (v6.0.0 or higher)

## 🚀 Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd clock-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 💻 Usage

### Development Server
To start the app in development mode:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Production Build
To build the app for production to the `build` folder:
```bash
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.

### Running Tests
To launch the test runner in interactive watch mode:
```bash
npm test
```

## ⚙️ Configuration

The application uses standard `react-scripts`.
-   **Environment Variables**: You can create a `.env` file in the root for environment-specific variables (prefixed with `REACT_APP_`).

## 🏗️ Project Structure

```
clock-app/
├── public/          # Static assets
├── src/
│   ├── App.css      # Component styling (Glassmorphism & Layout)
│   ├── App.js       # Main Application Logic (Clock & Geolocation)
│   ├── App.test.js  # Unit tests
│   ├── index.css    # Global styles & Variables
│   └── index.js     # Entry point
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
