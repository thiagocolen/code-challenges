// 2. Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    const transformList = (list) => {
        return list
            .reverse()
            .reduce((previousValue, currentValue) => {
                return Number(`${previousValue}${currentValue}`);
            })
    }

    const result = transformList(l1) + transformList(l2);

    return result
        .toString()
        .split('')
        .map((item) => {
            return Number(item);
        })
        .reverse();
};

console.log(
    addTwoNumbers(
        [2, 4, 3],
        [5, 6, 4]
    )
)