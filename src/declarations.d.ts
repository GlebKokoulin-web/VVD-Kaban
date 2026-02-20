// Объявление модуля для JSX
// Это решает ошибку: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.

declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any;
  }
}
