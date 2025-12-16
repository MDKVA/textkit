// MDKVA Textkit
// Simple string utilities for developers

/**
 * Ensures the input is treated as a string; returns an empty string if null, undefined, or not a string.
 * @param {*} str - The input value.
 * @returns {string} The input value as a string, or an empty string.
 */
function safeString(str) {
  if (typeof str === 'string') {
    return str;
  }
  if (str === null || str === undefined) {
    return '';
  }
  // Coerce other types (like numbers) to string, but ensure it's not a function or object
  if (typeof str.toString === 'function') {
      return String(str);
  }
  return '';
}

/**
 * Converts a string to a URL-friendly slug.
 * @param {*} str - The input string.
 * @returns {string} The slugified string.
 */
export function slugify(str) {
  const s = safeString(str);
  if (s === '') return '';

  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters (excluding spaces and hyphens)
    .replace(/[\s-]+/g, '-') // Replace spaces and multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Converts a string to Title Case.
 * @param {*} str - The input string.
 * @returns {string} The string in Title Case.
 */
export function titleCase(str) {
  const s = safeString(str);
  if (s === '') return '';

  return s.replace(/\w\S*/g, txt =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Truncates a string to a specified length and adds an ending if truncated.
 * @param {*} str - The input string.
 * @param {number} [length=50] - The maximum length of the string before truncation.
 * @param {string} [ending='...'] - The ending to append if truncated.
 * @returns {string} The truncated or original string.
 */
export function truncate(str, length = 50, ending = '...') {
  const s = safeString(str);

  // Robustness: ensure length is a valid, positive number
  const safeLength = (typeof length === 'number' && length > 0) ? length : 50;
  
  return s.length > safeLength ? s.substring(0, safeLength) + ending : s;
}

/**
 * Generates a random alphanumeric ID of specified length.
 * @param {number} [length=8] - The desired length of the random ID.
 * @returns {string} The random alphanumeric ID.
 */
export function randomId(length = 8) {
  // Robustness: ensure length is a valid, positive number
  const safeLength = (typeof length === 'number' && length > 0) ? length : 8;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  return Array.from({ length: safeLength }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
}

/**
 * Reverses a given string.
 * @param {*} str - The input string.
 * @returns {string} The reversed string.
 */
export function reverse(str) {
  const s = safeString(str);
  // Using spread operator for better handling of Unicode characters (optional, but modern)
  return [...s].reverse().join(''); 
}

/**
 * Converts entire string to lowercase.
 * @param {*} str - The input string.
 * @returns {string} The lowercase string.
 */
export function lowercase(str) {
  return safeString(str).toLowerCase();
}

/**
 * Converts entire string to uppercase.
 * @param {*} str - The input string.
 * @returns {string} The uppercase string.
 */
export function uppercase(str) {
  return safeString(str).toUpperCase();
}

/**
 * Checks if a string starts with a specific letter (case-insensitive).
 * @param {*} str - The input string.
 * @param {string} letter - The letter to check against.
 * @returns {boolean} True if the string starts with the letter.
 */
export function startsWithLetter(str, letter) {
  const s = safeString(str);
  if (s === '' || typeof letter !== 'string' || letter.length === 0) return false;
  
  // Use startsWith() for clearer intent and slightly better performance than charAt(0)
  return s.toLowerCase().startsWith(letter.toLowerCase());
}

/**
 * Repeats a string a certain number of times.
 * @param {*} str - The input string.
 * @param {number} [times=1] - The number of times to repeat the string.
 * @returns {string} The repeated string.
 */
export function repeatText(str, times = 1) {
  const s = safeString(str);
  // Robustness: ensure times is a non-negative number
  const safeTimes = (typeof times === 'number' && times >= 0) ? Math.floor(times) : 1;

  return s.repeat(safeTimes);
}

// Namespaced object export (kept for backward compatibility)
export const TextKit = {
  slugify,
  titleCase,
  truncate,
  randomId,
  reverse,
  lowercase,
  uppercase,
  startsWithLetter,
  repeatText
};

// camelCase convention... for those that don't prefer PascalCase
export const textKit = TextKit;