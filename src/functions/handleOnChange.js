export default function handleOnChange(
  e,
  action,
  setOptions,
  options,
  compressionFile,
  files,
  setInformation,
  setFiles,
  startTransition
) {
  if (action === "view") {
    setOptions((prev) => ({
      ...prev,
      view: options.view === "false" ? "true" : "false",
    }));
  } else {
    if (action === "range") {
      compressionFile(
        files.uncompressed_files,
        e.target.value,
        setInformation,
        setFiles,
        false,
        startTransition
      );
    }
    setOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
}
