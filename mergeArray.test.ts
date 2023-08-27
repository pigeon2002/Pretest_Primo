import merge from "./mergeArray";

describe('mergeArray', () => {
    it('should merge two sorted arrays', () => {
        const collection_1 = [1,3,5,7];
        const collection_2 = [2,4,6,8];
        const merged = merge(collection_1, collection_2);
        expect(merged).toEqual([1,2,3,4,5,6,7,8]);
    });
});