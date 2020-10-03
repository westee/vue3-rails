### Vue3 属性绑定
1. 默认所有属性绑定到根元素
2. inheritAttrs: false 取消默认绑定
3. $attrs或者context.attrs获取所有属性
4. 使用v-bind="$attrs"可以批量绑定数据
5. es6 const { aaa, ...bbb } = context.attrs