let room = { number: 23 };

let meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room, // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return key == 'occupiedBy' ? undefined : value;
  }),
);

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

/* 我们可以使用一个函数代替数组作为 replacer。

该函数会为每个 (key,value) 对调用并返回“已替换”的值，该值将替换原有的值。如果值被跳过了，则为 undefined。

在我们的例子中，我们可以为 occupiedBy 以外的所有内容按原样返回 value。对于 occupiedBy，下面的代码返回 undefined */
