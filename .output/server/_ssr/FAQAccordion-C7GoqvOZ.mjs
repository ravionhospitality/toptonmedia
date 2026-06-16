import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-sand", children: faqs.map((faq, i) => {
    const open = openIndex === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpenIndex(open ? null : i),
          className: "w-full flex items-center justify-between gap-4 py-5 text-left group",
          "aria-expanded": open,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-medium text-charcoal group-hover:text-maroon transition-colors", children: faq.question }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronDown,
              {
                size: 20,
                className: `flex-shrink-0 text-maroon transition-transform duration-300 ${open ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/65 leading-relaxed pr-8", children: faq.answer })
        }
      )
    ] }, faq.question);
  }) });
}
export {
  FAQAccordion as F
};
