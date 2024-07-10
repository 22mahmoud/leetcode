---
date: Jun 13, 2024
submission: https://leetcode.com/problems/generate-parentheses/submissions/1287502655
id: 0022
slug: generate-parentheses
title-prefix: Generate Parentheses
leetcode-template: true
keywords:
  - backtracking
description: |
  <p>Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.</p>

  <p><strong class="example">Example 1:</strong></p>
  <pre><strong>Input:</strong> n = 3
  <strong>Output:</strong> ["((()))","(()())","(())()","()(())","()()()"]
  </pre><p><strong class="example">Example 2:</strong></p>
  <pre><strong>Input:</strong> n = 1
  <strong>Output:</strong> ["()"]
  </pre>
  <p><strong>Constraints:</strong></p>

  <ul>
    <li><code>1 &lt;= n &lt;= 8</code></li>
  </ul>
---

### Optimal (Backtracking)

- base case check: if `current` length is equal to `2 * n`, so we are done and push the answer to
  the result
- do the check before add `)` or `(` so can keep our backtracking clean

```ts {include="index.ts"}

```
