/**
 * Encodes a UTF-8 string to Base64
 *
 * @example
 * encode('hello') // 'aGVsbG8='
 */
export function encode(text: string): string {
  return btoa(String.fromCharCode(...new TextEncoder().encode(text)));
}
