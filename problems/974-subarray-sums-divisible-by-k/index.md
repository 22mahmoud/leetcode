---
date: Jun 09, 2024
submission: https://leetcode.com/problems/subarray-sums-divisible-by-k/submissions/1283145121
id: 0974
slug: subarray-sums-divisible-by-k
title-prefix: Subarray Sums Divisible by K
template:
  leetcode: true
keywords:
  - prefix-sum
description: |
  <p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the number of non-empty <strong>subarrays</strong> that have a sum divisible by </em><code>k</code>.</p>

  <p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

  <p><strong class="example">Example 1:</strong></p>

  <pre>
  <strong>Input:</strong> nums = [4,5,0,-2,-3,1], k = 5
  <strong>Output:</strong> 7
  <strong>Explanation:</strong> There are 7 subarrays with a sum divisible by k = 5:
  [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
  </pre>

  <p><strong class="example">Example 2:</strong></p>

  <pre>
  <strong>Input:</strong> nums = [5], k = 9
  <strong>Output:</strong> 0
  </pre>

  <p><strong>Constraints:</strong></p>

  <ul>
    <li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
    <li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
    <li><code>2 &lt;= k &lt;= 10<sup>4</sup></code></li>
  </ul>
---

### Optimal

```ts {include="index.ts"}

```

### Brute-force

```ts {include="bruteforce.ts"}

```
