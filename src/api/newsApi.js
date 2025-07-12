const API_KEY = '6c4546df4aaf4e378c3eb6f040fe02aa'; // Replace with actual key from newsapi.org

export const fetchNews = async () => {
  try {
    // Added User-Agent header which NewsAPI requires
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`, {
      headers: {
        'User-Agent': 'YourApp/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data); // Debug log
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};