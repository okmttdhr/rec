/* eslint-disable @typescript-eslint/no-explicit-any */
type ModifierFunc = (i: number) => Record<string, any>;
type Modifier = Record<string, any> | ModifierFunc;
type BuilderFunc<T> = (i?: number, modifier?: Modifier) => T;
type Builder = (i: number) => Record<string, any>;
/* eslint-enable @typescript-eslint/no-explicit-any */

const single = <T>(builder: Builder): BuilderFunc<T> => (i = 0, modifier: Modifier = {}) => {
  let m = modifier;
  if (typeof modifier === 'function') {
    const md: Function = modifier;
    m = md(i);
  }
  return {
    ...builder(i),
    ...m,
  } as T;
};

const multi = <T>(builder: Builder): BuilderFunc<T[]> => (range = 5, modifier: Modifier = {}): T[] => {
  const n = Array(range).keys();
  return Array.from(n).map((i: number) => {
    return single<T>(builder)(i, modifier);
  });
};

/**
 * モックを生成する関数群。2つの関数を露出し、それぞれ以下のように使用する。
 *
 * single: モックに反映させたいインデックスと、上書きしたいオブジェクトを渡す。
 * single(1, { propertyYouWantToModify: i + 1 })
 *
 * multi: モックのlengthと、上書きしたいオブジェクトを渡す。
 * multi(5, { propertyYouWantToModify: i + 1 })
 *
 * multi: 上書きするオブジェクトのインデックスを指定したい場合は、以下のようにする。
 * multi(5, (i) => i === 0 ? { propertyYouWantToModify: i + 1 } : {})
 */
export const mockBuilder = <T>(builder: Builder) => {
  return {
    single: single<T>(builder),
    multi: multi<T>(builder),
  };
};
