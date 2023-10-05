export default function styleSelected(format, options) {
  return {
    background: options.outputFormat === format ? "#085eff" : "transparent",
    color: options.outputFormat === format ? "white" : "#085eff",
    outline: options.outputFormat === format ? "none" : "1px solid #085eff",
  };
}
