# Array Methods: Mutating vs Immutable

| Action | Mutating Example | Immutable Example |
|--------|------------------|-------------------|
| Add to end | `arr.push(4)` | `[...arr, 4]` |
| Add to beginning | `arr.unshift(0)` | `[0, ...arr]` |
| Remove from end | `arr.pop()` | `arr.slice(0, -1)` |
| Remove from beginning | `arr.shift()` | `arr.slice(1)` |
| Insert/remove at index | `arr.splice(2, 0, "new")` | `arr.toSpliced(2, 0, "new")` |
| Replace at index | `arr[2] = "new"` | `arr.with(2, "new")` |
| Sort | `arr.sort()` | `[...arr].sort()` |
| Reverse | `arr.reverse()` | `[...arr].reverse()` |
| Fill with value | `arr.fill(0)` | `new Array(5).fill(0)` |
| Copy within array | `arr.copyWithin(0, 3, 4)` | `[...arr.slice(3, 4), ...arr.slice(1)]` |

## Notes:
- **ES2023** introduced `toSorted()`, `toReversed()`, `toSpliced()` as direct immutable versions
- **Spread operator** `[...arr]` creates a shallow copy before mutation
- **Immutable methods** return new arrays, leaving the original unchanged