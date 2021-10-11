# Find the Xth prime number, solution

```py
def primeChecker(n):
   if n <= 1: return False
   for x in range(2, n):
      if n % x == 0: return False
   return True

def primes(n):
   primes = []
   x = 1
   while len(primes) < n:
      if primeChecker(x): primes.append(x)
      x = x + 1
   return primes[-1]
```

## Example

```py
print(primes(88)) # will print the 88th prime number, 457
```