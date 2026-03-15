const basePath = process.env.__NEXT_ROUTER_BASEPATH || "/SarasPortfolio";

export function imgSrc(path: string): string {
  if (path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}
