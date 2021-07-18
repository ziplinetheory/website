const apiKey = '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'

export function createContact (email: string) {
  const data = {
    updateEnabled: false,
    email,
    listIds: [2]
  }
  return fetch('https://api.sendinblue.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'api-key': apiKey
    },
    body: JSON.stringify(data)
  })
}