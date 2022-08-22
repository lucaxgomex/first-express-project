
# First time using Express with Node.js

This is my first project with some of the greatest technologies for Backend Development. 

### Roadmap to initialize your own project (Step by Step)

> For this project, the main choosen package manager was **yarn.**

- **yarn init -y**
- **yarn add express**
- **yarn add @types/express -D**
- **yarn add typescript -D**
- **yarn tsc --init** (By doing this, you'll be setting TypeScript on your project)
- **Change es2017 to "target": "es2017"** (package.json)
- **yarn add ts-node-dev -D**
- Into scripts section from **package.json** file, add this: 

```
{
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
}
```