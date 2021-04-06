#!/usr/bin/env sh

set -e
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:newfox79/interactive-pricing-component.git master:gh-pages

cd -