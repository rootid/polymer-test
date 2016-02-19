#!/bin/bash


get_stable_node() {

  which node 2>/dev/null

  if [ ${?} -eq 0 ]
  then
      echo "Node alerady installed."
      return 0
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




readonly reqNPMlist=(polyserve grunt bower bower vulcanize)

install_required () {


  for npm_ in ${reqNPMlist[@]}  
  do
     which $npm_ 2>/dev/null 1>&2
     if [ ${?} -eq 0 ]
     then
        echo "$npm_ already installed."
     else
        echo "installing $npm_"
        npm install -g $npm_
        [ ${?} ] && echo "Installation $npm_ completed."
     fi 
  done
}

get_stable_node
install_required 
