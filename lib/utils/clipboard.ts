export const copyToClipboard = (text: string) => {
  if (typeof window === undefined) return;

  return window.navigator.clipboard.writeText(text);
};
