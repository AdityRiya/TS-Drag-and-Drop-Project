export function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjdescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjdescriptor;
}
//# sourceMappingURL=autobind.js.map