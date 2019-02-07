#!/bin/bash/

# Diplaying first and last 10 lines of file

echo "---First 10 lines---"
echo "\n$(head -10 $1)"
echo "\n\n---Last 10 lines---"
echo "\n$(tail -10 $1)"

# Displaying line 3 to 8 of the file

echo "\n\n---Lines 3 to 8---"
echo "\n$(head -8 $1 | tail -6)"

# Dispalying 7 lines and from second line in reverse manner


echo "\n\n---1st line and 2 to 7 lines in reverse manner"
echo -n "\n$(head -1 $1)"
echo "\n$(head -7 $1 | tac | head -6)"
