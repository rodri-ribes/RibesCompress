export default function deleteImage(img, files, setFiles, information) {
  let compressed_files = files.compressed_files.filter(
    (p) => p.name !== img.name
  );
  let uncompressed_files = files.uncompressed_files.filter(
    (p) => p.name !== img.name
  );

  setFiles((prev) => ({
    ...prev,
    compressed_files: compressed_files,
    uncompressed_files: uncompressed_files,
  }));
  delete information[img.name.split(".")[0]];
}
