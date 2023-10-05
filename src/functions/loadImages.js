export default function loadImages(
  e,
  compressionFile,
  options,
  setInformation,
  setFiles,
  startTransition
) {
  let imgs = Object.values(e.target.files);
  compressionFile(
    imgs,
    options.compressionRange,
    setInformation,
    setFiles,
    true,
    startTransition
  );
}
