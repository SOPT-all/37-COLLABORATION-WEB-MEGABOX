import { readdir, writeFile } from 'fs/promises';
import { join } from 'path';

const SVG_DIR = join(process.cwd(), 'src/shared/assets');
const INDEX_FILE = join(SVG_DIR, 'index.ts');

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
  return `Ic${pascalCase}`;
}

async function generateIconExports() {
  try {
    // SVG 디렉토리에서 모든 파일 읽기
    const files = await readdir(join(SVG_DIR, '/svg'));

    if (files.length === 0) {
      return;
    }

    // 각 SVG 파일에 대한 export 문 생성
    const exports = files
      .filter(file => file.endsWith('.svg'))
      .sort()
      .map(file => {
        const componentName = toComponentName(file);
        return `export { default as ${componentName} } from '@assets/svg/${file}?react';`;
      })
      .join('\n');

    await writeFile(INDEX_FILE, exports, 'utf-8');

    console.log(`🎉 아이콘을 성공적으로 생성했습니다`);
  } catch (error) {
    console.error('❌ 아이콘 생성 중 오류가 발생했습니다:', error);
    process.exit(1);
  }
}

generateIconExports();
