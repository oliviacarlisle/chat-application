export const allEmojis = (str: string) => {
  let len = 0;
  let allPass = true;
  for (const char of str) {
    const codePoint = char.codePointAt(0);
    if (!isEmoji(codePoint)) {
      allPass = false;
    }
    len++;
  }

  return {
    len,
    allPass,
  };
};

export const isEmoji = (codePoint: number) => {
  const keyboardCharsRegex = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]};:'",<.>/?\\| ]+$/;
  // Unicode code point ranges for emojis
  const emojiRanges = [
    [0x1f600, 0x1f64f], // Emoticons
    [0x1f300, 0x1f5ff], // Miscellaneous Symbols and Pictographs
    [0x1f680, 0x1f6ff], // Transport and Map Symbols
    [0x1f1e6, 0x1f1ff], // Flags
    [0x2600, 0x26ff], // Miscellaneous Symbols
    [0x2700, 0x27bf], // Dingbats
    [0x1f900, 0x1f9ff], // Supplemental Symbols and Pictographs
    [0x1f700, 0x1f77f], // Alchemical Symbols
    [0x1f780, 0x1f7ff], // Geometric Shapes Extended
    [0x1f800, 0x1f8ff], // Supplemental Arrows-C
    [0x1fa00, 0x1fa6f], // Chess Symbols
    [0x1fa70, 0x1faff], // Symbols and Pictographs Extended-A
    [0x1fad0, 0x1fadf], // Symbols for Legacy Computing
  ];

  if (keyboardCharsRegex.test(String.fromCodePoint(codePoint))) return false;

  // Check if the code point falls within any emoji range
  return (
    /\p{Emoji}/u.test(String.fromCodePoint(codePoint)) ||
    emojiRanges.some(([start, end]) => codePoint >= start && codePoint <= end)
  );
};
