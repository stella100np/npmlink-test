import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './index'
  ],
  declaration: true, // generate .d.ts files
})