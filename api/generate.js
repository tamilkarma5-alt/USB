export default function handler(req, res) {
  const { port } = req.query;
  
  if (!port) {
    return res.status(400).json({ error: 'Port number is required' });
  }

  // BAT file content
  const batContent = `@echo off\necho Port Number is ${port}\npause`;

  res.setHeader('Content-Type', 'application/x-msdos-program');
  res.setHeader('Content-Disposition', 'attachment; filename="config.bat"');
  
  res.status(200).send(batContent);
}
