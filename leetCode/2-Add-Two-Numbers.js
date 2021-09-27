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

const listNode1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const listNode2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

var addTwoNumbers = function (l1, l2) {
  const extractFromListNode = (obj, arr) => {
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
      if (key === "val") {
        arr.push(value);
      }
      if (key === "next" && value !== null) {
        extractFromListNode(value, arr);
      }
    }
    return arr;
  };

  const l1Arr = extractFromListNode(l1, []);
  const l2Arr = extractFromListNode(l2, []);

  const transformList = (list) => {
    return list.reverse().reduce((previousValue, currentValue) => {
      return Number(`${previousValue}${currentValue}`);
    });
  };

  const result = transformList(l1Arr) + transformList(l2Arr);

  const resultArr = result
    .toString()
    .split("")
    .map((item) => {
      return Number(item);
    })
    .reverse();

  const makeLinkedList = (arr, obj) => {
    if (arr.length > 0) {
      obj.value = arr.shift();
      obj.next = makeLinkedList(arr, obj);
      debugger
    }

  };

  const linkedList = makeLinkedList(resultArr, {});
  debugger
};

console.log(addTwoNumbers(listNode1, listNode2));

// var addTwoNumbers = function (l1, l2) {
//   const transformList = (list) => {
//     return list.reverse().reduce((previousValue, currentValue) => {
//       return Number(`${previousValue}${currentValue}`);
//     });
//   };

//   const result = transformList(l1) + transformList(l2);

//   return result
//     .toString()
//     .split("")
//     .map((item) => {
//       return Number(item);
//     })
//     .reverse();
// };
