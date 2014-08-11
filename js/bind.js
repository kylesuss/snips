// Bind a function to a context
// Call like this:
// this.method = bind(this.method, this);

var bind = function(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  };
};