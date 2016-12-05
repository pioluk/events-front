#!/bin/bash

rm -rf build
yarn run build
aws --region eu-central-1 s3 sync ./build s3://pioluk.me/events
