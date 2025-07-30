export default function validatePdfExtension(fileType: string) {
  if (fileType === "application/pdf") {
    return true;
  }
  return false;
}
