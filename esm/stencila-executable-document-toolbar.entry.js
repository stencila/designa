import { h, r as registerInstance, H as Host } from './index-364020fb.js';
import { c as createCommonjsModule$1, a as commonjsGlobal, b as commonjsRequire } from './_commonjsHelpers-8a9f3b18.js';
import { C as Ce, p as p$1 } from './schema-7962e868.js';
import { _ as _function } from './function-8e2dda94.js';
import { a as toastController, T as ToastPositions, b as ToastTypes } from './toastController-7495e3c9.js';
import { f as factory } from './index-04ebbea1.js';

// -------------------------------------------------------------------------------------
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
function pipe$1(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        default:
            var ret = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                ret = arguments[i](ret);
            }
            return ret;
    }
}

function ap$2(F, G) {
    return function (fa) { return function (fab) {
        return F.ap(F.map(fab, function (gab) { return function (ga) { return G.ap(gab, ga); }; }), fa);
    }; };
}

/**
 * A `Functor` is a type constructor which supports a mapping operation `map`.
 *
 * `map` can be used to turn functions `a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.map(fa, a => a) <-> fa`
 * 2. Composition: `F.map(fa, a => bc(ab(a))) <-> F.map(F.map(fa, ab), bc)`
 *
 * @since 2.0.0
 */
function map$3(F, G) {
    return function (f) { return function (fa) { return F.map(fa, function (ga) { return G.map(ga, f); }); }; };
}

/** @internal */
var isSome$1 = function (fa) { return fa._tag === 'Some'; };
/** @internal */
var none$1 = { _tag: 'None' };
/** @internal */
var some$1 = function (a) { return ({ _tag: 'Some', value: a }); };
// -------------------------------------------------------------------------------------
// Either
// -------------------------------------------------------------------------------------
/** @internal */
var isLeft$1 = function (ma) { return ma._tag === 'Left'; };
/** @internal */
var isRight$1 = function (ma) { return ma._tag === 'Right'; };
/** @internal */
var left$2 = function (e) { return ({ _tag: 'Left', left: e }); };
/** @internal */
var right$2 = function (a) { return ({ _tag: 'Right', right: a }); };

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 2.0.0
 */
var left$1 = left$2;
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 2.0.0
 */
var right$1 = right$2;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function (fa, f) { return pipe$1(fa, map$2(f)); };
var _ap = function (fab, fa) { return pipe$1(fab, ap$1(fa)); };
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */
var URI$2 = 'Either';
/**
 * @category instance operations
 * @since 2.0.0
 */
var map$2 = function (f) { return function (fa) {
    return isLeft(fa) ? fa : right$1(f(fa.right));
}; };
/**
 * @category instances
 * @since 2.7.0
 */
var Functor$2 = {
    URI: URI$2,
    map: _map
};
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category instance operations
 * @since 2.8.0
 */
var apW = function (fa) { return function (fab) { return (isLeft(fab) ? fab : isLeft(fa) ? fa : right$1(fab.right(fa.right))); }; };
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category instance operations
 * @since 2.0.0
 */
var ap$1 = apW;
/**
 * @category instances
 * @since 2.10.0
 */
var Apply$2 = {
    URI: URI$2,
    map: _map,
    ap: _ap
};
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category instance operations
 * @since 2.0.0
 */
var bimap$1 = function (f, g) { return function (fa) { return (isLeft(fa) ? left$1(f(fa.left)) : right$1(g(fa.right))); }; };
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category instance operations
 * @since 2.0.0
 */
var mapLeft$1 = function (f) { return function (fa) {
    return isLeft(fa) ? left$1(f(fa.left)) : fa;
}; };
// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise.
 *
 * @category refinements
 * @since 2.0.0
 */
var isLeft = isLeft$1;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise.
 *
 * @category refinements
 * @since 2.0.0
 */
