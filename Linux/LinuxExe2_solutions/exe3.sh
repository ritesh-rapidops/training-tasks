#!/bin/bash/

read -p "Enter a number: " num1
read -p "Enter another number: " num2

echo "\nAddition: $num1 + $num2 = $(( $num1+$num2 ))"
echo "Subtraction: $num1 - $num2 = $(( $num1-$num2 ))"
echo "Multiplication: $num1 * $num2 = $(( $num1*$num2 ))"
echo "Division: $num1 / $num2 = $(( $num1/$num2 ))\n"


if [ $num1 -gt $num2 ];then
	echo "Max number is $num1"
	echo "Min number is $num2"
else
	echo "Max number is $num2"
	echo "Min number is $num1"
fi

if [ $num1 -gt 0 ];then
	echo "\nNumber 1 is positive"
elif [ $num1 -eq 0 ];then
	echo "Number 1 is zero"
else
	echo "Number 1 is negative"
fi

if [ $num2 -gt 0 ];then
        echo "Number 2 is positive"
elif [ $num2 -eq 0 ];then
        echo "Number 2 is zero"
else
        echo "Number 2 is negative\n"
fi 
