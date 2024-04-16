// h 就是去调用我们的创建虚拟节点
// 要按照 runtime-dom -> runtime-core -> reactivity 的顺序引入包
// 这个也一个 源码拔高点
export * from "../reactivity";
export { getCurrentInstance, registerRuntimerCompiler } from '../runtime-core/component';
export { toDisplayString } from '../shared';
export { inject, provide } from './apiInject';
export { h } from "./h";
export { renderSlots } from './helpers/renderSlots';
export { createRenderer } from './renderer';
export { nextTick } from './scheduler';
export { createElementVNode, createTextVNode } from './vnode';
