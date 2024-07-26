#!/bin/zsh

ps -x | grep "node.*\.js$" | awk '{print $1}' | xargs kill