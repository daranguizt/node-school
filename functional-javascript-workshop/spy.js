function Spy(target, method) {
    let result = {
        count: 0
    }
    let oldFunction = target[method];
    target[method] = function(){
        let args = Array.prototype.slice.call(arguments);
        result.count++;
        return oldFunction.apply(target, args);
    }
    return result;
}

module.exports = Spy;
