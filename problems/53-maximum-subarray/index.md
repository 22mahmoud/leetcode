---
date: Jun 08, 2024
submission: https://leetcode.com/problems/maximum-subarray/submissions/1280962431
id: 0053
slug: maximum-subarray
title-prefix: Maximum Subarray
template:
  leetcode: true
keywords:
  - kadane-algorithm
description: |
  <p>Given an integer array <code>nums</code>, find the <span data-keyword="subarray-nonempty">subarray</span> with the largest sum, and return <em>its sum</em>.</p>

  <p><strong class="example">Example 1:</strong></p>

  <pre>
  <strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]
  <strong>Output:</strong> 6
  <strong>Explanation:</strong> The subarray [4,-1,2,1] has the largest sum 6.
  </pre>

  <p><strong class="example">Example 2:</strong></p>

  <pre>
  <strong>Input:</strong> nums = [1]
  <strong>Output:</strong> 1
  <strong>Explanation:</strong> The subarray [1] has the largest sum 1.
  </pre>

  <p><strong class="example">Example 3:</strong></p>

  <pre>
  <strong>Input:</strong> nums = [5,4,-1,7,8]
  <strong>Output:</strong> 23
  <strong>Explanation:</strong> The subarray [5,4,-1,7,8] has the largest sum 23.
  </pre>

  <p><strong>Constraints:</strong></p>

  <ul>
    <li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
    <li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
  </ul>

  <p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.</p>
---

### Optimal

So, to solve the maximum subarray problem, we have to use [Kadane's algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm) by keep track of
the latest max and current max until we get finish the array.

```ts {include="index.ts"}

```
