/* Export local dans le navigateur : conserve les SVG maîtres sans les modifier. */
(() => {
  "use strict";
  const outputs = document.getElementById("export-status");
  const options = {
    "faille": "logo-faille-noire-transparent.svg",
    "interstice": "logo-interstice-transparent.svg"
  };
  const status = (message) => { if (outputs) outputs.textContent = message; };
  const loadImage = (src) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("SVG introuvable : " + src));
    image.src = src;
  });
  const makeBlob = (canvas, mime) => new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob && blob.type === mime ? resolve(blob) : reject(new Error("Format non pris en charge par ce navigateur : " + mime)), mime, 0.92);
  });
  const exportAsset = async (button) => {
    const name = button.dataset.logo;
    const size = Number(button.dataset.size);
    const mime = button.dataset.format === "webp" ? "image/webp" : "image/png";
    if (!Object.hasOwn(options, name) || ![64, 256, 512, 1024].includes(size)) return;
    button.disabled = true;
    try {
      status("Conversion locale en cours…");
      const image = await loadImage(options[name]);
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Canvas indisponible");
      context.clearRect(0, 0, size, size);
      context.drawImage(image, 0, 0, size, size);
      const blob = await makeBlob(canvas, mime);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const extension = mime === "image/webp" ? "webp" : "png";
      link.href = url;
      link.download = "logo-" + name + "-transparent-" + size + "." + extension;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      status("Export préparé : " + link.download + " (" + Math.round(blob.size / 1024) + " Kio).");
    } catch (error) { status("Échec : " + (error.message || String(error))); }
    finally { button.disabled = false; }
  };
  document.querySelectorAll("button[data-logo][data-size][data-format]").forEach(button => {
    button.addEventListener("click", () => exportAsset(button));
  });
})();
