// export function curry (fn, arity = fn.length) {
// 	return (function nextCurried(prevArgs) {
//     	return function curried(nextArg) {
// 			var args = prevArgs.concat([nextArg]);
// 			if (args.length >= arity) {
// 				return fn(...args);
// 			}
// 			else {
// 				return nextCurried(args);
// 			}
// 		};
//     })([]);
// }

// The above implementation of curry does work correctly sometimes...

export const curry = (fn, seen = []) => (...args) =>
  fn.length === args.length + seen.length
    ? fn(...seen, ...args)
    : curry(fn, [...seen, ...args])


export const map = curry((fn, value) => value.map(fn))

export const reduce = curry((reducerFn, initialValue, arr) => {
    var accumulator = (initialValue === undefined) ? undefined : initialValue
    for (let i = 0; i < arr.length; i++) {
        if (accumulator !== undefined) 
            accumulator = reducerFn(accumulator, arr[i], i, arr)
        else 
            accumulator = arr[i]
    }
    return accumulator
})


export const reduceRight = curry(
    (reducerFn, initialValue, arr) =>  reduce(arr.reverse(), reducerFn, initialValue)
)

export const reduceObj = curry(
    (reducerFn, initialValue, o) => Object.values(o).reduce(reducerFn, initialValue)
)

export const filterObj = curry((predicateFn, o) => {
    const newObj = {}
    
	Object.keys(o)
	.filter(key => predicateFn(o[key]))
    .forEach(key => newObj[key] = o[key])
    
	return newObj
})

export const pipe = (...fns) => i => fns.reduce((acc, fn) => fn(acc), i)

export const compose = (...fns) => i => fns.reduceRight((acc, fn) => fn(acc), i)

export const objectFromEntries = (arr) => Object.assign({}, ...arr.map(([k, v]) => ({ [k]: v }) ))

export const binary = fn => curry((arg1,arg2) => fn(arg1,arg2))

export const unary = fn => arg1 => fn(arg1)
