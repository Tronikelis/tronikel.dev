const path = require("node:path");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        path.join(
            __dirname,
            "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
        ),
        path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
        path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui()],
};
