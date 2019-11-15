#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr):
    # Write your code here
    sums = [0, 0]
    ltr = 0
    rtl = len(arr) - 1

    for i in range (len(arr)):
        sums[0] = sums[0] + arr[i][ltr]
        ltr += 1

        sums[1] = sums[1] + arr[i][rtl]
        rtl -= 1

    return abs(sums[0] - sums[1])  


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
