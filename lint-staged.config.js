module.exports = {
  "**/*.(ts|tsx)": () => {
    return "yarn tsc --noEmit"
  },

  "**/*.(ts|tsx|js)": (filenames) => {
    return [
      `yarn eslint --fix ${filenames.join(" ")}`,
      `yarn prettier --write ${filenames.join(" ")}`
    ]
  },

  "**/*.(md|json)": (filenames) => {
    return `yarn prettier --write ${filenames.join(" ")}`
  }
}
