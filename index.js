let list = { value: 1 };
list.next = { value: 2 };
list.next = { value: 3 };
list.next = { value: 4 };
ist.next = { value: 5 };

// 将新值添加到链表头部
list = { value: 'new item', next: list };

// 要从中间删除一个值，可以修改前一个元素的 next：
// list.next = list.next.next;
