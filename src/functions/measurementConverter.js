export default function measurementConverter(number) {
  let whatSize = number.length > 6 ? " MB" : " KB";

  return Math.round(number / 1024) + whatSize;
}
