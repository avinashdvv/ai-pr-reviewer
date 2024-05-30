export const extractPullRequestNumber = (url: string) => {
  const parts = url.split('/') // Split the URL by '/'
  return Number(parts[parts.length - 1]) // The pull request number is the last part of the URL
}
