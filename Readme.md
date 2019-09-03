## Required setup steps BEFORE using the project
1. Install yarn using the MSI OR chocolatey/homebrew, e.g `cinst yarn`
1. `yarn global add typescript` (optional, can also install locally below)

## Steps to create this folder
1. Made directory p5ts
2. `cd p5ts` 
3. `yarn add @types/p5 --dev` // if you want to do local typescript, add that here
4. `mkdir dist`
6. `touch dist/index.html`
7. `mkdir src`
8. `touch src/index.ts`
9. `tsc --init`
10. Open tsconfig.json in editor and change module to `es6`, flag on `allowJs` and set `outDir` to `./dist`
11. `git init`
14. `touch .gitignore`
15. open .gitignore and add `node_modules`
16. `touch src/global.d.ts`
17. Open global.d.ts and include text:
    ```typescript
    import module = require('p5');
    import * as p5Global from 'p5/global' 

    export = module;
    export as namespace p5;
    declare global {
        interface Window {
            p5: typeof module,
        }
    }
    ```
    (code retreived from https://github.com/Gaweph/p5-typescript-starter/blob/master/global.d.ts)

