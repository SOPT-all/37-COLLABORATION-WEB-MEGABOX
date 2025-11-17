import { mkdir, readdir, readFile, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import { transform } from '@svgr/core';

const ASSET_DIR = join(process.cwd(), 'src/shared/assets');
const SVG_DIR = join(ASSET_DIR, 'svg');
const COMPONENT_DIR = join(ASSET_DIR, 'components');
const INDEX_FILE = join(ASSET_DIR, 'index.tsx');
const HEADER_COMMENT = [
  '/**',
  ' * ⚠️ 자동 생성된 파일입니다. 직접 수정하지 마세요.',
  ' * scripts/generate-icon-exports.ts를 다시 실행하여 갱신할 수 있습니다.',
  ' */',
].join('\n');

/**
 * 파일명을 PascalCase 컴포넌트 이름으로 변환
 * 예: arrow-left.svg -> IcArrowLeft
 */
function toComponentName(filename: string): string {
  const nameWithoutExt = filename.replace(/\.svg$/i, '');
  const parts = nameWithoutExt.split('-');
  const pascalCase = parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
  return `${pascalCase}`;
}

interface IconMeta {
  file: string;
  componentName: string;
}

function normalizeFillAttributes(svg: string) {
  return svg.replace(/fill="(?!none\b)[^"]*"/gi, 'fill="currentColor"');
}

async function ensureCleanComponentsDir() {
  await rm(COMPONENT_DIR, { recursive: true, force: true });
  await mkdir(COMPONENT_DIR, { recursive: true });
}

async function generateIconComponents() {
  try {
    const files = await readdir(SVG_DIR);
    const svgFiles = files.filter(file => file.endsWith('.svg')).sort();

    await ensureCleanComponentsDir();

    const icons: IconMeta[] = [];

    for (const file of svgFiles) {
      const componentName = toComponentName(file);
      const svgPath = join(SVG_DIR, file);
      const svgRaw = await readFile(svgPath, 'utf-8');
      const sanitizedSvg = normalizeFillAttributes(svgRaw);

      const componentSource = await transform(
        sanitizedSvg,
        {
          typescript: true,
          jsxRuntime: 'automatic',
          expandProps: 'end',
          prettier: false,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            plugins: [
              {
                name: 'removeAttrs',
                params: {
                  attrs: ['data-name'],
                },
              },
            ],
          },
        },
        { componentName }
      );

      const componentPath = join(COMPONENT_DIR, `${componentName}.tsx`);
      await writeFile(
        componentPath,
        [HEADER_COMMENT, componentSource.trim(), ''].join('\n'),
        'utf-8'
      );

      icons.push({
        file,
        componentName,
      });
    }

    const imports = ["import type { SVGProps } from 'react';"].join('\n');

    const iconType = 'export type IconProps = SVGProps<SVGSVGElement>;';
    const exports =
      icons.length > 0
        ? icons
            .map(
              ({ componentName }) =>
                `export { default as ${componentName} } from './components/${componentName}';`
            )
            .join('\n')
        : '';

    const contents = [HEADER_COMMENT, imports, '', iconType, '', exports, '']
      .filter(Boolean)
      .join('\n');

    await writeFile(INDEX_FILE, contents, 'utf-8');

    console.log('🎉 아이콘 컴포넌트를 성공적으로 생성했습니다');
  } catch (error) {
    console.error('❌ 아이콘 생성 중 오류가 발생했습니다:', error);
    process.exit(1);
  }
}

generateIconComponents();
