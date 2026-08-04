export default function handler(req, res) {
  const { port } = req.query;
  
  if (!port) {
    return res.status(400).json({ error: 'Port number is required' });
  }

  // Dynamically gets the host (e.g., your-project.vercel.app)
  const host = req.headers.host;
  const tunnelingAddress = `tcp://${host}:${port}`;

  // Content for the downloadable .bat file
  const batContent = `@echo off
echo Remote Tunneling Address: ${tunnelingAddress}
echo.
echo Please copy the address above.
pause
exit`;

  // Headers to trigger a file download in the browser
  res.setHeader('Content-Type', 'application/x-msdos-program');
  res.setHeader('Content-Disposition', 'attachment; filename="config.bat"');
  
  res.status(200).send(batContent);
}
