# Separate a number

```py
def separate(number, separator, intTrueStrFalse):
   return [int(number[i:i+separator]) for i in range(0, len(number), separator)] if intTrueStrFalse else [number[i:i+separator] for i in range(0, len(number), separator)]
```
```txt
Example:

myList = 123212
separate(myList, 1, True) # [1, 2, 3, 2, 1, 2]
separate(myList, 1, False) # ['1', '2', '3', '2', '1', '2']
separate(myList, 2, True) # [12, 32, 12]
```