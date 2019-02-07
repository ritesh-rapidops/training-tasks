#!/bin/bash/

space=0
master_cnt=0
listing() {
	path=$(ls $1 | grep -e '.txt$')
	for file in $path
        do
                for i in `seq 1 $space`
                do
                        if [ $i -eq $space ]; then
                                echo -n " |----"
                        else
                                echo -n "      "
                        fi
                done
                if [ -d $file ]; then
                        echo $file"/"" (directory)"
                        space=$(( $space+1 ))
                        listing $file
                        space=$(( $space-1 ))
                else
			cnt=$(grep -o 'Linux' $file | wc -l)
			master_cnt=$(( $master_cnt+$cnt ))
			echo "$file (count: $cnt)"
                fi
        done
}

listing "."
echo "\nTotal count of 'Linux': $master_cnt"

