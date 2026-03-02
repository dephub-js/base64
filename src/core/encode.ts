/**
 * Encodes a UTF-8 string to Base64
 *
 * @example
 * encode('hello') // 'aGVsbG8='
 */
export const encode = (text: string): string =>
  btoa(String.fromCharCode(...new TextEncoder().encode(text)));
