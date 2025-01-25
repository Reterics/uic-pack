export function fileToDataURL(file: File) {
  return new Promise(resolve => {
    if (file) {
      const reader = new FileReader()

      reader.onload = e => {
        resolve(e.target?.result)
      }

      reader.readAsDataURL(file)
    }
  })
}
