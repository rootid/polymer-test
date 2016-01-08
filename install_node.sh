#!/bin/sh


get_stable_node() {

  which node 2>/dev/null

  if [ ${?} -eq 0 ]
  then
      echo "Please remove existing node"
      exit 1
  fi

  if [ -z ${USER} ]
  then  

    echo "    "
    echo "Please set USER env variable as export USER='username'"
    echo "    "
    exit 1
  fi

  sudo chown -R $USER /usr/local/ 
  git clone https://github.com/tj/n
  cd n
  make install
  n stable
  ln -s /usr/local/bin/node /usr/bin/node
  rm -rf n

}



#get_stable_node

install_required () {

  npm install -g polyserve
  npm install -g grunt-cli

}


install_required 
