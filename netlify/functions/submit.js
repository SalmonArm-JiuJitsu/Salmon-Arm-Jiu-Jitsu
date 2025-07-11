exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);
  const fields = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  // TODO: send email using an API like EmailJS, SendGrid, or SMTP server
  console.log("Received form submission:\n" + fields);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully!' })
  };
};
