import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return ["", "/about", "/resume"].map((path) => ({
        url: `https://willschmidt.dev${path}`,
        lastModified: new Date(),
    }));
}
