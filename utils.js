/**
 * Utility helpers for Activa Asesores
 */

/**
 * Combine class names (simple cn utility without clsx dependency)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format currency in euros
 */
export function formatEuro(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate text to a given length
 */
export function truncate(str, length = 100) {
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + '…';
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate Spanish phone number
 */
export function isValidPhone(phone) {
  return /^[6-9]\d{8}$/.test(phone.replace(/\s/g, ''));
}
