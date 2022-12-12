/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  ...require('@guilhermedeandrade/prettier-config'),
}
