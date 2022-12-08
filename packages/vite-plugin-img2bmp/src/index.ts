import { resolve } from "path";
import { readFile } from "fs/promises";
import jimp from "jimp";

import type { Plugin } from "vite";

const imgRE = /^.+\.png$/;

export default function ViteImg2bmpPlugin(): Plugin {
  const cachedMap = new Map<string, string>();

  return {
    name: "vite-plugin-img2bmp",
    enforce: "pre",
    resolveId(id) {
      if (imgRE.test(id)) {
        return id;
      }
      return null;
    },
    async load(id) {
      if (imgRE.test(id)) {
        if (cachedMap.has(id)) return cachedMap.get(id);
        const idPath = resolve(process.cwd(), "src", id);
        const file = await readFile(idPath);
        const image = await jimp.read(file).then((img) => {
          return img
            .resize(400, 300)
            .quality(100)
            .greyscale()
            .blur(5)
            .rotate(180);
        });

        const bmp = await image.getBufferAsync(jimp.MIME_BMP);
        const bmpStr = bmp.toString("base64");

        const code = `export default "data:image/bmp;base64,${bmpStr}"`;
        cachedMap.set(id, code);
        return code;
      }
      return null;
    },
  };
}
