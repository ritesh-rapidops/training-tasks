#!/bin/bash/

Filelist=$(ls)

for file in $Filelist;do
	if [ -f $file ];then
		check=$(grep -e '[-*$—]' $file)
		if [ "$check" != "" ];then
			echo "Deleting " $file "..."
			`sleep 1`
			`rm $file`
		fi
	fi
done


