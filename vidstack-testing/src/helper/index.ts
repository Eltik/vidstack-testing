export function capitalize(s: string) {
    s = s.toLowerCase();
    return s && (s[0]?.toUpperCase() ?? "") + s.slice(1);
}

export function truncate(text: string, maxLength: number) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
    } else {
        return text;
    }
}