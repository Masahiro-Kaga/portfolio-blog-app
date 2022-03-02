const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return{
      env:{
        mongodb_username:'masahirokaga',
        mongodb_password:'masaMongo',
        mongodb_clustername:'cluster0',
        mongodb_database:'blogappDatabase-dev'
      }
    }
  }
  return{

    env:{
      mongodb_username:'masahirokaga',
      mongodb_password:'masaMongo',
      mongodb_clustername:'cluster0',
      mongodb_database:'blogappDatabase'
    }
  }
}
