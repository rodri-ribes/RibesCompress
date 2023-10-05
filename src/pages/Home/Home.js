//------ Imports
import React, { useState } from "react";
import style from "./Home.module.scss";
import { useTransition } from "react";

//------ Components
import Panel from "../../components/Panel/Panel";
import Carousel from "../../components/Carousel/Carousel";
//------ functions
import handleOnChange from "../../functions/handleOnChange";
import loadImages from "../../functions/loadImages";
import download from "../../functions/download.js";
import compressionFile from "../../functions/compressionFiles";

export default function Home() {
  const [files, setFiles] = useState({
    compressed_files: [],
    uncompressed_files: [],
  });

  const [isPending, startTransition] = useTransition();

  const [information, setInformation] = useState([]);

  const [options, setOptions] = useState({
    compressionRange: 6,
    outputFormat: "jpeg",
    view: "false",
  });

  return (
    <div className={style.container}>
      {options.view !== "false" && (
        <Panel
          setOptions={setOptions}
          options={options}
          setInformation={setInformation}
          startTransition={startTransition}
          files={files}
          setFiles={setFiles}
        />
      )}
      <div className={style.container__wrapper}>
        {options.view !== "true" && (
          <button
            value={options.view === "false" ? "true" : "false"}
            name="view"
            className={style.container__wrapper_settings}
            onClick={() =>
              handleOnChange(
                false,
                "view",
                setOptions,
                options,
                compressionFile,
                files,
                setInformation,
                setFiles,
                startTransition
              )
            }>
            <i
              onClick={() =>
                handleOnChange(
                  false,
                  "view",
                  setOptions,
                  options,
                  compressionFile,
                  files,
                  setInformation,
                  setFiles,
                  startTransition
                )
              }
              className="bi bi-gear"></i>
          </button>
        )}
        <div className={style.container__wrapper__header}>
          <h2>RibesCompress</h2>
          <a
            href="https://rodrigoribes.netlify.app/"
            target={"_blank"}
            rel="noreferrer">
            Developer
          </a>
        </div>
        <div className={style.container__wrapper__upload}>
          <div className={style.container__wrapper__upload_icon}>
            <i className="bi bi-upload"></i>
            <input
              title=""
              type="file"
              onChange={(e) =>
                loadImages(
                  e,
                  compressionFile,
                  options,
                  setInformation,
                  setFiles,
                  startTransition
                )
              }
              multiple
              accept=".jpg, .png"
            />
          </div>
        </div>

        <div className={style.container__wrapper__images}>
          {isPending ? (
            <p>loading</p>
          ) : (
            <Carousel
              images={files?.compressed_files}
              files={files}
              setFiles={setFiles}
              information={information}
              options={options}
            />
          )}
        </div>
        {files?.compressed_files?.length > 0 && (
          <button
            className={style.container__wrapper_download}
            onClick={() => download(files, options)}>
            Download {files?.compressed_files?.length > 1 && "All"}
          </button>
        )}
      </div>
    </div>
  );
}
