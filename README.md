# mini-vue3

> 实现 Vue3 核心逻辑的最简模型，本项目参考 [Vue3](https://github.com/vuejs/core) 、[mini-vue地址](https://github.com/cuixiaorui/mini-vue) 实现。

## Tasking

- 响应式核心模块
- 运行时

**reactivity**

- [x] reactive 的实现
- [x] ref 的实现
- [x] readonly 的实现
- [x] computed 的实现
- [x] track 依赖收集
- [x] trigger 触发依赖
- [x] 支持 isReactive
- [x] 支持嵌套 reactive
- [x] 支持 toRaw
- [x] 支持 effect.scheduler
- [x] 支持 effect.stop
- [x] 支持 isReadonly
- [x] 支持 isProxy
- [x] 支持 shallowReadonly
- [x] 支持 proxyRefs

**runtime-core**

- [x] 支持组件类型
- [x] 支持 element 类型
- [x] 初始化 props
- [x] setup 可获取 props 和 context
- [x] 支持 component emit
- [x] 支持 proxy
- [x] 可以在 render 函数中获取 setup 返回的对象
- [x] nextTick 的实现
- [x] 支持 getCurrentInstance
- [x] 支持 provide/inject
- [x] 支持最基础的 slots
- [x] 支持 Text 类型节点
- [x] 支持 $el api
- [x] watch、watchEffect 的实现

**runtime-dom**

- [x] 支持 custom renderer

**vue**

- [x] compileToFunction 函数