var isRight = isRight$1;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */
var matchW = function (onLeft, onRight) { return function (ma) {
    return isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
}; };
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { match, left, right } from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     match(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     match(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */
var match = matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */
var fold$2 = match;
/**
 * Returns a `Right` if is a `Left` (and vice versa).
 *
 * @category combinators
 * @since 2.0.0
 */
var swap$1 = function (ma) { return (isLeft(ma) ? right$1(ma.left) : left$1(ma.right)); };

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @category constructors
 * @since 2.0.0
 */
var none = none$1;
/**
 * Constructs a `Some`. Represents an optional value that exists.
 *
 * @category constructors
 * @since 2.0.0
 */
var some = some$1;
/**
 * @category instance operations
 * @since 2.0.0
 */
var map$1 = function (f) { return function (fa) {
    return isNone(fa) ? none : some(f(fa.value));
}; };
// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @category refinements
 * @since 2.0.0
 */
var isSome = isSome$1;
/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @category refinements
 * @since 2.0.0
 */
var isNone = function (fa) { return fa._tag === 'None'; };

/**
 * Use [`pipe`](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow) from `function` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */
var pipe = pipe$1;

/**
 * @since 2.0.0
 */
const URI$1 = '@nll/datum/Datum';
/**
 * Constructs an initial `Datum` holding no value.
 *
 * @since 2.0.0
 */
const initial$1 = {
    _tag: 'Initial'
};
/**
 * Constructs a pending `Datum` holding no value.
 *
 * @since 2.0.0
 */
const pending$1 = {
    _tag: 'Pending'
};
/**
 * Constructs a new refresh `Datum` holding a value.
 *
 * @since 2.0.0
 */
const refresh = (value) => ({
    _tag: 'Refresh',
    value
});
/**
 * Constructs a new replete `Datum` holding a value.
 *
 * @since 2.0.0
 */
const replete = (value) => ({
    _tag: 'Replete',
    value
});
/**
 * @since 2.0.0
 */
const constInitial$1 = constant(initial$1);
/**
 * @since 2.0.0
 */
const constPending$1 = constant(pending$1);
/**
 * @since 2.0.0
 */
const fold$1 = (onInitial, onPending, onRefresh, onReplete) => (ma) => {
    switch (ma._tag) {
        case 'Initial':
            return onInitial();
        case 'Pending':
            return onPending();
        case 'Refresh':
            return onRefresh(ma.value);
        case 'Replete':
            return onReplete(ma.value);
    }
};
/**
 * Returns `true` if the Async is an instance of `Initial`, `false` otherwise
 *
 * @since 2.0.0
 */
const isInitial$1 = (ma) => ma._tag === 'Initial';
/**
 * Returns `true` if the Async is an instance of `Pending`, `false` otherwise
 *
 * @since 2.0.0
 */
const isPending$1 = (ma) => ma._tag === 'Pending';
/**
 * Returns `true` if the Async is an instance of `Refresh`, `false` otherwise
 *
 * @since 2.0.0
 */
const isRefresh$1 = (ma) => ma._tag === 'Refresh';
/**
 * Returns `true` if the Async is an instance of `Replete`, `false` otherwise
 *
 * @since 2.0.0
 */
const isReplete = (ma) => ma._tag === 'Replete';
/**
 * @since 2.0.0
 */
const isValued$1 = (ma) => isReplete(ma) || isRefresh$1(ma);
/**
 * @since 2.0.0
 */
const getOrElse$1 = (onInitial, onPending) => (ma) => fold$1(onInitial, onPending, identity, identity)(ma);
/**
 * @since 2.0.0
 */
const mapC = (fa, f) => fold$1(constInitial$1, constPending$1, a => refresh(f(a)), a => replete(f(a)))(fa);
/**
 * @since 2.0.0
 *
 * @deprecated (Does not agree with chain)
 */
const apC = (fab, fa) => fold$1(constInitial$1, () => fold$1(constInitial$1, constPending$1, constPending$1, constPending$1)(fa), f => fold$1(constInitial$1, constPending$1, a => refresh(f(a)), a => refresh(f(a)))(fa), f => fold$1(constInitial$1, constPending$1, a => refresh(f(a)), a => replete(f(a)))(fa))(fab);
/**
 * @since 3.5.0
 */
const apC2 = (fab, fa) => chainC(fab, f => mapC(fa, f));
/**
 * @since 2.0.0
 */
const chainC = (fa, f) => fold$1(constInitial$1, constPending$1, f, f)(fa);
/**
 * @since 2.0.0
 */
const reduceC$1 = (fa, b, f) => fold$1(() => b, () => b, a => f(b, a), a => f(b, a))(fa);
/**
 * @since 2.0.0
 */
const foldMapC$1 = (M) => (fa, f) => fold$1(() => M.empty, () => M.empty, f, f)(fa);
/**
 * @since 2.0.0
 */
const reduceRightC$1 = (fa, b, f) => fold$1(() => b, () => b, a => f(a, b), a => f(a, b))(fa);
/**
 * @since 2.0.0
 */
const traverseC$1 = (F) => (ta, f) => fold$1(() => F.of(initial$1), () => F.of(pending$1), a => F.map(f(a), refresh), a => F.map(f(a), replete))(ta);
/**
 * @since 2.0.0
 */
const sequenceC$1 = (F) => (ta) => fold$1(() => F.of(initial$1), () => F.of(pending$1), a => F.map(a, refresh), a => F.map(a, replete))(ta);
/**
 * @since 2.0.0
 */
const altC = (fx, fy) => fold$1(fy, fy, refresh, replete)(fx);
/**
 * @since 2.0.0
 */
const extendC = (wa, f) => replete(f(wa));
/**
 * @since 2.0.0
 */
const compactC = (fa) => fold$1(constInitial$1, constPending$1, a => (isSome(a) ? refresh(a.value) : initial$1), a => (isSome(a) ? replete(a.value) : initial$1))(fa);
const defaultSeparate = {
    left: initial$1,
    right: initial$1
};
/**
 * @since 2.0.0
 */
const separateC = (fa) => {
    const s = mapC(fa, e => ({
        left: isLeft(e) ? replete(e.left) : initial$1,
        right: isRight(e) ? replete(e.right) : initial$1
    }));
    return getOrElse$1(() => defaultSeparate, () => defaultSeparate)(s);
};
/**
 * @since 2.0.0
 */
const filterC = (fa, predicate) => fold$1(constInitial$1, constPending$1, a => (predicate(a) ? fa : initial$1), a => (predicate(a) ? fa : initial$1))(fa);
/**
 * @since 2.0.0
 */
const filterMapC = (ma, f) => compactC(mapC(ma, f));
/**
 * @since 2.0.0
 */
const partitionC = (fa, predicate) => ({
    left: filterC(fa, a => !predicate(a)),
    right: filterC(fa, predicate)
});
/**
 * @since 2.0.0
 */
const partitionMapC = (fa, f) => separateC(mapC(fa, f));
/**
 * @since 2.0.0
 */
const witherC = (F) => (fa, f) => fold$1(constant(F.of(initial$1)), constant(F.of(pending$1)), a => F.map(f(a), o => (isSome(o) ? refresh(o.value) : initial$1)), a => F.map(f(a), o => (isSome(o) ? replete(o.value) : initial$1)))(fa);
/**
 * @since 2.0.0
 */
const wiltC = (F) => (fa, f) => {
    const s = mapC(fa, a => F.map(f(a), e => ({
        left: isLeft(e) ? replete(e.left) : initial$1,
        right: isRight(e) ? replete(e.right) : initial$1
    })));
    return isValued$1(s) ? s.value : F.of(defaultSeparate);
};
/**
 * @since 2.0.0
 */
const throwErrorC = (e) => initial$1;
/**
 * @since 2.0.0
 *
 * @deprecated Use standalone instances. Note, this mega-instance has ap and chain instances that disagree (ap does not short-circuit when there is no value, chain does).
 */
const datum = {
    URI: URI$1,
    map: mapC,
    of: replete,
    ap: apC,
    chain: chainC,
    reduce: reduceC$1,
    foldMap: foldMapC$1,
    reduceRight: reduceRightC$1,
    traverse: traverseC$1,
    sequence: sequenceC$1,
    zero: constInitial$1,
    alt: altC,
    extend: extendC,
    compact: compactC,
    separate: separateC,
    filter: filterC,
    filterMap: filterMapC,
    partition: partitionC,
    partitionMap: partitionMapC,
    wither: witherC,
    wilt: wiltC,
    throwError: throwErrorC
};
/**
 * @since 3.5.0
 */
const Functor$1 = {
    URI: URI$1,
    map: mapC
};
/**
 * @since 3.5.0
 *
 * Note: This instance agrees with the standalone Applicative/Chain/Monad instances but _disagrees_ with the deprecated `datum` mega-instance.
 */
const Apply$1 = Object.assign(Object.assign({}, Functor$1), { ap: apC2 });
/**
 * @since 3.5.0
 */
const Chain$1 = Object.assign(Object.assign({}, Apply$1), { chain: chainC });
/**
 * @since 3.5.0
 */
const Applicative$1 = Object.assign(Object.assign({}, Apply$1), { of: replete });
/**
 * @since 3.5.0
 */
const Alt$1 = Object.assign(Object.assign({}, Functor$1), { alt: altC });
/**
 * @since 3.5.0
 */
Object.assign(Object.assign(Object.assign({}, Alt$1), Applicative$1), { zero: constInitial$1 });
/**
 * @since 3.5.0
 */
const Monad$1 = Object.assign(Object.assign({}, Chain$1), { of: replete });
/**
 * @since 3.5.0
 */
Object.assign(Object.assign({}, Monad$1), { throwError: throwErrorC });
/**
 * @since 3.5.0
 */
const Foldable$1 = {
    URI: URI$1,
    reduce: reduceC$1,
    reduceRight: reduceRightC$1,
    foldMap: foldMapC$1
};
/**
 * @since 3.5.0
 */
const Traversable = Object.assign(Object.assign(Object.assign({}, Functor$1), Foldable$1), { sequence: sequenceC$1, traverse: traverseC$1 });
/**
 * @since 3.5.0
 */
Object.assign(Object.assign({}, Functor$1), { extend: extendC });
/**
 * @since 3.5.0
 */
const Compactable = {
    URI: URI$1,
    compact: compactC,
    separate: separateC
};
/**
 * @since 3.5.0
 */
const Filterable = Object.assign(Object.assign(Object.assign({}, Functor$1), Compactable), { partition: partitionC, partitionMap: partitionMapC, filter: filterC, filterMap: filterMapC });
/**
 * @since 3.5.0
 */
Object.assign(Object.assign(Object.assign({}, Traversable), Filterable), { wilt: wiltC, wither: witherC });

function right(F) {
    return flow(right$1, F.of);
}
function left(F) {
    return flow(left$1, F.of);
}
function rightF(F) {
    return function (fa) { return F.map(fa, right$1); };
}
function leftF(F) {
    return function (fe) { return F.map(fe, left$1); };
}
function map(F) {
    return map$3(F, Functor$2);
}
function ap(F) {
    return ap$2(F, Apply$2);
}
function chain(M) {
    return function (f) { return function (ma) { return M.chain(ma, function (e) { return (isLeft(e) ? M.of(e) : f(e.right)); }); }; };
}
function alt(M) {
    return function (second) { return function (first) { return M.chain(first, function (e) { return (isLeft(e) ? second() : M.of(e)); }); }; };
}
function bimap(F) {
    return function (f, g) { return function (fea) { return F.map(fea, bimap$1(f, g)); }; };
}
function mapLeft(F) {
    return function (f) { return function (fea) { return F.map(fea, mapLeft$1(f)); }; };
}
function matchE(M) {
    return function (onLeft, onRight) { return function (ma) { return M.chain(ma, match(onLeft, onRight)); }; };
}
function getOrElse(M) {
    return function (onLeft) { return function (ma) { return M.chain(ma, match(onLeft, M.of)); }; };
}
function orElse(M) {
    return function (onLeft) { return function (ma) { return M.chain(ma, function (e) { return (isLeft(e) ? onLeft(e.left) : M.of(e)); }); }; };
}
function swap(F) {
    return function (ma) { return F.map(ma, swap$1); };
}
/** @deprecated  */
/* istanbul ignore next */
function getEitherM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    var _alt = alt(M);
    var _bimap = bimap(M);
    var _mapLeft = mapLeft(M);
    var _fold = matchE(M);
    var _getOrElse = getOrElse(M);
    var _orElse = orElse(M);
    return {
        map: function (fa, f) { return pipe$1(fa, _map(f)); },
        ap: function (fab, fa) { return pipe$1(fab, _ap(fa)); },
        of: right(M),
        chain: function (ma, f) { return pipe$1(ma, _chain(f)); },
        alt: function (fa, that) { return pipe$1(fa, _alt(that)); },
        bimap: function (fea, f, g) { return pipe$1(fea, _bimap(f, g)); },
        mapLeft: function (fea, f) { return pipe$1(fea, _mapLeft(f)); },
        fold: function (fa, onLeft, onRight) { return pipe$1(fa, _fold(onLeft, onRight)); },
        getOrElse: function (fa, onLeft) { return pipe$1(fa, _getOrElse(onLeft)); },
        orElse: function (fa, f) { return pipe$1(fa, _orElse(f)); },
        swap: swap(M),
        rightM: rightF(M),
        leftM: leftF(M),
        left: left(M)
    };
}

/**
 * @since 2.0.0
 *
 * Represents a value of one of six possible types (a disjoint union).
 *
 * An instance of `DatumEither` is equivalent to `Datum<Either<E, A>>`
 *
 * A common use of `DatumEither` is as a container for dealing with refreshable data values that
 * can have error conditions. The full type list is:
 *
 * - `Initial`
 * - `Pending`
 * - `Refresh<Either<E, A>>`
 *   - `Refresh<Left<E>>`
 *   - `Refresh<Right<A>>`
 * - `Replete<Either<E, A>>`
 *   - `Replete<Left<E>>`
 *   - `Replete<Right<A>>`
 *
 * There are additional helper methods for going from refresh to replete and back.
 */
/**
 * @since 2.0.0
 */
const URI = '@nll/datum/DatumEither';
/**
 * @since 2.4.1
 */
const initial = initial$1;
/**
 * @since 2.4.1
 */
const pending = pending$1;
/**
 * @since 2.1.0
 */
const success = (a) => replete(right$1(a));
/**
 * @since 2.1.0
 */
const failure = (e) => replete(left$1(e));
/**
 * @since 2.4.1
 */
function constInitial() {
    return initial;
}
/**
 * @since 2.4.1
 */
const constPending = () => pending;
/**
 * @since 2.7.0
 */
const isInitial = isInitial$1;
/**
 * @since 2.7.0
 */
const isPending = isPending$1;
/**
 * @since 2.7.0
 */
const isRefresh = isRefresh$1;
/**
 * @since 2.7.0
 */
const isValued = isValued$1;
/**
 * @since 2.1.0
 */
const isSuccess = (fea) => isValued(fea) && isRight(fea.value);
/**
 * @since 2.1.0
 */
const isFailure = (fea) => isValued(fea) && isLeft(fea.value);
/**
 * @since 2.1.0
 */
const toRefresh = (fea) => fold$1(constPending, constPending, constant(fea), refresh)(fea);
/**
 * @since 2.7.0
 */
const toReplete = (fea) => fold$1(constInitial, constInitial, replete, constant(fea))(fea);
/**
 * @since 2.7.0
 */
const fold = (onInitial, onPending, onRefreshLeft, onRefreshRight, onRepleteLeft, onRepleteRight) => (fea) => pipe(fea, fold$1(onInitial, onPending, fold$2(onRefreshLeft, onRefreshRight), fold$2(onRepleteLeft, onRepleteRight)));
/**
 * @since 3.4.0
 */
const traverseC = (F) => (ta, f) => fold(() => F.of(initial), () => F.of(pending), (e) => F.of(refresh(left$1(e))), (a) => F.map(f(a), flow(right$1, refresh)), (e) => F.of(replete(left$1(e))), (a) => F.map(f(a), flow(right$1, replete)))(ta);
/**
 * @since 3.4.0
 */
const sequenceC = (F) => (ta) => fold(() => F.of(initial), () => F.of(pending), (e) => F.of(refresh(left$1(e))), (a) => F.map(a, flow(right$1, refresh)), (e) => F.of(replete(left$1(e))), (a) => F.map(a, flow(right$1, replete)))(ta);
/**
 * @since 3.4.0
 */
const reduceC = (fa, b, f) => pipe(fa, fold(() => b, () => b, () => b, (a) => f(b, a), () => b, (a) => f(b, a)));
/**
 * @since 3.4.0
 */
const foldMapC = (M) => (fa, f) => fold(() => M.empty, () => M.empty, () => M.empty, f, () => M.empty, f)(fa);
/**
 * @since 3.4.0
 */
const reduceRightC = (fa, b, f) => fold(() => b, () => b, () => b, (a) => f(a, b), () => b, (a) => f(a, b))(fa);
/**
 * @since 2.0.0
 *
 * @deprecated Use standalone instances and instance factories
 */
Object.assign(Object.assign({ URI }, getEitherM(datum)), { traverse: traverseC, sequence: sequenceC, reduce: reduceC, foldMap: foldMapC, reduceRight: reduceRightC });
// TODO: After we bump the min bound to >= 2.10, replace this with individual helper fns
const eitherTDatum = getEitherM(Monad$1);
/**
 * @since 3.5.0
 */
const Functor = {
    URI,
    map: eitherTDatum.map
};
/**
 * @since 3.5.0
 *
 * Note: This instance agrees with the standalone Applicative/Chain/Monad instances but _disagrees_ with the deprecated `datum` mega-instance.
 */
const Apply = Object.assign(Object.assign({}, Functor), { ap: eitherTDatum.ap });
/**
 * @since 3.5.0
 */
const Chain = Object.assign(Object.assign({}, Apply), { chain: eitherTDatum.chain });
/**
 * @since 3.5.0
 */
const Applicative = Object.assign(Object.assign({}, Apply), { of: eitherTDatum.of });
/**
 * @since 3.5.0
 */
const Alt = Object.assign(Object.assign({}, Functor), { alt: eitherTDatum.alt });
/**
 * @since 3.5.0
 */
Object.assign(Object.assign(Object.assign({}, Alt), Applicative), { zero: constInitial });
/**
 * @since 3.5.0
 */
const Monad = Object.assign(Object.assign({}, Chain), { of: eitherTDatum.of });
/**
 * @since 3.5.0
 */
Object.assign(Object.assign({}, Monad), { throwError: failure });
/**
 * @since 3.5.0
 */
const Foldable = {
    URI,
    reduce: reduceC,
    reduceRight: reduceRightC,
    foldMap: foldMapC
};
/**
 * @since 3.5.0
 */
Object.assign(Object.assign(Object.assign({}, Functor), Foldable), { sequence: sequenceC, traverse: traverseC });

createCommonjsModule$1(function (module, exports) {
var __self__ = (function (root) {
function F() {
this.fetch = false;
this.DOMException = root.DOMException;
}
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : commonjsGlobal);
(function(self) {

((function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

})({}));
})(__self__);
delete __self__.fetch.polyfill;
exports = __self__.fetch; // To enable: import fetch from 'cross-fetch'
exports.default = __self__.fetch; // For TypeScript consumers without esModuleInterop.
exports.fetch = __self__.fetch; // To enable: import {fetch} from 'cross-fetch'
exports.Headers = __self__.Headers;
exports.Request = __self__.Request;
exports.Response = __self__.Response;
module.exports = exports;
});

// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null;

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket;
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket;
} else if (typeof commonjsGlobal !== 'undefined') {
  ws = commonjsGlobal.WebSocket || commonjsGlobal.MozWebSocket;
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket;
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket;
}

