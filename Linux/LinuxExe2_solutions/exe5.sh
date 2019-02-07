#!/bin/bash

Filelist=$(ls -lt | grep -e ".new$")

#Getting first 2 line for first file

if [ "$Filelist" != "" ];then
	file=$(echo $Filelist | head -1)
	echo $file
	exit 0
else
	echo "There are no files with .new extension!"
	exit 1
fi


