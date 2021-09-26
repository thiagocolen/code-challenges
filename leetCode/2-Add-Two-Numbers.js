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


    


  for (const [key, value] of Object.entries(l1)) {
    console.log(`${key}: ${value}`);
    if (key === "next") {
      debugger
    }
  }

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
