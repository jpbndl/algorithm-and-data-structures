# Big O Notation

To determine which one is the "best" code by comparing how it performs when dealing with lots of data.

It measures how much time and memory your algorithm needs as the input size grows larger.

## Why Does This Matter?

- **Precise vocabulary** - Important to have clear terms when discussing code performance
- **Trade-offs** - Useful for comparing different approaches and their benefits
- **Debugging** - When code slows down or crashes, identifying inefficient parts helps find pain points
- **Interviews** - It comes up in technical interviews!

---

## Timing Code

```javascript
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let start = performance.now();
addUpTo(1000000);
let end = performance.now();
console.log(`Time elapsed: ${(end - start) / 1000} seconds.`);
```

### Problems with Timing

- Different machines record different times
- Same machine records different times!
- Fast algorithms may not show precise measurements

## Counting Operations

Instead of timing, count the number of operations the computer performs.

### Approach 1: Loop-based
```javascript
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```
**Operations:** n additions, n assignments, n comparisons = **O(n)**

### Approach 2: Mathematical
```javascript
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
```
**Operations:** 1 multiplication + 1 addition + 1 division = **3 operations regardless of n**

> **Key Insight:** The second approach is more efficient because it performs the same number of operations no matter how large `n` gets!