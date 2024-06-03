import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newPage = "https://epoll31.com";
const redirects = {
  "/iqp": "/iqp",
  "/mqp": "/mqp",
  "/work": "/projects",
};

function generatePage(name, content) {
  const filePath = path.join(__dirname, name);
  writeFileSync(filePath, content);
}

function generateRedirectPage(from, to) {
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${newPage + to}">
  <title>Redirecting...</title>
  <script type="text/javascript">
    window.location.href = "${newPage + to}";
  </script>
</head>
<body>
  <p>If you are not redirected automatically, follow this <a href="${
    newPage + to
  }">link to the new page</a>.</p>
</body>
</html>`;
  const name = `${from === "/" ? "index" : from}.html`;
  generatePage(name, content);
}

const generate404Page = () => {
  const content = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirecting...</title>
  <script type="text/javascript">
  const pathname = window.location.pathname;
  const newPath = \`${newPage}\${pathname}\`;
  window.location.href = newPath;

  document.addEventListener('DOMContentLoaded', function() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = \`0; url=\${newPath}\`;
    document.head.appendChild(meta);

    document.body.innerHTML = \`<p>If you are not redirected automatically, follow this <a href="\${newPath}">link to the new page</a>.</p>\`;
  });
  </script>
</head>
<body>
</body>
</html>
  `;
  generatePage("404.html", content);
};
for (const [from, to] of Object.entries(redirects)) {
  generateRedirectPage(from, to);
}

generateRedirectPage("/", "");
generate404Page();
