function commonChars(words: string[]): string[] {
  let len = words.length;

  let prev: Record<number, number> = {};
  for (let i = 0; i < 26; i++) prev[i] = 0;

  let result: string[] = [];

  for (let i = 0; i < words[0].length; i++) {
    const code = words[0][i].charCodeAt(0) - "a".charCodeAt(0);
    prev[code]++;
  }

  for (let i = 1; i < len; i++) {
    let current: Record<number, number> = {};
    for (let i = 0; i < 26; i++) current[i] = 0;

    for (let j = 0; j < words[i].length; j++) {
      const code = words[i][j].charCodeAt(0) - "a".charCodeAt(0);
      current[code]++;
    }

    for (let j = 0; j < 26; j++) {
      current[j] = Math.min(current[j], prev[j]);
    }

    prev = current;
  }

  for (let i = 0; i < 26; i++) {
    const times = prev[i];
    const char = String.fromCharCode(i + "a".charCodeAt(0));

    for (let j = 0; j < times; j++) {
      result.push(char);
    }
  }

  return result;
}

export { commonChars };
