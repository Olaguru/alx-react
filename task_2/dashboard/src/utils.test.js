import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('Utilds function test', () => {
    //Test for getFullYear
    test('getFull year should return the current year', () => {
        expect(getFullYear()).toBe(2024);
    });

    //Test for getFooterCopy
    test('getFooterCopy should return "Holberton School" when args is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('getFooterCopy should return "Holberton School main dashboard" when args is true', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    //Test for getLatestNotification
    test('getLatestNotification shoukld return the correct string', () => {
        const expectedString = '<strong>Urgent requirement</strong> - complete by EOD'
        expect(getLatestNotification()).toBe(expectedString);

    })
})
