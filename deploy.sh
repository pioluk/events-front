#!/bin/bash

rm -rf build
yarn run build
aws s3 sync ./build s3://pioluk.me/events
