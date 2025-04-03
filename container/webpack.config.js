const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        dashboard: "dashboard@http://localhost:8081/remoteEntry.js",
        usuarios: "usuarios@http://localhost:8082/remoteEntry.js",
      },
    }),
  ],
};
