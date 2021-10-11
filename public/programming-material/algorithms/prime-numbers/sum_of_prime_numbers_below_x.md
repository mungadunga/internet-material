# Find the sum of the prime nu

```py
import math

def primeChecker(n):
   if n <= 1: return False
   for x in range(2, int(math.sqrt(n)) + 1):
      if n % x == 0: return False
   return True

def primeSumBelow(limit):
   values = []
   for x in range(limit):
      if primeChecker(x): values.append(x)
   return sum(values)

print(primeSumBelow(2000000))
```