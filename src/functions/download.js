import Jszip from "jszip";
import { saveAs } from "file-saver";

export default function download(files, options){
    if (files?.compressed_files?.length > 1) {
        const zip = new Jszip();
  
        files?.compressed_files?.forEach((p) => {
          const img = new Blob([p], { type: `image/${options.outputFormat}` });
          zip.file(p.name.split(".")[0] + `.${options.outputFormat}`, img);
        });
  
        zip
          .generateAsync({ type: "blob" })
          .then((resp) => saveAs(resp, "RibesCompress.zip"));
      } else {
        let name = files.compressed_files[0]?.name?.split(".")[0];
        const img = new Blob([files.compressed_files[0]], {
          type: `image/${options.outputFormat}`,
        });
        saveAs(img, name);
      }
}