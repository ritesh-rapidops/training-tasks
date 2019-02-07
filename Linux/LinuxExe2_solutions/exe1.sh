#!/bin/bash/

files=$(ls)

for file in $files; do
	if [ -f $file ];then
		echo "Renaming..."
		`mv $file $file".new"`
	fi
done

echo "all files renamed"

