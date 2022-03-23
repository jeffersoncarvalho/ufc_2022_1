var HelloWorldOO = /** @class */ (function () {
    function HelloWorldOO() {
    }
    HelloWorldOO.prototype.sayHello = function () {
        console.log("Hello World OO!");
    };
    return HelloWorldOO;
}());
var hello = new HelloWorldOO(); //alocar memória pro objeto HelloWorldOO
hello.sayHello();
