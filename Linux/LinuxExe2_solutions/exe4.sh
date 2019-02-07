#!/bin/bash/

read -p "Enter a number: " n
echo
echo "-----FOR LOOP-----\n"
for i in $(seq 1 $n);do
	echo -n $i " "
done
echo "\n"
nWhile=1
echo "-----WHILE LOOP-----\n"
while [ $nWhile -le $n ];do
	echo -n $nWhile " "
	nWhile=$(( $nWhile+1 ))
done
echo "\n"

nUntil=1
echo "-----UNTIL LOOP-----\n"
until [ $nUntil -gt $n ];do
      echo -n $nUntil " "
      nUntil=$(( $nUntil+1 ))
done
echo "\n"



