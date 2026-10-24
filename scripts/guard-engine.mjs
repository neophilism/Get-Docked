import {execFileSync} from 'node:child_process';
const allowed=new Set(["README.md","AGENTS.md","docs/DEVELOPMENT_PLAN.md","registry/prs.json","package.json","scripts/validate-plan.mjs","tests/registry.test.mjs",".github/workflows/registry.yml",".gitignore","docs/potential-features.md","docs/ENGINE_DEPENDENCY.md",".github/workflows/engine-gate.yml"]);
const changed=execFileSync('git',['diff','--name-only','origin/main...HEAD'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
const bad=changed.filter(x=>!allowed.has(x));
if(bad.length){console.error('ENGINE_NOT_COMPLETE: blocked Get Docked feature changes:',bad);process.exit(1)}
console.log('Foundation-only change permitted');
