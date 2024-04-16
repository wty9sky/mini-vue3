export const TO_DISPLAY_STRING = Symbol('toDisplayString')
export const CREATE_ELEMENT_VNODE = Symbol('createElementVNode');

// Symbol 定义的变量不可以遍历 所以转一下
export const helperMapName = {
    [TO_DISPLAY_STRING]: 'toDisplayString',
    [CREATE_ELEMENT_VNODE]: 'createElementVNode'
}