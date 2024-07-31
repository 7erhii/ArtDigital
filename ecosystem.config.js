module.exports = {
  apps: [
    {
      name: "ArtDigital",
      script: "npm",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
