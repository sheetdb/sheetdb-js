#!/bin/sh

printf "Start building\n"
uglifyjs src/* --compress --mangle -o build/sheetdb-js.js
echo "Done."
