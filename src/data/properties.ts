export interface PropertyDetail {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  propertyType: string;
  status: string;
  description: string;
  features: string[];
  amenities: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const propertiesData: PropertyDetail[] = [
  {
    id: '1',
    title: '561 Seventh Ave',
    subtitle: '3,491 SF of Office Space Available',
    location: 'NEW YORK, NY 10018',
    address: '561 Seventh Ave, New York, NY 10018',
    price: 'Upon Request',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 3491,
    yearBuilt: 1925,
    propertyType: 'Office Space',
    status: 'Available Now',
    description: `Join a prestigious tenant roster in Midtown West's premier boutique building. Light filled, full floor opportunity. New lobby, entrance and elevators complete. Ownership will build to suit for qualified tenant. Tenant controlled HVAC. Private bathrooms on every floor.

    Building is located directly next to the 123 & NWRQ trains. FMDB, ACE, 7, S and Port Authority one block away. Short walk to Penn Station and Grand Central.

    This 21-story building offers 81,009 SF of total space with typical floor size of 3,944 SF. The building was originally constructed in 1925 and renovated in 1991, classified as a Class B office building. The available space on the 19th floor features 3,491 SF of office space with full build-out condition and negotiable terms.

    Transportation access is exceptional with Walk Score of 99 (Walker's Paradise), Transit Score of 100 (Rider's Paradise), and Bike Score of 89 (Very Bikeable). Multiple subway lines and commuter rail options are within walking distance including Times Square-42 St (1 min), 42 Street-Bryant Park (4 min), and Penn Station (6 min).`,
    features: [
      'Full Build-Out Condition',
      'Tenant controlled HVAC',
      'Private bathrooms on every floor',
      'Light filled space',
      'New lobby and entrance',
      'New elevators',
      '24 Hour Access',
      'Property Manager on Site'
    ],
    amenities: [
      'Metro/Subway access',
      'Surface parking',
      'Covered parking',
      'Building security',
      'Maintenance services',
      'Proximity to Penn Station',
      'Proximity to Grand Central',
      'Prime Midtown West location'
    ],
    images: [
      '/images/hero-bg.jpeg',
      '/images/65w36th.jpg',
      '/images/240w37.jpg',
      '/images/320w37.jpg'
    ],
    agent: {
      name: 'Commercial Real Estate Team',
      phone: '+1 (212) 555-0123',
      email: 'commercial@realestate.com',
      image: '/images/placeholder-avatar.svg'
    },
    coordinates: {
      lat: 40.7589,
      lng: -73.9851
    }
  }
];

export const getPropertyById = (id: string): PropertyDetail | undefined => {
  return propertiesData.find(property => property.id === id);
}; 