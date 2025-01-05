import path from "path";

const buildEslintCommand = (filenames: string[]): string =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const LINT_STAGED_CONFIG = {
  "**/*.{ts,tsx}": ["prettier --write", "tsc -p tsconfig.json --noEmit", buildEslintCommand],
};

export default LINT_STAGED_CONFIG;
