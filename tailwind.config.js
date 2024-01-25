import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            colors: {
                // Text
                "primary-text": "#393D4E",
                "secondary-text": "#677487",
                "tertiary-text": "#7A7A7A",
                "accent-text": "#AAAAAA",
                // Grey
                "grey-50": "#FFFFFF",
                "grey-100": "#F9FAFB",
                "grey-200": "#EAECF0",
                "grey-300": "#D4DBEA",
                "grey-400": "#98A2B3",
                "grey-500": "#667085",
                "grey-600": "#475467",
                "grey-700": "#344054",
                "grey-800": "#1D2939",
                "grey-900": "#101828",
                // Primary
                "primary-50": "#FFF5F3",
                "primary-100": "#E6E7FD",
                "primary-200": "#C9CDFB",
                "primary-300": "#A8AEF9",
                "primary-400": "#7E8AF7",
                "primary-500": "#3D56F5",
                "primary-600": "#374DDB",
                "primary-700": "#2F43BE",
                "primary-800": "#27369B",
                "primary-900": "#1B266E",
                // Secondary
                "secondary-50": "#EBD8FE",
                "secondary-100": "#EBD8FE",
                "secondary-200": "#D5B1FE",
                "secondary-300": "#BC8AFC",
                "secondary-400": "#A56CF9",
                "secondary-500": "#803DF5",
                "secondary-600": "#622CD2",
                "secondary-700": "#481EB0",
                "secondary-800": "#32138E",
                "secondary-900": "#220B75",
                // Error
                "error-100": "#FEF0EF",
                "error-200": "#FEE4E2",
                "error-300": "#FDA29B",
                "error-400": "#F97066",
                "error-500": "#F04438",
                "error-600": "#D92D20",
                "error-700": "#B42318",
                "error-800": "#912018",
                "error-900": "#7A271A",
                // Warning
                "warning-100": "#FFFAEB",
                "warning-200": "#FEF0C7",
                "warning-300": "#FEDF89",
                "warning-400": "#FEC84B",
                "warning-500": "#FDB022",
                "warning-600": "#F79009",
                "warning-700": "#DC6803",
                "warning-800": "#B54708",
                "warning-900": "#93370D",
                // Success
                "success-100": "#ECFDF3",
                "success-200": "#D1FADF",
                "success-300": "#A6F4C5",
                "success-400": "#6CE9A6",
                "success-500": "#32D583",
                "success-600": "#12B76A",
                "success-700": "#027A48",
                "success-800": "#05603A",
                "success-900": "#054F31",
                // Info
                "info-100": "#EDF7FE",
                "info-200": "#E0F2FE",
                "info-300": "#B9E6FE",
                "info-400": "#7CD4FD",
                "info-500": "#36BFFA",
                "info-600": "#0BA5EC",
                "info-700": "#0086C9",
                "info-800": "#1769AA",
                "info-900": "#065986",
            },
            fontFamily: {
                sans: [
                    'Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    { fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' },
                ],
            },
            boxShadow: {
                "1": "0px 4px 45px 0px rgba(0, 0, 0, 0.10)",
            },
        },
    },

    plugins: [forms],
};
