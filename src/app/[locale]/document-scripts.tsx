"use client";

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";

const themeScript = `(function(){try{var t=localStorage.getItem("innova-theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}})();`;
const consentScript = `(function(){try{var s=localStorage.getItem("innova-consent");if(s==="granted"||s==="denied"){document.documentElement.dataset.cookies="set"}}catch(e){}})();`;

export function DocumentScripts() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;

    return (
      <>
        <script id="innova-theme" dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script id="innova-consent" dangerouslySetInnerHTML={{ __html: consentScript }} />
      </>
    );
  });

  return null;
}
