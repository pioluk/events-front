#!/bin/bash

rm -rf build
NODE_ENV=production webpack --config webpack.config.js
aws --region eu-central-1 s3 cp --recursive ./build s3://pioluk.me