var browser = ws;

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes));

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1;
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length);

  return () => {
    let id = '';
    while (true) {
      let bytes = getRandom(step);
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step;
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || '';
        if (id.length === size) return id
      }
    }
  }
};

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random);

class Id extends String {
    constructor(family, value) {
        super(value);
        this.family = family;
    }
}
/**
 * The epoch used for calculating
 * the time stamp. Chosen as a recent time
 * that was easily remembered.
 * Happens to correspond to 2017-07-14T02:40:00.000Z.
 */
const epoch = 1500000000000;
/**
 * A random id generator using custom alphabet and length.
 */
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 20);
/**
 * Generate a unique identifier.
 *
 * Generated identifiers:
 *
 * - are URL safe
 * - contain information on the type of object that they
 *   are identifying
 * - are roughly sortable by time of generation
 * - have an extremely low probability of collision
 *
 * Generated identifiers have a fixed length of 32 characters made up
 * of three parts separated by dots:
 *
 * - 2 characters in the range `[a-z]` that identifying the "family" of
 *   identifiers, usually the type of object
 *   the identifier is for e.g. `rq` = request
 *
 * - 10 characters in the range `[0-9a-f]` that are the hexadecimal encoding of the
 *   seconds since `2017-07-14T02:40:00.000Z`the hexadecimal
 *
 * - 20 characters in the range `[0-9A-Za-z]` that are randomly generated
 *
 * @see {@link https://segment.com/blog/a-brief-history-of-the-uuid/|A brief history of the UUID}
 * @see {@link https://zelark.github.io/nano-id-cc/|Nano ID Collision Calculator}
 */
function generate(code) {
    const family = code.length === 2
        ? code
        : code.length === 0
            ? 'uu'
            : code.length === 1
                ? code.repeat(2)
                : code.slice(0, 2);
    const time = (Date.now() - epoch).toString(16).padStart(10, '0');
    const rand = nanoid();
    const value = `${family}.${time}.${rand}`;
    return new Id(family, value);
}

