export default function handler(req, res) {
  const { port } = req.query;
  
  if (!port) {
    return res.status(400).json({ error: 'Port number is required' });
  }

  // Bin file content
  const binContent = `Port Number: ${port}\nGenerated on: ${new Date().toISOString()}`;

  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', 'attachment; filename="config.bin"');
  
  res.status(200).send(binContent);
}

