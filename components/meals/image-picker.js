"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const img = useRef();
  const [pickImg, setPickImg] = useState();
  function handleImgPickers() {
    img.current.click();
  }
  function handleImgChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickImg(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        {pickImg && (
          <div className={classes.preview}>
            <Image src={pickImg} fill />
          </div>
        )}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={img}
          onChange={handleImgChange}
          required
        ></input>
        <button
          className={classes.button}
          type="button"
          onClick={handleImgPickers}
        >
          Pick Img
        </button>
      </div>
    </div>
  );
}
