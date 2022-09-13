module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "airbnb",
        "plugin:prettier/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 14,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "require-jsdoc": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
    }
};
