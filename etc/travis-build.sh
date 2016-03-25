#!/usr/bin/env bash

git remote add violet https://LexBot:${GH_TOKEN}@github.com/Lexteam/Violet >/dev/null
git pull -s subtree violet master >/dev/null
git subtree split -P violet -b violet
git push violet violet:master >/dev/null
