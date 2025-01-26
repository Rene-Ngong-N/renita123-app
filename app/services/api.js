const apiUrl = 'https://api.example.com';

export const fetchFlights = async (params) => {
  const response = await fetch('${apiUrl}/flights', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};