function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var r;!function(e){e[e.error=0]="error",e[e.warn=1]="warn",e[e.info=2]="info",e[e.debug=3]="debug";}(r||(r={}));var n,t,o="undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="_logga"in o?null!=(t=o._logga)?t:[]:(o._logga=[],null!=(n=o._logga)?n:[]);function a(r,n,t){for(var o,a,u={tag:n,level:t,message:"string"==typeof r?r:"object"==typeof r&&null!=(o=null==r?void 0:r.message)?o:"",stack:"object"==typeof r?null==r?void 0:r.stack:void 0},s=function(r,n){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=function(r,n){if(r){if("string"==typeof r)return e(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return "Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(r,n):void 0}}(r))){t&&(r=t);var o=0;return function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return (t=r[Symbol.iterator]()).next.bind(t)}(i);!(a=s()).done;)(0, a.value)(u);}function u(){return i}function s(e,r){void 0===r&&(r={});var n=e,t=r.tags,o=r.maxLevel,a=r.messageRegex,u=r.func;return void 0===t&&void 0===o&&void 0===a&&void 0===u||(n=function(r){(void 0===t||t.includes(r.tag))&&(void 0!==o&&r.level>o||(void 0===a||a.test(r.message))&&(void 0===u||u(r))&&e(r));}),i.push(n),n}var f=new Map;function v(e){return e.replace(/"|\\|\/|\f|\n|\r|\t/g,function(e){switch(e){case'"':return '"';case"\\":return "\\\\";case"/":return "\\/";case"\f":return "\\f";case"\n":return "\\n";case"\r":return "\\r";case"\t":return "\\t"}return e})}function g(e,n){void 0===n&&(n={});var t=e.tag,o=e.level,i=e.message,a=e.stack,u=n.maxLevel;if(!(o>(void 0===u?r.info:u))){var s=n.throttle;if(void 0!==s){var l=(void 0!==s.signature?s.signature:"").replace(/\${tag}/,t).replace(/\${level}/,o.toString()).replace(/\${message}/,i),c=f.get(l);if(void 0!==c){var d=void 0!==s.duration?s.duration:1e3;if(Date.now()-c<d)return}f.set(l,Date.now());}if("undefined"!=typeof process&&void 0!==process.stderr&&!0!==process.stderr.isTTY){var g=n.fastTime,p='{"time":'+(void 0!==g&&g?Date.now():'"'+(new Date).toISOString()+'"')+',"tag":"'+t+'","level":'+o+',"message":"'+i+'"';void 0!==a&&(p+=',"stack":"'+v(a)+'"'),p+="}\n",process.stderr.write(p);}else {var m,y=o<0?0:o>3?3:o,w=r[y].toUpperCase().padEnd(5," ");m="undefined"!=typeof window?w+" "+t+" "+i:["🚨","⚠","🛈","🐛"][y]+" "+["[31;1m","[33;1m","[34;1m","[30;1m"][y]+w+"[0m [36m"+t+"[0m "+i;var b=n.showStack;void 0!==b&&b&&void 0!==a&&(m+="\n  "+a),console.error(m);}var h=n.exitOnError;"undefined"!=typeof process&&(void 0===h||h)&&o===r.error&&(null==process.exit||process.exit(1));}}function p(e){return {error:function(n){a(n,e,r.error);},warn:function(n){a(n,e,r.warn);},info:function(n){a(n,e,r.info);},debug:function(n){a(n,e,r.debug);}}}0===u().length&&s(g);

var Lt=function(t){return function(e){return Object.keys(t).includes(e)}},Nt=function(t){return function(e){return !!qt(e)&&Lt(t)(e.type)}},Qt=function(t){var e,n=((e={})[t]=t,e);return Nt(n)},qt=function(t){return null!=t&&Object.prototype.hasOwnProperty.call(t,"type")};Qt("Article");Qt("Paragraph");Qt("ListItem");var te=function(t){return null===t?"Null":"boolean"==typeof t?"Boolean":"number"==typeof t?"Number":"string"==typeof t?"Text":Array.isArray(t)?"Array":qt(t)?t.type:"Object"};

class InternalError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InternalError';
    }
}
class MethodUnknownError extends Error {
    constructor(method) {
        super(`Method "${method}" is unknown`);
        this.name = 'MethodUnknownError';
        this.method = method;
    }
}
class ParamRequiredError extends Error {
    constructor(param) {
        super(`Parameter "${param}" is required`);
        this.name = 'ParamRequiredError';
        this.param = param;
    }
}
/**
 * Capability error
 *
 * This custom error class to indicate that
 * an executor is not capable of performing a
 * method call.
 *
 * Messages should be written for developers using this library,
 * not for end users.
 */
class CapabilityError extends Error {
    constructor(message = 'Incapable', method, params = {}) {
        super(method !== undefined
            ? CapabilityError.message(message, method, params)
            : message);
        this.name = 'CapabilityError';
    }
    static message(message, method, params) {
        return (`${message}: method "${method}" with params:\n` +
            Object.entries(params)
                .map(([name, value]) => {
                let repr;
                if (qt(value)) {
                    repr = `<${te(value)}>`;
                }
                else {
                    repr = JSON.stringify(value);
                    if (repr !== undefined && repr.length > 20) {
                        repr = repr.slice(0, 20) + '...';
                    }
                }
                return `  ${name}: ${repr}`;
            })
                .join('\n'));
    }
}

const log = p('executa:executor');
/**
 * The methods of an `Executor` class.
 */
var Method;
(function (Method) {
    Method["manifest"] = "manifest";
    Method["decode"] = "decode";
    Method["encode"] = "encode";
    Method["query"] = "query";
    Method["compile"] = "compile";
    Method["build"] = "build";
    Method["execute"] = "execute";
    Method["begin"] = "begin";
    Method["end"] = "end";
    Method["pipe"] = "pipe";
    Method["cancel"] = "cancel";
})(Method || (Method = {}));
/**
 * Interface for `Executor` classes and their proxies.
 */
class Executor {
    /**
     * Construct an executor.
     *
     * @param family A two letter code used to help
     * identify the type of executor
     */
    constructor(family = 'ex') {
        this.id = generate(family).toString();
    }
    /**
     * Get the addresses of this executor.
     *
     * Derived classes can override this method
     * to provide addresses in their manifest.
     */
    addresses() {
        return Promise.resolve(undefined);
    }
    /**
     * Get the capabilities of this executor.
     *
     * Derived classes can override this method
     * to provide capabilities in their manifest.
     */
    capabilities() {
        return Promise.resolve(undefined);
    }
    /**
     * Get the manifest of the executor.
     *
     * @see {@link Capabilities}
     * @see {@link Addresses}
     */
    async manifest() {
        return {
            version: 1,
            id: this.id.toString(),
            addresses: await this.addresses(),
            capabilities: await this.capabilities(),
        };
    }
    /**
     * Decode content to a `Node`.
     *
     * @param source The source of the content to decode
     * @param format The format of the content
     * @returns The decoded node
     */
    decode(source, format) {
        return this.call(Method.decode, { source, format });
    }
    /**
     * Encode a `Node` in a format.
     *
     * @param node The node to encode
     * @param dest The destination for the encoded content
     * @param format The format to encode
     * @returns The encoded content, or the destination of the content.
     */
    encode(node, dest, format) {
        return this.call(Method.encode, { node, dest, format });
    }
    /**
     * Query a `Node`.
     *
     * Currently allows for two query languages:
     *
     * - `jmp`: [JMESPath](http://jmespath.org/) (default)
     * - `jpo`: [JSONPointer](https://tools.ietf.org/html/rfc6901)
     */
    query(node, query, lang) {
        return this.call(Method.query, { node, query, lang });
    }
    /**
     * Compile a `Node`.
     *
     * @param node The node to compile
     * @returns The compiled node
     */
    compile(node) {
        return this.call(Method.compile, { node });
    }
    /**
     * Build a `Node`.
     *
     * @param node The node to build
     * @returns The build node
     */
    build(node) {
        return this.call(Method.build, { node });
    }
    /**
     * Execute a `Node`.
     *
     * @param node The node to execute
     * @param session The session that the node will be executed in
     * @param claims The `Claims` made for the call
     * @param job The unique id of the request
     * @returns The node, with updated properties, after it has been executed
     */
    execute(node, session, claims, job) {
        return this.call(Method.execute, { node, session, claims, job });
    }
    /**
     * Begin running a `Node`.
     *
     * This method keeps a document "running", usually to allow it to react
     * to changes within it. Compare this to `execute()` which will not wait
     * and will simply execute all nodes in the document.
     * The document will keep running until the `end()` method is called on it.
     *
     * Usually this method is called with a `SoftwareSession` as the
     * `node` argument. However, it could also be called with another `Node`
     * type, e.g. an `Article`, in which case the executor may begin it's
     * `session` property, or default session if that property is missing.
     *
     * @param node The node to run, usually but not necessarily, a `SoftwareSession`
     * @param claims The `Claims` made for the call
     * @returns The node, with updated properties, after it has begun running
     */
    begin(node, claims) {
        return this.call(Method.begin, { node, claims });
    }
    /**
     * End running a `Node`.
     *
     * @param node The running node, usually but not necessarily, a `SoftwareSession`
     * @param claims The `Claims` made for the call
     * @returns The node, with updated properties, after it has ended running
     */
    end(node, claims) {
        return this.call(Method.end, { node, claims });
    }
    /**
     * Call a pipeline of methods passing the result of each call as the
     * first argument of the next call.
     *
     * This method is a "meta" method that is used to chain together calls to other methods.
     * When using a remote executor, it is more efficient than chaining those calls together
     * "by hand" because it only involves one round trip request to the executor.
     *
     * @param node The node to pipe through methods
     * @param calls A list of method, parameters tuples to pipe the node through
     * @returns The node after it has been piped through the methods
     */
    pipe(node, calls) {
        return this.call(Method.pipe, { node, calls });
    }
    /**
     * Cancel a previous request to call a method
     *
     * @param job The unique id of the request to be cancelled.
     * @returns Whether or not the request was cancelled.
     */
    cancel(job) {
        // Unlike the other methods, the default is to return
        // false (i.e. the call could not be cancelled) rather than
        // fallback to calling `call()`.
        return Promise.resolve(false);
    }
    /**
     * Dispatch a call to one of the above methods.
     *
     * This method does run time dispatching. It is used
     * by classes such as `Server` (to fulfil a JSON-RPC request),
     * `Queuer` (to remove calls from a queue) and in `Worker`
     * for implementing the `pipe` method.
     *
     * It does runtime checking for the method name and
     * required parameters.
     */
    dispatch(method, params = {}) {
        switch (method) {
            case Method.manifest:
                return this.manifest();
            case Method.decode:
                return this.decode(param(0, 'source'), param(1, 'format', false));
            case Method.encode:
                return this.encode(param(0, 'node'), param(1, 'dest', false), param(2, 'format', false));
            case Method.query:
                return this.query(param(0, 'node'), param(1, 'query'), param(1, 'lang', false));
            case Method.compile:
                return this.compile(param(0, 'node'));
            case Method.build:
                return this.build(param(0, 'node'));
            case Method.execute:
                return this.execute(param(0, 'node'), param(1, 'session', false), param(2, 'claims', false), param(3, 'job', false));
            case Method.begin:
                return this.begin(param(0, 'node'), param(1, 'claims', false));
            case Method.end:
                return this.end(param(0, 'node'), param(1, 'claims', false));
            case Method.pipe:
                return this.pipe(param(0, 'node'), param(1, 'calls'));
            case Method.cancel:
                return this.cancel(param(0, 'job'));
        }
        throw new MethodUnknownError(method);
        /**
         * Get a parameter value.
         *
         * The number `index` is necessary to to be able to extract
         * the first, forward piped, argument created when
         * piping (e.g `{ 0: node, format: 'json'}` instead of
         * `{ node: node, format: 'json'}`).
         *
         * @param index The index of the parameter
         * @param name The name of the parameter
         * @param required Is the parameter required?
         */
        function param(index, name, required = true) {
            let value = params[name];
            if (value === undefined)
                value = params[index];
            if (required && value === undefined)
                throw new ParamRequiredError(name);
            return value;
        }
    }
    /**
     * A fallback implementation of one of the above methods.
     *
     * Since this base executor has no capabilities, this method
     * simply throws a `CapabilityError`. Derived classes, may
     * override this method, and /or one of the methods above.
     *
     * Provided so that derived classes such as `Client`, `Delegator`
     * and `Queuer` can override a single method to provide their
     * functionality instead of having to implement each of the above methods.
     *
     * @param method The name of the method
     * @param params Values of parameters (i.e. arguments)
     * @param request The request id
     */
    call(method, params) {
        throw new CapabilityError('No capability implemented', method, params);
    }
    /**
     * Send a notification
     *
     * @param level The notification level e.g. `info`, `error`
     * @param message The notification message
     * @param node The node to which this notification relates e.g. a `SoftwareSession`
     * @param clients The ids of the clients to send the notification to. If missing send to all clients.
     */
    notify(level, message, node, clients) {
        throw new InternalError('Method notify should be implemented in derived classes');
    }
    /**
     * Receive a notification
     *
     * @param level The notification level e.g. `info`, `error`
     * @param message The notification message
     * @param node The node to which this notification relates e.g. a `SoftwareSession`
     */
    notified(level, message, node) {
        switch (level) {
            case 'debug':
            case 'info':
            case 'warn':
            case 'error':
                log[level](message);
                break;
            default:
                log.info(message);
        }
    }
    /**
     * Start the executor
     *
     * Derived classes may override this method.
     */
    start() {
        return Promise.resolve();
    }
    /**
     * Stop the executor
     *
     * Derived classes may override this method.
     */
    stop() {
        return Promise.resolve();
    }
}

var Transport;
(function (Transport) {
    Transport["direct"] = "direct";
    Transport["stdio"] = "stdio";
    Transport["pipe"] = "pipe";
    Transport["uds"] = "uds";
    Transport["vsock"] = "vsock";
    Transport["tcp"] = "tcp";
    Transport["http"] = "http";
    Transport["ws"] = "ws";
})(Transport || (Transport = {}));
class TcpAddress {
    constructor(address, defaults = {
        scheme: 'tcp',
        host: '127.0.0.1',
        port: 7000,
    }) {
        this.type = Transport.tcp;
        const { scheme, host, port } = parseTcpAddress(address, defaults);
        this.scheme = scheme;
        this.host = host;
        this.port = port;
    }
    url() {
        return deparseTcpAddress(this);
    }
}
/**
 * An address in the HTTP address family
 *
 * @see {@link https://www.w3.org/Addressing/HTTPAddressing.html HTTP Addressing }
 */
class HttpAddress extends TcpAddress {
    constructor(address, defaults = {
        scheme: 'http',
        host: '127.0.0.1',
        port: 80,
    }) {
        super(address, defaults);
        this.type = Transport.http;
        const { path } = parseTcpAddress(address, defaults);
        this.path = path;
        if (typeof address === 'object') {
            const { protocol, jwt } = address;
            this.protocol = protocol;
            this.jwt = jwt;
        }
    }
}
class WebSocketAddress extends HttpAddress {
    constructor(address) {
        super(address, {
            scheme: 'ws',
            host: '127.0.0.1',
            port: 80,
        });
        this.type = Transport.ws;
    }
}
function parseTcpAddress(address, defaults) {
    let { scheme, host, path } = { path: undefined, ...defaults };
    let port;
    if (typeof address === 'string') {
        // Attempt to parse string as port number
        const match = /^[0-9]{2,5}$/.exec(address);
        if (match !== null) {
            port = parseInt(match[0]);
        }
        else {
            // Parse string to extract parts
            const match = /(([a-z]{2,5}):\/\/)?([^:/]+)(:(\d+))?(\/(.+))?$/.exec(address);
            if (match === null)
                throw new InternalError(`Could not parse address "${address}"`);
            if (match[2] !== undefined)
                scheme = match[2];
            if (match[3] !== undefined)
                host = match[3];
            if (match[5] !== undefined)
                port = parseInt(match[5]);
            if (match[7] !== undefined)
                path = match[7];
        }
    }
    else if (typeof address === 'number') {
        // Port number provided only
        port = address;
    }
    else {
        ({ scheme, host, port, path } = { scheme, host, port, path, ...address });
    }
    // If port is still undefined then infer it from scheme, or apply default
    if (port === undefined) {
        if (scheme === 'http' || scheme === 'ws')
            port = 80;
        else if (scheme === 'https' || scheme === 'wss')
            port = 443;
        else
            port = defaults.port;
    }
    return { scheme, host, port, path };
}
/**
 * Create a URL from a TCP-based address. Inverse of `parseTcpAddress`.
 *
 * @param address The address to deparse.
 */
function deparseTcpAddress(address) {
    const { scheme, host, port, path } = address;
    let url = `${scheme}://${host}`;
    // Only add port number if necessary
    if (scheme === 'tcp' ||
        ((scheme === 'http' || scheme === 'ws') && port !== 80) ||
        ((scheme === 'https' || scheme === 'wss') && port !== 443))
        url += `:${port}`;
    // Add path for HTTP and WebSocket addresses
    if (scheme !== 'tcp' && path !== undefined) {
        if (!path.startsWith('/'))
            url += '/';
        url += path;
    }
    return url;
}

/**
 * A JSON-RPC 2.0 response error
 *
 * @see {@link https://www.jsonrpc.org/specification#error_object}
 */
/**
 * Error codes defined in JSON-RPC 2.0
 *
 * Codes -32000 to -32099	are reserved for implementation-defined server-errors.
 */
var JsonRpcErrorCode;
(function (JsonRpcErrorCode) {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["ParseError"] = -32700] = "ParseError";
    /**
     * The JSON sent is not a valid Request object.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["InvalidRequest"] = -32600] = "InvalidRequest";
    /**
     * The method does not exist / is not available.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["MethodNotFound"] = -32601] = "MethodNotFound";
    /**
     * Invalid method parameter(s).
     */
    JsonRpcErrorCode[JsonRpcErrorCode["InvalidParams"] = -32602] = "InvalidParams";
    /**
     * Internal JSON-RPC error.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["InternalError"] = -32603] = "InternalError";
    // Implementation defined server-errors...
    /**
     * Generic server error.
     */
    JsonRpcErrorCode[JsonRpcErrorCode["ServerError"] = -32000] = "ServerError";
    /**
     * Capability error
     **/
    JsonRpcErrorCode[JsonRpcErrorCode["CapabilityError"] = -32005] = "CapabilityError";
})(JsonRpcErrorCode || (JsonRpcErrorCode = {}));
class JsonRpcError {
    constructor(code, message, data) {
        this.name = 'JsonRpcError';
        this.code = code;
        this.message = message;
        this.data = data;
    }
    /**
     * Translate an `Error` into a `JsonRpcError`.
     */
    static fromError(error) {
        if (error instanceof JsonRpcError) {
            return error;
        }
        if (error instanceof MethodUnknownError) {
            return new JsonRpcError(JsonRpcErrorCode.MethodNotFound, `Method not found: "${error.method}"`);
        }
        if (error instanceof ParamRequiredError) {
            return new JsonRpcError(JsonRpcErrorCode.InvalidParams, `Invalid params: "${error.param}" is missing`);
        }
        if (error instanceof CapabilityError) {
            return new JsonRpcError(JsonRpcErrorCode.CapabilityError, error.message);
        }
        return new JsonRpcError(JsonRpcErrorCode.ServerError, `Internal error: ${error.message}`, { trace: error.stack });
    }
    /**
     * Translate a `JsonRpcError` into other application
     * specific errors.
     */
    static toError(error) {
        const { code, message } = error;
        switch (code) {
            case JsonRpcErrorCode.CapabilityError:
                return new CapabilityError(message);
            default:
                return error;
        }
    }
}

/**
 * A JSON-RPC 2.0 request
 *
 * @see {@link https://www.jsonrpc.org/specification#request_object}
 */
class JsonRpcRequest {
    /**
     * Create a JSON-RPC request
     *
     * @param method The name of the method to call
     * @param params Values for the methods parameters (i.e. arguments)
     * @param id The request id. If `false`, then the request is a
     *           notification (i.e. no response expected). If
     *           `undefined` then a new id will be generated.
     */
    constructor(method, params, id) {
        /**
         * A string specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".
         */
        this.jsonrpc = '2.0';
        if (id !== undefined && id !== false) {
            this.id = id;
        }
        else if (id === undefined) {
            this.id = generate('re').toString();
        }
        this.method = method;
        this.params = params;
    }
    static create(source) {
        if (typeof source === 'string')
            return JsonRpcRequest.parse(source);
        if (source !== null && typeof source === 'object' && !Array.isArray(source))
            // @ts-ignore TS doesn't know this is now not a null
            return JsonRpcRequest.hydrate(source);
        throw new JsonRpcError(JsonRpcErrorCode.InvalidRequest, `Invalid request type: ${typeof source}`);
    }
    /**
     * Hydrate a Javascript object into an instance
     *
     * @param obj A plain object representing a request
     */
    static hydrate(obj) {
        const { method, params, id } = obj;
        if (method === undefined)
            throw new JsonRpcError(JsonRpcErrorCode.InvalidRequest, 'Invalid request: missing property: "method"');
        if (typeof method !== 'string')
            throw new JsonRpcError(JsonRpcErrorCode.InvalidRequest, `Invalid request: incorrect type for "method": ${typeof method}`);
        // TODO: Add checking of types of params and id
        // @ts-ignore possibly incorrect argument types
        return new JsonRpcRequest(method, params, id === undefined ? false : id);
    }
    /**
     * Parse a JSON into an instance
     *
     * @param json The JSON representation of the request
     */
    static parse(json) {
        let obj;
        try {
            obj = JSON.parse(json);
        }
        catch (err) {
            throw new JsonRpcError(JsonRpcErrorCode.ParseError, `Parse error: ${err.message}`);
        }
        return JsonRpcRequest.hydrate(obj);
    }
}

const log$1 = p('executa:client');
/**
 * A client to a remote, out of process, `Executor`.
 *
 * Implements asynchronous, methods for `Executor` methods `call` and `notify`
 * which send JSON-RPC requests to a `Server` that is serving the remote `Executor`.
 */
class Client extends Executor {
    /**
     * Construct a `Client`.
     *
     * @param family The two letter prefix for the id of this client
     */
    constructor(family = 'cli') {
        super(family);
        /**
         * A map of requests to which responses can be paired against
         *
         * The key is the unique id for each request.
         */
        this.requests = {};
        /**
         * Notifications cache
         *
         * Intended to be consumed by by applications
         * e.g. by displaying them to the user.
         */
        this.notifications = [];
        /**
         * Count of notifications received
         *
         * Used to give a unique, sequential, identifier to each
         * new notification.
         */
        this.notificationsCount = 0;
        /**
         * Maximum length of the notifications cache
         *
         * Used to avoid excessive memory usage for unhandled
         * notifications.
         */
        this.notificationsLength = 1000;
    }
    /**
     * @override Override of {@link Executor.manifest} to
     * return the manifest of the remote executor.
     */
    async manifest() {
        if (this.manifestCached === undefined) {
            this.manifestCached = await this.call(Method.manifest);
        }
        return this.manifestCached;
    }
    /**
     * @override Override of {@link Executor.cancel} to
     * request the remote executor to cancel a job.
     */
    cancel(job) {
        return this.call(Method.cancel, { job });
    }
    /**
     * @implements Implements {@link Executor.call} by sending a
     * a request to the remote `Executor` that this client is connected to.
     */
    async call(method, params = {}) {
        const request = new JsonRpcRequest(method, params);
        const id = request.id;
        if (id === undefined)
            throw new InternalError('Request should have id defined');
        const promise = new Promise((resolve, reject) => {
            this.requests[id] = {
                id,
                date: new Date(),
                resolve,
                reject,
            };
        });
        await this.send(request);
        return promise;
    }
    /**
     * @override Override of {@link Executor.notify} to send a notification
     * to the `Executor` that this client is connected to.
     */
    notify(subject, message) {
        const notification = new JsonRpcRequest(subject, { message }, false);
        return this.send(notification);
    }
    /**
     * @override Override of {@link Executor.notified} to cache
     * notifications received by this client instead on just
     * logging them.
     */
    notified(subject, message) {
        const { notifications, notificationsLength } = this;
        this.notificationsCount += 1;
        notifications.push({
            id: this.notificationsCount,
            date: new Date(),
            subject,
            message,
        });
        if (notifications.length > notificationsLength) {
            notifications.splice(0, notifications.length - notificationsLength);
        }
    }
    /**
     * Receive a response from the server.
     *
     * Usually called asynchronously via the `send` method of a derived class
     * when a response is returned. Uses the `id` of the response to match it to the corresponding
     * request and resolve it's promise.
     *
     * Logs errors, rather than throwing exceptions, if the server sends a bad
     * response because this method is called asynchronously when a message
     * is received and to avoid crashing the process.
     *
     * @param message A JSON-RPC response (to a request) or a notification.
     */
    receive(message) {
        if (typeof message === 'string') {
            try {
                message = JSON.parse(message);
            }
            catch (error) {
                log$1.error(`Error parsing message as JSON: ${message}`);
                return;
            }
        }
        const { id } = message;
        if (id === undefined) {
            // A notification request
            const { method, params = [] } = message;
            const args = Object.values(params);
            return this.notified(method, args[0]);
        }
        // Must be a response....
        if (id.length === 0) {
            // A response with accidentally missing id
            log$1.error(`Response is missing id: ${JSON.stringify(message)}`);
            return;
        }
        const request = this.requests[id];
        if (request === undefined) {
            log$1.error(`No request found for response with id: ${id}`);
            return;
        }
        const { resolve, reject } = request;
        const { result, error } = message;
        if (!(error === null || error === undefined))
            reject(JsonRpcError.toError(error));
        else {
            try {
                resolve(result);
            }
            catch (error) {
                log$1.error(`Unhandled error when resolving result: ${error}`);
            }
        }
        delete this.requests[id];
    }
    /**
     * @override Override of {@link Executor.stop} that rejects
     * all outstanding requests.
     *
     * @description If outstanding requests are not rejected
     * like this then they cant `await` for ever, after the
     * client has stopped. This could be implemented to
     * have a grace period.
     */
    stop() {
        for (const { reject } of Object.values(this.requests)) {
            reject(new Error('Client is stopping'));
        }
        return super.stop();
    }
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = { forever: options };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}
var retry_operation = RetryOperation;

RetryOperation.prototype.reset = function() {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts;
};

RetryOperation.prototype.stop = function() {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  this._timeouts       = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function(err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }
  var currentTime = new Date().getTime();
  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.unshift(new Error('RetryOperation timeout occurred'));
    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();
  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(this._errors.length - 1, this._errors.length);
      this._timeouts = this._cachedTimeouts.slice(0);
      timeout = this._timeouts.shift();
    } else {
      return false;
    }
  }

  var self = this;
  var timer = setTimeout(function() {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function() {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
          self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
      timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function(fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }
    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;
  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function() {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function(fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function(fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function() {
  return this._errors;
};

RetryOperation.prototype.attempts = function() {
  return this._attempts;
};

RetryOperation.prototype.mainError = function() {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;

    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};

var retry = createCommonjsModule(function (module, exports) {
exports.operation = function(options) {
  var timeouts = exports.timeouts(options);
  return new retry_operation(timeouts, {
      forever: options && options.forever,
      unref: options && options.unref,
      maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function(options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };
  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];
  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  }

  // sort the array numerically ascending
  timeouts.sort(function(a,b) {
    return a - b;
  });

  return timeouts;
};

exports.createTimeout = function(attempt, opts) {
  var random = (opts.randomize)
    ? (Math.random() + 1)
    : 1;

  var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);

  return timeout;
};

exports.wrap = function(obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method   = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op       = exports.operation(options);
      var args     = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();

      args.push(function(err) {
        if (op.retry(err)) {
          return;
        }
        if (err) {
          arguments[0] = op.mainError();
        }
        callback.apply(this, arguments);
      });

      op.attempt(function() {
        original.apply(obj, args);
      });
    }.bind(obj, original);
    obj[method].options = options;
  }
};
});

var retry$1 = retry;

class AbortError extends Error {
	constructor(message) {
		super();

		if (message instanceof Error) {
			this.originalError = message;
			({message} = message);
		} else {
			this.originalError = new Error(message);
			this.originalError.stack = this.stack;
		}

		this.name = 'AbortError';
		this.message = message;
	}
}

const decorateErrorWithCounts = (error, attemptNumber, options) => {
	// Minus 1 from attemptNumber because the first attempt does not count as a retry
	const retriesLeft = options.retries - (attemptNumber - 1);

	error.attemptNumber = attemptNumber;
	error.retriesLeft = retriesLeft;
	return error;
};

const pRetry = (input, options) => new Promise((resolve, reject) => {
	options = {
		onFailedAttempt: () => {},
		retries: 10,
		...options
	};

	const operation = retry$1.operation(options);

	operation.attempt(async attemptNumber => {
		try {
			resolve(await input(attemptNumber));
		} catch (error) {
			if (!(error instanceof Error)) {
				reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
				return;
			}

			if (error instanceof AbortError) {
				operation.stop();
				reject(error.originalError);
			} else if (error instanceof TypeError) {
				operation.stop();
				reject(error);
			} else {
				decorateErrorWithCounts(error, attemptNumber, options);

				try {
					await options.onFailedAttempt(error);
				} catch (error) {
					reject(error);
					return;
				}

				if (!operation.retry(error)) {
					reject(operation.mainError());
				}
			}
		}
	});
});

var pRetry_1 = pRetry;
// TODO: remove this in the next major version
var default_1 = pRetry;

var AbortError_1 = AbortError;
pRetry_1.default = default_1;
pRetry_1.AbortError = AbortError_1;

/**
 * Utility function for using WebSockets
 */
/**
 * Generate the `Sec-Websocket-Protocol` header.
 *
 * This is the only header that can be set in the WebSocket constructor
 * and we use it to pass client id and JWT to the server.
 * The generated header follows the recommendations of
 * https://tools.ietf.org/html/rfc6455#section-1.9 with `+`
 * used as a separator between its parts.
 *
 * @param id The id of the client
 * @param jwt A JWT
 */
function generateProtocol(id, jwt) {
    return `executa.stenci.la+1+${id}` + (jwt !== undefined ? `+${jwt}` : '');
}
/**
 * Is a WebSocket in the open state?
 *
 * @param socket The WebSocket to check
 */
function isOpen(socket) {
    return socket.readyState === browser.OPEN;
}
/**
 * Is a WebSocket in the closing or closed state?
 *
 * @param socket The WebSocket to check
 */
function isClosingOrClosed(socket) {
    return (socket.readyState === browser.CLOSING ||
        socket.readyState === browser.CLOSED);
}
/**
 * Wait until a socket is in the open state.
 *
 * @param socket The WebSocket to wait for
 * @param timeout The number of seconds to wait for the socket
 *                to be open before throwing a timeout error
 */
function untilOpen(socket, timeout = 60) {
    if (isClosingOrClosed(socket))
        throw new Error('WebSocket is closing or closed');
    if (socket.readyState !== browser.OPEN) {
        return new Promise((resolve, reject) => {
            let open = false;
            socket.onopen = () => {
                open = true;
                resolve();
            };
            setTimeout(() => {
                if (!open)
                    reject(new Error('WebSocket timeout'));
            }, timeout * 1000);
        });
    }
    return Promise.resolve();
}
/**
 * Send data on a WebSocket connection.
 *
 * @param socket The WebSocket to send data on
 * @param data The data to send
 * @param timeout The number of seconds to wait for the socket
 *                to be open before throwing a timeout error
 */
async function send(socket, data, timeout = 60) {
    await untilOpen(socket, timeout);
    socket.send(data);
    return Promise.resolve();
}

const log$3 = p('executa:ws:client');
const defaultWebSocketClientOptions = {
    logging: true,
    timeout: 60,
    retries: 10,
};
/**
 * A `Client` using the WebSockets API for communication.
 */
class WebSocketClient extends Client {
    /**
     * Construct a `WebSocketClient`.
     *
     * @param address The address of the server to connect to
     */
    constructor(address = new WebSocketAddress(), options = defaultWebSocketClientOptions) {
        super('ws');
        /**
         * Has this client been explicitly stopped.
         *
         * Used to determine whether to try to reconnect.
         */
        this.isStopped = false;
        this.retryConnect = (resolve, reject) => {
            // Terminate early if already attempting to reconnect
            if (this.isRetrying === true) {
                return Promise.resolve();
            }
            if (this.options.logging) {
                log$3.info(`Connection closed, trying to reconnect`);
            }
            this.isRetrying = true;
            return pRetry_1(() => this.start(), {
                retries: this.options.retries,
                randomize: true,
                maxTimeout: 5000,
                onFailedAttempt: (error) => {
                    if (this.options.logging) {
                        log$3.info(`Connection attempt ${error.attemptNumber} failed. ${error.retriesLeft} retries left.`);
                    }
                },
            })
                .then(resolve)
                .catch(() => {
                reject(new Error(`Failed to reconnect after ${this.options.retries} attempt(s)`));
            })
                .finally(() => {
                this.isRetrying = false;
            });
        };
        this.address = new WebSocketAddress(address);
        this.options = { ...defaultWebSocketClientOptions, ...options };
    }
    /**
     * Start the connection.
     *
     * Creates a new WebSocket and sets up event handlers including
     * for automatically reconnecting if the connection is closed.
     */
    start() {
        const { id, address, options: { retries, logging }, } = this;
        return new Promise((resolve, reject) => {
            this.socket = new browser(address.url(), generateProtocol(id, address.jwt));
            this.socket.onopen = () => {
                this.isStopped = false;
                resolve();
            };
            this.socket.onmessage = (event) => this.receive(event.data.toString());
            this.socket.onclose = (event) => {
                // Try to reconnect if not explicitly closed or if
                // authentication failed
                if (this.isStopped)
                    return resolve();
                const { code, reason } = event;
                if (code === 4001) {
                    const error = `Failed to authenticate with server: ${reason}`;
                    if (logging) {
                        log$3.error(error);
                    }
                    reject(new Error(error));
                }
                if (retries > 0 && this.isRetrying === undefined) {
                    // Configured to reconnect, but the process hasn't been started yet
                    return this.retryConnect(resolve, reject);
                }
                else if (this.isRetrying === true) {
                    // Configured to reconnect, and the process is already in progress
                    return undefined;
                }
                else {
                    // Not configured to reconnect, or the reconnect process failed
                    reject(new Error('Connection closed.'));
                }
            };
            this.socket.onerror = (error) => {
                if (logging)
                    log$3.error(error.message);
                if (retries > 0 && this.isRetrying === undefined) {
                    return this.retryConnect(resolve, reject);
                }
                else {
                    reject(new Error(error.message));
                }
            };
        });
    }
    /**
     * @implements Implements {@link Client.send} to send
     * the request using the Websocket
     *
     * @description Will wait until the socket is open before
     * attempting to send the data.
     */
    async send(request) {
        const { socket, options: { timeout }, } = this;
        if (socket === undefined) {
            await this.start();
            return this.send(request);
        }
        return send(socket, JSON.stringify(request), timeout);
    }
    /**
     * @override Override of {@link Client.receive} to only
     * accept messages if the WebSocket is open.
     */
    receive(message) {
        const { socket, options: { logging }, } = this;
        if (socket === undefined)
            return;
        if (isOpen(socket))
            super.receive(message);
        else if (logging)
            log$3.warn(`Message received while socket was closing: ${message}`);
    }
    /**
     * Stop the connection by closing the WebSocket.
     */
    stop() {
        this.isStopped = true;
        if (this.socket !== undefined)
            this.socket.close();
        return Promise.resolve();
    }
    /**
     * @implements Implements {@link ClientType.discover}.
     *
     * @description Not implemented yet. In the future
     * could be implemented using port scanning on the
     * localhost.
     */
    static discover() {
        log$3.warn('Discovery not available for WebSocket client');
        return Promise.resolve([]);
    }
}

/**
 * @internal
 */
var isOutOfBound$1 = function (i, as) { return i < 0 || i >= as.length; };

/**
 * Test whether an array contains a particular index
 *
 * @since 2.5.0
 */
var isOutOfBound = isOutOfBound$1;
function lookup$1(i, as) {
    return as === undefined ? function (as) { return lookup$1(i, as); } : isOutOfBound(i, as) ? none$1 : some$1(as[i]);
}

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------
/**
 * Test whether an array is empty
 *
 * @example
 * import { isEmpty } from 'fp-ts/Array'
 *
 * assert.strictEqual(isEmpty([]), true)
 *
 * @category refinements
 * @since 2.0.0
 */
var isEmpty = function (as) { return as.length === 0; };
// TODO: remove non-curried overloading in v3
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @example
 * import { lookup } from 'fp-ts/Array'
 * import { some, none } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)
 *
 * @since 2.0.0
 */
var lookup = lookup$1;

var pluralize = createCommonjsModule$1(function (module, exports) {
/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (typeof commonjsRequire === 'function' && 'object' === 'object' && 'object' === 'object') {
    // Node.
    module.exports = pluralize();
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(commonjsGlobal, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Lower cased words. E.g. "hello".
    if (word === word.toLowerCase()) return token.toLowerCase();

    // Upper cased words. E.g. "WHISKY".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace (word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord (token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord (replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});
});

var JobStatus;
(function (JobStatus) {
  // Keep checking
  JobStatus["WAITING"] = "WAITING";
  JobStatus["DISPATCHED"] = "DISPATCHED";
  JobStatus["PENDING"] = "PENDING";
  JobStatus["RECEIVED"] = "RECEIVED";
  JobStatus["STARTED"] = "STARTED";
  // Stop Checking
  JobStatus["SUCCESS"] = "SUCCESS";
  JobStatus["FAILURE"] = "FAILURE";
  JobStatus["CANCELLED"] = "CANCELLED";
  JobStatus["REVOKED"] = "REVOKED";
  JobStatus["TERMINATED"] = "TERMINATED";
  // Ready to execute
  JobStatus["RUNNING"] = "RUNNING";
})(JobStatus || (JobStatus = {}));
const jobLogic = {
  keepChecking: [
    JobStatus.WAITING,
    JobStatus.DISPATCHED,
    JobStatus.PENDING,
    JobStatus.RECEIVED,
    JobStatus.STARTED,
  ],
  stopChecking: [
    JobStatus.SUCCESS,
    JobStatus.FAILURE,
    JobStatus.CANCELLED,
    JobStatus.REVOKED,
    JobStatus.TERMINATED,
  ],
  readyToExecute: [JobStatus.RUNNING],
};
const isErrorGuard = (jobError) => !(jobError instanceof Error);
const executableJobGuard = (job) => job.url !== null && jobLogic.readyToExecute.includes(job.status);
const failedJobGuard = (job) => jobLogic.stopChecking.includes(job.status);
const jobToDatum = (job) => {
  if (jobLogic.stopChecking.includes(job.status)) {
    // Stop polling
    return failure(job);
  }
  else if (jobLogic.readyToExecute.includes(job.status)) {
    // Ready to execute
    return executableJobGuard(job) ? success(job) : failure(job);
  }
  return toReplete(failedJobGuard(job) ? failure(job) : success(job));
};
const jobFetch = factory().options({ credentials: 'include' });
const fetchJob = (jobUrl) => jobFetch
  .url(jobUrl)
  .get()
  .json((job) => job);
const fetchJobDatum = (jobUrl) => jobUrl === undefined
  ? Promise.resolve(failure(new Error('No Job Url to connect to')))
  : _function.pipe(jobUrl, async (job) => {
    const j = await fetchJob(job);
    return jobToDatum(j);
  });

const jobErrorMessage = (jobError) => isErrorGuard(jobError)
  ? jobError.statusMessage
  : 'An unexpected error occurred';
const jobStatusString = (jobObject) => _function.pipe(jobObject, fold(() => 'Requesting session', () => 'Requesting session', jobErrorMessage, (job) => job.statusMessage, jobErrorMessage, (job) => job.statusMessage));
const SessionStatus = ({ session, job }, children) => (h("span", { class: {
    executableDocumentStatus: true,
    danger: isFailure(session),
    success: isSuccess(session),
  } }, _function.pipe(session, fold(() => '', () => (h("span", null,
  h("stencila-icon", { icon: "loader-2" }),
  h("span", null, jobStatusString(job)))), (refreshingErroredJob) => (h("span", null,
  h("stencila-icon", { icon: "loader-2" }),
  h("span", null, jobErrorMessage(refreshingErroredJob)))), (refreshingSession) => (h("span", null, isEmpty(children) ? ([
  h("stencila-icon", { icon: "loader-2" }),
  refreshingSession.status,
]) : (h("span", null, children)))), (err) => (h("span", null,
  h("stencila-icon", { icon: "error-warning" }),
  h("span", null, jobErrorMessage(err)))), () => (h("stencila-tooltip", { text: "Compute session is active" },
  h("stencila-icon", { icon: "pulse" }),
  isEmpty(children) ? null : h("span", null, children)))))));

const defaultExecutableDocumentToolbarCss = ":host,stencila-executable-document-toolbar{--background:var(--color-neutral-100)}:host,stencila-executable-document-toolbar{display:block}:host([position=fixed]),stencila-executable-document-toolbar[position=fixed]{left:0;max-width:none!important;position:fixed;top:0;width:100%;z-index:1}:host([position=fixed])+*,stencila-executable-document-toolbar[position=fixed]+*{margin-top:3rem}:host .hidden-sm,stencila-executable-document-toolbar .hidden-sm{display:none}@media (min-width:640px){:host .hidden-sm,stencila-executable-document-toolbar .hidden-sm{display:inline}}:host .executableDocumentStatus,stencila-executable-document-toolbar .executableDocumentStatus{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-size:.875rem;line-height:1.25rem;line-height:1}:host .executableDocumentStatus.success,stencila-executable-document-toolbar .executableDocumentStatus.success{color:#1b5430;color:var(--color-success-700,#1b5430)}:host .executableDocumentStatus.danger,stencila-executable-document-toolbar .executableDocumentStatus.danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}:host .executableDocumentStatus stencila-icon,stencila-executable-document-toolbar .executableDocumentStatus stencila-icon{margin-right:.25rem}:host .executableDocumentStatus stencila-tooltip,stencila-executable-document-toolbar .executableDocumentStatus stencila-tooltip{cursor:help}:host .executableDocumentStatus span,stencila-executable-document-toolbar .executableDocumentStatus span{vertical-align:middle}";

const materialExecutableDocumentToolbarCss = ":host,stencila-executable-document-toolbar{--background:var(--color-neutral-100)}:host,stencila-executable-document-toolbar{display:block}:host([position=fixed]),stencila-executable-document-toolbar[position=fixed]{left:0;max-width:none!important;position:fixed;top:0;width:100%;z-index:1}:host([position=fixed])+*,stencila-executable-document-toolbar[position=fixed]+*{margin-top:3rem}:host .hidden-sm,stencila-executable-document-toolbar .hidden-sm{display:none}@media (min-width:640px){:host .hidden-sm,stencila-executable-document-toolbar .hidden-sm{display:inline}}:host .executableDocumentStatus,stencila-executable-document-toolbar .executableDocumentStatus{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-size:.875rem;line-height:1.25rem;line-height:1}:host .executableDocumentStatus.success,stencila-executable-document-toolbar .executableDocumentStatus.success{color:#1b5430;color:var(--color-success-700,#1b5430)}:host .executableDocumentStatus.danger,stencila-executable-document-toolbar .executableDocumentStatus.danger{color:#cf445e;color:var(--color-danger-500,#cf445e)}:host .executableDocumentStatus stencila-icon,stencila-executable-document-toolbar .executableDocumentStatus stencila-icon{margin-right:.25rem}:host .executableDocumentStatus stencila-tooltip,stencila-executable-document-toolbar .executableDocumentStatus stencila-tooltip{cursor:help}:host .executableDocumentStatus span,stencila-executable-document-toolbar .executableDocumentStatus span{vertical-align:middle}";

const notify = toastController({
  position: ToastPositions.topCenter,
});
const errorNotification = () => notify.present('Couldn’t start a compute session', {
  type: ToastTypes.danger,
});
const StencilaExecutableDocumentToolbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.jobPoller = undefined;
    /** Frequency in milliseconds with which to check the status of a Job on Stencila Hub */
    this.jobPollFrequency = 3000;
    this.requestController = new AbortController();
    this.requestSignal = this.requestController.signal;
    this.initAbortControllers = () => {
      this.requestController = new AbortController();
      this.requestSignal = this.requestController.signal;
    };
    /**
     * When `fixed` the Navbar will remain pinned to the top of the screen.
     * Note that if the Navbar component is not followed by a sibling element,
     * you will have to set `margin-top: 3rem` on the following element yourself.
     */
    this.position = 'fixed';
    this.session = initial;
    this.job = initial;
    this.executor = null;
    this.codeCount = 0;
    this.statusMessage = '';
    this.checkJobStatus = async () => {
      // If we're already checking for the status, don't send second request
      if (isRefresh(this.job)) {
        return this.job;
      }
      else {
        this.job = toRefresh(this.job);
        return fetchJobDatum(this.jobUrl);
      }
    };
    this.handleJobStatus = (job, onJobReady, onJobError) => _function.pipe(job, fold(() => {
      this.jobPoller = this.pollJobFn(this.jobPollFrequency, onJobReady, onJobError);
      return pending;
    }, () => job, () => job, () => job, (jobError) => {
      var _a;
      window.clearInterval(this.jobPoller);
      this.requestController.abort();
      (_a = this.executor) === null || _a === void 0 ? void 0 : _a.stop().catch((err) => {
        console.warn('Failed to stop Executa', err);
      });
      this.session = failure(jobError);
      return job;
    }, (jobValue) => {
      if (executableJobGuard(jobValue)) {
        window.clearInterval(this.jobPoller);
        this.jobPoller = this.pollJobFn(10000);
        if (onJobReady) {
          onJobReady(this.startExecutor(jobValue.url));
        }
      }
      return job;
    }), (jobDatum) => {
      this.job = jobDatum;
      return jobDatum;
    });
    this.pollJob = (onConnectCb, onRejectCb) => this.checkJobStatus()
      .then((job) => this.handleJobStatus(job, onConnectCb, onRejectCb))
      .catch((err) => this.handleJobStatus(failure(err)));
    this.pollJobFn = (interval = this.jobPollFrequency, onJobReady, onJobError) => window.setInterval(() => {
      this.pollJob(onJobReady, onJobError).catch((err) => failure(err));
    }, interval);
    this.findSession = async () => {
      // TODO: Smart polling: aggressive, ease up, accelerate again once wait time low?
      if (this.sessionProviderUrl === undefined) {
        return failure(new Error('Please set a SessionProviderUrl'));
      }
      if (isInitial(this.session) || isFailure(this.session)) {
        this.session = pending;
        return jobFetch
          .url(this.sessionProviderUrl)
          .post()
          .res((res) => {
          this.jobUrl = res.url;
        })
          .then(() => new Promise((resolve, reject) => this.handleJobStatus(initial, resolve, reject)))
          .catch((err) => {
          errorNotification();
          this.session = failure(err);
          throw err;
        });
      }
      return Promise.resolve(this.session);
    };
    this.startExecutor = async (executorUrl) => {
      const sessionClient = new WebSocketClient(executorUrl);
      this.executor = sessionClient;
      this.session = await sessionClient
        .begin(Ce())
        .then((session) => {
        notify.present('Ready to run document', {
          type: ToastTypes.success,
        });
        return success(session);
      })
        .catch((err) => {
        errorNotification();
        return failure(new Error(err));
      });
      return this.session;
    };
    this.codeNodeSelector = () => [
      ...Array.from(document.querySelectorAll('stencila-code-chunk, stencila-code-expression')),
    ];
    this.executeHandler = async (code) => {
      if (isPending(this.session)) {
        notify.present('Please wait until a compute session is found', {
          type: ToastTypes.warn,
        });
        return code;
      }
      const failureCase = (stackTrace) => {
        var _a;
        return (Object.assign(Object.assign({}, code), { errors: [
            ...((_a = code.errors) !== null && _a !== void 0 ? _a : []),
            p$1({
              errorType: 'error',
              errorMessage: `Could not run ${code.type === 'CodeChunk' ? 'code chunk' : 'code expression'}`,
              stackTrace: stackTrace,
            }),
          ] }));
      };
      return this.findSession()
        .then(() => {
        if (this.executor && isSuccess(this.session)) {
          return this.executor
            .execute(code, this.session.value.right)
            .catch((err) => {
            console.error(err);
            return failureCase(err);
          });
        }
        return failureCase('Couldn’t start a compute session');
      })
        .catch((err) => failureCase(err));
    };
    this.runAll = async (e) => {
      e.preventDefault();
      this.initAbortControllers();
      return new Promise((resolve, reject) => {
        this.requestSignal.addEventListener('abort', reject);
        this.findSession()
          .then(async () => {
          const results = [];
          let idx = 0;
          this.session = toRefresh(this.session);
          for (const node of this.codeNodeSelector()) {
            this.activeNodeIndex = idx;
            this.statusMessage = `${++idx} of ${this.codeCount} code ${pluralize('node', this.codeCount)}`;
            const res = await node.execute();
            results.push(res);
            if (idx >= this.codeCount) {
              this.statusMessage = '';
            }
          }
          this.session = toReplete(this.session);
          this.requestSignal.removeEventListener('abort', reject);
          return resolve(results);
        })
          .catch((err) => {
          this.requestSignal.removeEventListener('abort', reject);
          reject(err);
        });
      });
    };
    this.goToActiveNode = () => {
      var _a;
      _function.pipe(this.codeNodeSelector(), lookup((_a = this.activeNodeIndex) !== null && _a !== void 0 ? _a : -1), map$1((el) => {
        var _a;
        const toolbar = document.querySelector('stencila-executable-document-toolbar');
        const offset = (_a = toolbar === null || toolbar === void 0 ? void 0 : toolbar.getBoundingClientRect().height) !== null && _a !== void 0 ? _a : 0;
        const target = el.getBoundingClientRect().top - offset + window.pageYOffset;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      }));
    };
    this.executionProgress = () => (h("stencila-tooltip", { text: "Jump to location", onClick: this.goToActiveNode }, h("stencila-icon", { icon: "focus-3" }), h("span", null, this.statusMessage)));
  }
  componentWillLoad() {
    const codeNodes = this.codeNodeSelector();
    this.codeCount = codeNodes.length;
    codeNodes.map((code) => {
      // @ts-ignore
      code.executeHandler = this.executeHandler;
    });
  }
  render() {
    return (h(Host, { position: this.position }, h("stencila-toolbar", null, h("span", { slot: "start" }, h("stencila-button", { color: "stock", icon: "play", size: "small", onClick: this.runAll, disabled: this.codeCount <= 0, tooltip: this.codeCount <= 0
        ? 'No code nodes in the document to execute'
        : undefined, isLoading: isPending(this.session) || isRefresh(this.session), dataEl: "Toolbar/Run Document" }, isPending(this.session) || isRefresh(this.session)
      ? 'Running'
      : ['Run', h("span", { class: "hidden-sm" }, " Document")])), h("span", { slot: "middle" }, h(SessionStatus, { job: this.job, session: this.session }, isRefresh(this.session) && this.executionProgress())), this.sourceUrl !== undefined && (h("span", { slot: "end" }, h("stencila-button", { color: "stock", href: this.sourceUrl, target: "_blank", rel: "nofollow noopener", icon: "external-link", size: "small", dataEl: "Toolbar/Project Source" }, "Source"))))));
  }
};
StencilaExecutableDocumentToolbar.style = {
  default: defaultExecutableDocumentToolbarCss,
  material: materialExecutableDocumentToolbarCss
};

export { StencilaExecutableDocumentToolbar as stencila_executable_document_toolbar };
