"use client";
import React, { useRef } from "react";
import classes from "./image-picker.module.css";

function ImagePicker({ label, name }) {
  const imagePickerRef = useRef();
  function handlePickClick() {
    imagePickerRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id={name}
          className={classes.input}
          ref={imagePickerRef}
          accept="image/png, image/jpeg"
          name={name}
        />
      </div>
      <button className={classes.button} type="button" onClick={handlePickClick}>
        Picke an Image
      </button>
    </div>
  );
}

export default ImagePicker;
