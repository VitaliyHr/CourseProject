import { createField } from "../../Field/Field";
import { Input } from "../../FormInput/Input";

export const pushInputInState = (type,count,s) => {
  let arr1=[];
  let arr2=[];
  if (type === 'a') {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        arr1.push(createField('', `${type}${i}${j}`, "number", Input, [], s.item))
      }
    }
    return arr1
  }
  else {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        arr2.push(createField('', `${type}${i}${j}`, "number", Input, [], s.item))
      }
    }
    return arr2
  }
}