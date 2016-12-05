#!/bin/bash

rm -rf build
yarn run build
aws s3 cp build s3://pioluk.me/events
