#!/bin/bash

log_path="../logs/";

workspace=$(dirname $(pwd))

[ -d ${log_path} ] || mkdir ${log_path}

echo ${workspace}

NODE_ENV=production forever start -p . -a -n 50 --pidFile ${workspace}/file.pid  -l ${log_path}forever.log -o ${log_path}out.log -e ${log_path}err.log ${workspace}/app.js

echo 'start node js forever for write note.'