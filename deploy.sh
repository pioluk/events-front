#!/bin/bash

if [ $DEPLOY = false ]
then
  echo "Skipping deployment"
  exit 0
fi

rm -rf build
NODE_ENV=production node_modules/.bin/webpack --config webpack.config.js
aws --region eu-central-1 s3 cp --recursive ./build s3://pioluk.me
