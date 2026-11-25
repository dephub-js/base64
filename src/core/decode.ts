/**
 * Decodes a Base64 string back to UTF-8
 *
 * @example
 * decode('aGVsbG8=') // 'hello'
 */
export function decode(base64: string): string {
  return new TextDecoder().decode(
    Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)),
  );
}
