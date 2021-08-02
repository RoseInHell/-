const PENDING = 'pending';
const FUIFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {

  status = PENDING;
  value = null;
  reason = null;

  onFulFilledCallbacks = []
  onRejectedCallbacks = []

  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch(error) {
      this.reject(error);
    }
  }
  
  static resolve (parameter) {
    if (parameter instanceof MyPromise) {
      return parameter
    }

    return new MyPromise(resolve => {
      resolve(parameter);
    })
  }

  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    })
  }

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FUIFILLED;
      this.value = value;

      while (this.onFulFilledCallbacks.length) {
        const callback = this.onFulFilledCallbacks.shift();
        callback(value)
      }
    }
  }

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;

      while (this.onRejectedCallbacks.length) {
        const callback = this.onRejectedCallbacks.shift();
        callback(reason)
      }
    }
  }

  then = (onFulFilled, onRejected) => {

    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
    onRejected = typeof onratechange === 'function' ? onRejected : reason => { this.reason }

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FUIFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulFilled(this.value);
            resolvePromise(promise2,x, resolve, reject);
          } catch (error) {
            reject(error)
          }
        })

      } else if (this.status === REJECTED) {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);

          } catch (error) {
            reject(error)
          }
        })

      } else if (this.status === PENDING) {
        this.onFulFilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulFilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          })
        });
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          })
        });
      }
    })

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

module.exports = MyPromise;