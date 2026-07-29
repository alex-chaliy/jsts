# jsts

This repository is now set up as a pnpm workspace with small TypeScript sub-projects under the existing wrapper folders.

## Structure

- Root workspace: jsts
- Child sub-projects (monorepos):
  - 01-promises/01-delete-many
  - 01-promises/02-promise-resolve
  - 02-arrays/01-remove-from-array
  - 02-arrays/02-add-to-array

## Workflow

From the repository root:

```bash
pnpm install
```

Then enter the sub-project you want to use and install its local dependencies if needed:

```bash
cd 01-promises/01-delete-many
pnpm install
pnpm run build
pnpm start
```

## Notes

- The root package.json contains shared dev dependencies such as TypeScript, SWC, and Node types.
- Each sub-project has its own package.json and SWC config for local builds.
- Build output is written to a dist folder inside each sub-project.
