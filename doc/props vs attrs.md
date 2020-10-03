### props vs attrs
1. props 先声明才能在setup(props)取到。
```js
props: {
    xxx:{}
},
setUp(props, context){
    console.log({...rest})
}
```
2. props不包含事件,attrs中包含。
3. props中未声明的属性会添加到attrs中。
4. props支持String外的其他类型，attrs只有String类型。