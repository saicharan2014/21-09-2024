// // task 1
// let a='    sai'
// let b="charan    "
// let c=a.trimStart().concat(" ",b.trimEnd()).toUpperCase();
// console.log(c);
// task2
// let x="sai RAM charan";
// let y=x.slice(4,7).charAt((x.slice(4,7).length)-1);
// let z=x.slice(4,7).toLocaleUpperCase();
// console.log(y);
// console.log(z);
// // task3
// let p="hi"
// let q="hello world";
// let r=p.concat(" " ,q).toUpperCase().charAt((p.concat(" ",q).length)-2);
// console.log(r);
// // task4
// let m="helloworld"
// let n="ramsai"
// let o=m.charAt(0).toUpperCase()+m.slice(1,3)+" "+n.slice(-3,-1)+n.charAt((n.length)-1).toUpperCase();
// console.log(o);
// // task 5
// let str="     hello world    "
// let str1=(str.trim()).charAt(0).toUpperCase()+(str.trim()).slice( 1,(str.trim().length)-1)+str.trim().charAt((str.trim().length)-1).toUpperCase();
// let str2=str1.slice(0,6).concat("universe");
// console.log(str1);
// console.log(str2);
// // task 6
let word="hello there how are you";
console.log(word.split(" ").indexOf("are"));


