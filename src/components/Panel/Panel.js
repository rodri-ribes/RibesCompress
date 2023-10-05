import React from "react";
import style from "./Panel.module.scss";

import compressionFile from "../../functions/compressionFiles";
import handleOnChange from "../../functions/handleOnChange";
import styleSelected from "../../functions/styleSelected";

export default function Panel({
  setOptions,
  options,
  setInformation,
  startTransition,
  files,
  setFiles,
}) {
  return (
    <div className={style.container}>
      <button
        name="view"
        value={"false"}
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
        className={style.container_delete}>
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
          className="bi bi-x-lg"></i>
      </button>
      <h4>Settings</h4>
      <hr />
      <p className={style.container_description}>Compression Range</p>
      <div className={style.container__range}>
        <input
          type={"range"}
          min={1}
          max={10}
          name="compressionRange"
          value={options.compressionRange}
          onChange={(e) =>
            handleOnChange(
              e,
              "range",
              setOptions,
              options,
              compressionFile,
              files,
              setInformation,
              setFiles,
              startTransition
            )
          }
        />
        <b>{options.compressionRange}</b>
      </div>
      {options.compressionRange < 6 && (
        <i>It is recommended from 6 to 9 to have acceptable quality</i>
      )}
      <p>Output Format</p>
      <div className={style.container__output}>
        {["jpeg", "png"].map((f, i) => {
          return (
            <button
              key={i}
              name="outputFormat"
              value={f}
              style={styleSelected(f, options)}
              onClick={(e) =>
                handleOnChange(
                  e,
                  "false",
                  setOptions,
                  options,
                  compressionFile,
                  files,
                  setInformation,
                  setFiles,
                  startTransition
                )
              }>
              .{f.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
