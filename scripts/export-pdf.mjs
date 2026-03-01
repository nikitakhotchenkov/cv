import { copyFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const outputDir = join(rootDir, 'public');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const previewPort = 4173;
const previewUrl = `http://127.0.0.1:${previewPort}`;
const macSystemChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDir,
      stdio: 'inherit',
      ...options,
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
      }
    });
  });
}

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Wait until the preview server is ready.
    }

    await delay(500);
  }

  throw new Error(`Preview server did not become ready at ${url}`);
}

function startPreview() {
  return spawn(npmCmd, ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(previewPort)], {
    cwd: rootDir,
    stdio: 'inherit',
  });
}

async function launchBrowser() {
  try {
    return await chromium.launch();
  } catch (primaryError) {
    if (!existsSync(macSystemChrome)) {
      throw primaryError;
    }

    console.warn('Default Playwright browser not available, trying system Chrome.');

    try {
      return await chromium.launch({
        executablePath: macSystemChrome,
        args: ['--disable-crash-reporter', '--disable-breakpad', '--no-crashpad'],
        env: {
          ...process.env,
          HOME: '/tmp',
        },
      });
    } catch (fallbackError) {
      throw new Error(
        `Failed to launch both Playwright browser and system Chrome. ${String(primaryError)} | ${String(fallbackError)}`,
      );
    }
  }
}

async function exportPdf(page, locale) {
  const targetPath = join(outputDir, `cv-${locale}.pdf`);

  await page.goto(`${previewUrl}/?lang=${locale}&export=pdf`, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: targetPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '6mm',
      right: '6mm',
      bottom: '6mm',
      left: '6mm',
    },
  });

  console.log(`Generated ${targetPath}`);
  return targetPath;
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  console.log('Building app...');
  await runCommand(npmCmd, ['run', 'build']);

  console.log('Starting preview server...');
  const preview = startPreview();

  let browser;
  try {
    await waitForServer(previewUrl);
    browser = await launchBrowser();

    const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
    const enPdfPath = await exportPdf(page, 'en');
    const ukPdfPath = await exportPdf(page, 'uk');

    await copyFile(enPdfPath, join(rootDir, 'Nikita_Khotchenkov_CV_EN.pdf'));
    await copyFile(ukPdfPath, join(rootDir, 'Nikita_Khotchenkov_CV_UA.pdf'));
    console.log('Updated root PDF copies.');
  } finally {
    if (browser) {
      await browser.close();
    }

    preview.kill('SIGTERM');
    await delay(200);
  }
}

main().catch((error) => {
  console.error('PDF export failed:', error.message);
  process.exitCode = 1;
});
