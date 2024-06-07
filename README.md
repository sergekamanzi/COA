#COA figma

they is a file that show all pictures and how i hovered them in css

# COA challenges

Question 1: Check for Contiguous Subarray Sum
Function: hasContiguousSubarray(arr, target)

Description:
This function determines if there exists a contiguous subarray within the given array arr that sums up to the target value target. It returns true if such a subarray exists, otherwise false.

Algorithm:

1.Initialize start to 0 and currentSum to 0.
2.Iterate through the array with the end pointer, adding each element to currentSum.
3.If currentSum exceeds the target, increment the start pointer and subtract the value at start from currentSum until currentSum is less than or equal to the target.
4.If currentSum equals the target at any point, return true.
5.If the loop completes without finding a subarray that sums to the target, return false.

Question 2: Transform String Based on Length
Function: transformString(input)

Description:
This function transforms a string based on its length:

1.If the length is divisible by 3, reverse the entire string.
2.If the length is divisible by 5, replace each character with its ASCII code.
3.If the length is divisible by both 3 and 5 (i.e., divisible by 15), reverse the string and then replace each character with its ASCII code.
4.If none of these conditions are met, return the original string.
