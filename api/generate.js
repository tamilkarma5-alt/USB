export default function handler(req, res) {
  const { port } = req.query;
  
  if (!port) {
    return res.status(400).json({ error: 'Port number is required' });
  }

  const tunnelingAddress = `tcp://tunnel.pinky.io:${port}`;

  const batContent = `@echo off
echo Remote Tunneling Address: ${tunnelingAddress}
echo.
echo Please copy the address above.
pause
exit`;

  res.setHeader('Content-Type', 'application/x-msdos-program');
  res.setHeader('Content-Disposition', 'attachment; filename="config.bat"');
  
  res.status(200).send(batContent);
}
