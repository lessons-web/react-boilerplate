export function _development() {
  return import.meta.env.MODE === 'development';
}

export const isDev = _development();