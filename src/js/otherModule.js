export default class TestClass {
    constructor(foo = "foo", bar = "bar") {
        this.foo = foo;
        this.bar = bar;

        this.someMethod = this.someMethod.bind(this);
    }

    someMethod() {
        return this.foo;
    };
}

export const testHolder = {
    testClass1: new TestClass(),
    testClass2: new TestClass("foobar"),
};
