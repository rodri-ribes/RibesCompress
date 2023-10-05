import Compressor from "compressorjs";

export default function compressionFile(
  imgs,
  compressionRange,
  setInformation,
  setFiles,
  reloadImages,
  startTransition
) {
  //entrara si fue ejecutar atravez del range, limpiamos los state para no duplicar las imgs
  if (!reloadImages) {
    setInformation([]);
    setFiles((prev) => ({
      ...prev,
      compressed_files: [],
    }));
  }

  startTransition(() => {
    for (const img of imgs) {
      setInformation((prev) => ({
        ...prev,
        [img.name.split(".")[0]]: {
          previousSize: img.size,
        },
      }));

      //evitamos perder las imagenes originales si se ejecuta por el range
      if (reloadImages) {
        setFiles((prev) => ({
          ...prev,
          uncompressed_files: [...prev.uncompressed_files, img],
        }));
      }

      new Compressor(img, {
        quality: compressionRange > 9 ? 1 : parseFloat(`0.${compressionRange}`),
        async success(result) {
          setFiles((prev) => ({
            ...prev,
            compressed_files: [...prev.compressed_files, result],
          }));
          setInformation((prev) => ({
            ...prev,
            [img.name.split(".")[0]]: {
              ...prev[img.name.split(".")[0]],
              finalSize: result.size,
            },
          }));
        },
        error(err) {
          console.log(err.message);
        },
      });
    }
  });
}
