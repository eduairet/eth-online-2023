export const getJSON = async (url: string, options?: {}) => {
  try {
    const response = await fetch(url, options ? options : {})
    console.log(url)
    if (!response.ok) throw new Error(response.statusText)
    const data = response.json()
    return data
  } catch (err) {
    throw err
  }
}
