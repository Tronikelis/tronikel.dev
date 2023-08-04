export default function yearsBetweenDates(a: Date, b: Date): number {
    const years = Math.abs(a.getTime() - b.getTime()) / (1e3 * 60 * 60 * 24 * 365);

    return years;
}
