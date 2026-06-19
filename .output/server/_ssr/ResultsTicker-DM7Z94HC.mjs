import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as TICKER_ITEMS } from "./router-VSIbab2f.mjs";
function ResultsTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-charcoal overflow-hidden border-y border-gold/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track py-3", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center px-8 flex-shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-gold/90 tabular whitespace-nowrap", children: item }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-8 w-1 h-1 rounded-full bg-ivory/20" })
  ] }, i)) }) });
}
export {
  ResultsTicker as R
};
