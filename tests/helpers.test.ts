import { getNumbers, getCode } from '../helpers';

describe("test getNumbers function", () => {
    it("should return '75' for getNumbers('SA7HY78H5F')", () => {
        expect(getNumbers('SA7HY78H5F')).toBe('7785');
    });

    it("should return '2' for getNumbers('sh2szzhgsdgytuwq')", () => {
        expect(getNumbers('sh2szzhgsdgytuwq')).toBe('2');
    });

    it("should return '' for getNumbers('aaajjjuu')", () => {
        expect(getNumbers('aaajjjuu')).toBe('');
    });
});

describe("test getCode function", () => {
    it("should return 75 for getCode('7785')", () => {
        expect(getCode('7785')).toBe(75);
    });

    it("should return 22 for getCode('2')", () => {
        expect(getCode('2')).toBe(22);
    });

    it("should return 0 for getCode('')", () => {
        expect(getCode('')).toBe(0);
    });
});
