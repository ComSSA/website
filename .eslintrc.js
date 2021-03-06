module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "@nuxtjs"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    plugins: [
        "vue"
    ],
    rules: {
        "eol-last": [
            "error"
        ],
        indent: [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: [
            "error",
            "double"
        ],
        semi: [
            "error",
            "never"
        ]
    }
}
