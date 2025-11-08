import * as React from "react";
import * as runtime from "react/jsx-runtime";

const { Fragment, jsx, jsxs } = runtime;

type Evaluate = (
  react: typeof React,
  jsxFactory: typeof runtime.jsx,
  jsxsFactory: typeof runtime.jsxs,
  fragment: typeof runtime.Fragment,
) => { default: React.ComponentType<any> };

function evaluate(code: string) {
  const fn = new Function("React", "jsx", "jsxs", "Fragment", code) as Evaluate;
  return fn(React, jsx, jsxs, Fragment);
}

export function getMDXComponent(code: string) {
  const { default: Component } = evaluate(code);
  return Component;
}
