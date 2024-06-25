// src/api/partners.js
export const fetchPartners = async (details) => {
    // Mock data for demonstration
    const mockPartners = [
      { name: 'Travel Agency 1', description: 'Offers great flight deals.', contact: '123-456-7890' },
      { name: 'Travel Agency 2', description: 'Affordable bus packages.', contact: '098-765-4321' },
      { name: 'Travel Agency 3', description: 'Luxury train services.', contact: '555-555-5555' },
    ];
  
    // Simulate filtering based on details
    const filteredPartners = mockPartners.filter(partner => {
      return (
        (details.transport === '' || partner.description.toLowerCase().includes(details.transport.toLowerCase())) &&
        (details.people >= 1) &&
        (details.dates !== '') &&
        (details.age >= 0)
      );
    });
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredPartners);
      }, 1000);
    });
  };
  