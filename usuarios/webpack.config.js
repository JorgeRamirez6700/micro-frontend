const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "usuarios",
      filename: "remoteEntry.js",
      exposes: {
        "./UsuariosApp": "./src/App",
      },
    }),
  ],
};
