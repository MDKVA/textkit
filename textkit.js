// MDKVA Textkit
// Simple string utilities for developers

// Converts a string to a URL-friendly slug
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Converts a string to Title Case
export function titleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// Truncates a string to a specified length and adds an ending if truncated
export function truncate(str, length = 50, ending = '...') {
  return str.length > length ? str.substring(0, length) + ending : str;
}

// Generates a random alphanumeric ID of specified length
export function randomID(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

// Reverses a given string
export function reverse(str) {
  return str.split('').reverse().join('');
}