export const createUrlSearchParams = (
  params: Record<string, string | number | boolean>
): URLSearchParams => {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    urlParams.append(key, String(value));
  });
  return urlParams;
};
