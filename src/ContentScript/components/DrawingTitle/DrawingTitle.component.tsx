import React from "react";
import "./DrawingTitle.styles.scss";
import { useLocalStorageString } from "../../hooks/useLocalStorageString.hook";
import { DRAWING_TITLE_KEY_LS } from "../../../lib/constants";
import { browser } from "webextension-polyfill-ts";

export function DrawingTitle() {
  const title = useLocalStorageString(DRAWING_TITLE_KEY_LS, "");
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      {title ? (
        <h1
          style={{
            margin: "0",
            fontSize: "1.15rem",
            userSelect: "text",
          }}
        >
          {title}
        </h1>
      ) : null}
      <button
        ref={buttonRef}
        className="excalidraw-button collab-button excalisave-button"
        style={{
          width: "auto",
          marginLeft: "8px",
          // Defensive visible styles so the button shows even if Excalidraw
          // toolbar classes don't fully apply in the mount location.
          display: "inline-flex",
          alignItems: "center",
          padding: "4px 10px",
          fontSize: "12px",
          lineHeight: 1,
          borderRadius: "4px",
          border: "1px solid var(--button-border, #d0d0d0)",
          background: "var(--button-bg, #f4f4f4)",
          color: "var(--button-color, inherit)",
          cursor: "pointer",
        }}
        title="Open Excalisave"
        onClick={() => {
          browser.runtime.sendMessage({ type: "OpenPopup" });
        }}
      >
        Excalisave
      </button>
    </>
  );
}
