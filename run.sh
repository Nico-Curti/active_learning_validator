#!/bin/bash

red=$(tput setaf 196)
green=$(tput setaf 10)
reset=$(tput sgr0)

# get the directory of the current bash script (independently by the execution path)
scriptdir=$(dirname $(readlink /proc/$$/fd/255))

if [ -z $(which python) ]; then

  echo -e "${red}Python NOT FOUND${reset}"
  echo -e "Please install python before use this script with the command 'sudo apt install python'"

else

  python -m http.server 5000 --directory $scriptdir -b 127.0.0.1 >/dev/null 2>&1 &
  google-chrome http://127.0.0.1:5000

fi