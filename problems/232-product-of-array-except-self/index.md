---
date: Jun 03, 2024
submission: https://leetcode.com/problems/product-of-array-except-self/submissions/1277840199
id: 0238
slug: product-of-array-except-self
title-prefix: Product of Array Except Self
template:
  leetcode: true
keywords:
  - prefix-sum
description: |
  <p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.</p>

  <p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</p>

  <p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time and without using the division operation.</p>

  <p><strong class="example">Example 1:</strong></p>
  <pre><strong>Input:</strong> nums = [1,2,3,4]
  <strong>Output:</strong> [24,12,8,6]
  </pre><p><strong class="example">Example 2:</strong></p>
  <pre><strong>Input:</strong> nums = [-1,1,0,-3,3]
  <strong>Output:</strong> [0,0,9,0,0]
  </pre>
  <p><strong>Constraints:</strong></p>

  <ul>
    <li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
    <li><code>-30 &lt;= nums[i] &lt;= 30</code></li>
    <li>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li>
  </ul>

  <p><strong>Follow up:</strong>&nbsp;Can you solve the problem in <code>O(1)</code>&nbsp;extra&nbsp;space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)</p>
---

### Optimal

```ts {include="index.ts"}

```

### Brute-Force

```ts {include="bruteforce.ts"}

```
