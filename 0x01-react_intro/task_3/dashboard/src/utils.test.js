import { getFullYear } from "./utils";
import { getFooterCopy } from "./utils";
import { getLatestNotification } from "./utils";


test('Test getFullYear', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test('Test getFullYear', () => {
    expect(getFullYear()).toBe(2024);
});

test('Test getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('ALX');
})

test('Test getFooterCopy', () => {
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
})

test('Test for getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})
