export async function fetchCars() {
    const headers = {
      'x-rapidapi-key': '12d624d4a4msh4675df6767cca8bp160b08jsnef31ec9dd942',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    };
  
    try {
      const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        {
          headers: headers,
        }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch cars: ${response.statusText}`);
      }
  
   
      const result = await response.json();
  
      return result;
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  }
  