/**
 *Allowed chars: latin, numbers, $, and _
 */
export function hasOnlyAllowedChars(str) {
    return /^[\w$]+$/.test(str);
}
