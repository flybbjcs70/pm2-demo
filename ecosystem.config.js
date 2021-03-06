module.exports = {
  apps : [{
    "name": "pm2-demo",
    "script": "index.js",
    "env": {
      "COMMON_VARIABLE" : "true",
    },
    "env_production": {
      "NODE_ENV": "production"
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['81.68.232.54'],
      port: "22",
      ref  : 'origin/master',
      repo : 'git@github.com:flybbjcs70/pm2-demo.git',
      path : '/github-resposity/pm2-demo',
      "pre-setup" : "echo 'this is a pre-setup command'",
       "post-setup":"ls -la",

      'pre-deploy-local': "echo 'This is a pre-deloy-local command'",
      'post-deploy' : 'git pull origin master && npm install && pm2 start 0',
    }
  }
};
