import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                'purple-dark': {
                    extend: 'light', // <- inherit default values from dark theme
                    colors: {
                        background: 'white',
                        foreground: '#181818',
                        primary: {
                            DEFAULT: '#2B2791',
                            foreground: '#ffffff',
                        },
                        focus: '#F182F6',
                    },
                    layout: {
                        disabledOpacity: '0.3',
                        radius: {
                            small: '4px',
                            medium: '6px',
                            large: '8px',
                        },
                        borderWidth: {
                            small: '1px',
                            medium: '2px',
                            large: '3px',
                        },
                    },
                },
            },
        }),
    ],
};
export default config;
