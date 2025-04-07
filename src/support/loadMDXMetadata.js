// @ts-nocheck
import glob from 'fast-glob';

const exportNames = {
  blog: 'article',
  schedule: 'eventDetails',
};

export async function loadMDXMetadata(directory) {
  return (
    await Promise.all(
      (
        await glob('**/index.mdx', { cwd: `src/pages/summit/${directory}` })
      ).map(async (filename) => {
        let id = filename.replace(/\/index\.mdx$/, '');
        return {
          id,
          href: `/${directory}/${id}`,
          ...(await import(`../pages/summit/${directory}/${filename}`))[
            exportNames[directory]
          ],
        };
      }),
    )
  ).sort((a, b) => String(b.date).localeCompare(String(a.date)));
}
