export default function reducedPorcentage(information, img) {
  let previousSize = information[img.name.split(".")[0]]?.previousSize;
  let finalSize = information[img.name.split(".")[0]]?.finalSize;

  return Math.round(((previousSize - finalSize) / previousSize) * 100);
}
