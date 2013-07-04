#!/bin/bash

log_path="../logs/";

workspace=$(dirname $(pwd))

NODE_ENV=production forever stop -p . -n 50 --pidFile ${workspace}/file.pid ${workspace}/app.js