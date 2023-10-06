import React from "react";
import style from "./ImageCard.module.scss";

import deleteImage from "../../functions/deleteImage";
import measurementConverter from "../../functions/measurementConverter";
import reducedPorcentage from "../../functions/reducedPorcentage";
import { saveAs } from "file-saver";

export default function ImageCard({
  img,
  information,
  files,
  setFiles,
  options,
}) {
  let name = img.name.split(".")[0];

  const download = () => {
    const file = new Blob([img], {
      type: `image/${options.outputFormat}`,
    });
    saveAs(file, name);
  };

  return (
    <div className={style.container}>
      <button
        className={style.container__delete}
        onClick={() => deleteImage(img, files, setFiles, information)}>
        <i className="bi bi-x-lg"></i>
      </button>
      <img src={URL.createObjectURL(img)} alt={img?.name} />
      <div
        className={style.container__data}
        style={{
          width: `${
            reducedPorcentage(information, img) > 0 ? "70px" : "100px"
          }`,
          height: `${
            reducedPorcentage(information, img) > 0 ? "70px" : "100px"
          }`,
        }}>
        {reducedPorcentage(information, img) > 0 ? (
          <p>{reducedPorcentage(information, img)} %</p>
        ) : (
          <p>Cannot be compressed</p>
        )}
      </div>

      <div className={style.container__information}>
        <p>
          Previous Weight:{" "}
          {measurementConverter(information[name].previousSize)}
        </p>
        <p>
          Current Weight: {measurementConverter(information[name].finalSize)}
        </p>
        <button
          className={style.container__information_download}
          onClick={() => download()}>
          <i className="bi bi-download"></i>
        </button>
      </div>
    </div>
  );
}
