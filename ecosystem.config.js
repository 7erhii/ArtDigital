module.exports = {
  apps : [{
    name: 'ArtDigital',
    script: 'npm',
    args: 'start',
    watch: true,
    env: {
      NODE_ENV: 'production',
    }
  },
  {
    name: 'gitscript',
    script: '/home/artupdate/server.js',
    watch: true,
    env: {
      NODE_ENV: 'production',
    }
  }]
};
