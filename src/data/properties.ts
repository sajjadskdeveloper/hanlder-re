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
  // {
  //   id: '1',
  //   title: '561 Seventh Ave',
  //   subtitle: '3,491 SF of Office Space Available',
  //   location: 'NEW YORK, NY 10018',
  //   address: '561 Seventh Ave, New York, NY 10018',
  //   price: 'Upon Request',
  //   bedrooms: 0,
  //   bathrooms: 0,
  //   sqft: 3491,
  //   yearBuilt: 1925,
  //   propertyType: 'Office Space',
  //   status: 'Available Now',
  //   description: `Join a prestigious tenant roster in Midtown West's premier boutique building. Light filled, full floor opportunity. New lobby, entrance and elevators complete. Ownership will build to suit for qualified tenant. Tenant controlled HVAC. Private bathrooms on every floor.

  //   Building is located directly next to the 123 & NWRQ trains. FMDB, ACE, 7, S and Port Authority one block away. Short walk to Penn Station and Grand Central.

  //   This 21-story building offers 81,009 SF of total space with typical floor size of 3,944 SF. The building was originally constructed in 1925 and renovated in 1991, classified as a Class B office building. The available space on the 19th floor features 3,491 SF of office space with full build-out condition and negotiable terms.

  //   Transportation access is exceptional with Walk Score of 99 (Walker's Paradise), Transit Score of 100 (Rider's Paradise), and Bike Score of 89 (Very Bikeable). Multiple subway lines and commuter rail options are within walking distance including Times Square-42 St (1 min), 42 Street-Bryant Park (4 min), and Penn Station (6 min).`,
  //   features: [
  //     'Full Build-Out',
  //     'Tenant controlled HVAC',
  //     'Private bathrooms on every floor',
  //     'Light filled space',
  //     'New lobby and entrance',
  //     'New elevators',
  //     '24 Hour Access',
  //     'Property Manager on Site'
  //   ],
  //   amenities: [
  //     'Metro/Subway access',
  //     'Surface parking',
  //     'Covered parking',
  //     'Building security',
  //     'Maintenance services',
  //     'Proximity to Penn Station',
  //     'Proximity to Grand Central',
  //     'Prime Midtown West location'
  //   ],
  //   images: [
  //     '/images/hero-bg.jpeg',
  //     '/images/65w36th.jpg',
  //     '/images/240w37.jpg',
  //     '/images/320w37.jpg'
  //   ],
  //   agent: {
  //     name: 'Commercial Real Estate Team',
  //     phone: '+1 (212) 555-0123',
  //     email: 'commercial@realestate.com',
  //     image: '/images/placeholder-avatar.svg'
  //   },
  //   coordinates: {
  //     lat: 40.7589,
  //     lng: -73.9851
  //   }
  // },
  {
    id: '1',
    title: '315-321 W 39th St',
    subtitle: '2,800 SF of Office Space Available',
    location: 'NEW YORK, NY 10018',
    address: '315-321 W 39th St, New York, NY 10018',
    price: 'Upon Request',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 2800,
    yearBuilt: 1927,
    propertyType: 'Office Space',
    status: 'Available Jan 01, 2026',
    description: `2nd Floor, Ste 205\nSize: 2,800 SF\nTerm: Negotiable\nRental Rate: Upon Request\nSpace Use: Office\nCondition: Full Build-Out\nAvailable: January 01, 2026\n\nFEATURES AND AMENITIES\n- Bus Line\n- Metro/Subway\n\nPROPERTY FACTS\nBuilding Type: Office\nYear Built: 1927\nBuilding Height: 16 Stories\nBuilding Size: 132,684 SF\nBuilding Class: C\nTypical Floor Size: 8,292 SF\nUnfinished Ceiling Height: 12’\nParking: Surface Parking, Covered Parking\n\nMAP\nWalk Score®: Walker's Paradise (99)\nTransit Score®: Rider's Paradise (100)\nBike Score®: Biker's Paradise (90)\n\nTRANSPORTATION\nTRANSIT/SUBWAY\n- 42 Street-Port Authority Bus Terminal (A C E): 4 min walk, 0.5 mi\n- 34 Street-Penn Station (A,C,E Line): 6 min walk, 0.5 mi\n- Times Sq-42 St: 6 min walk, 0.8 mi\n- 34 Street-Penn Station (1,2,3 Line): 9 min walk, 0.7 mi\n- 42 Street-Bryant Park (B D F M): 10 min walk, 0.9 mi\nCOMMUTER RAIL\n- Ny Moynihan Train Hall At Penn Station (Amtrak): 9 min walk, 1.0 mi\n- New York Penn Station (Njt): 11 min walk, 0.8 mi\n- 33 St (Path): 12 min walk, 1.0 mi\n- Grand Central Terminal (Metro-North): 18 min walk, 1.6 mi\n- Grand Central (LIRR): 4 min drive, 1.5 mi\nAIRPORT\n- LaGuardia (LGA): 19 min drive, 9.5 mi\n- Newark Liberty International (EWR): 19 min drive, 13.6 mi`,
    features: [
      'Full Build-Out',
      'Bus Line',
      'Metro/Subway',
      'Surface Parking',
      'Covered Parking',
      'Unfinished Ceiling Height: 12’',
      'Building Class: C',
      '16 Stories',
      'Typical Floor Size: 8,292 SF'
    ],
    amenities: [
      'Walk Score®: Walker\'s Paradise (99)',
      'Transit Score®: Rider\'s Paradise (100)',
      'Bike Score®: Biker\'s Paradise (90)',
      'Proximity to Penn Station',
      'Proximity to Grand Central',
      'Proximity to Port Authority',
      'Commuter Rail Access',
      'Airport Access'
    ],
    images: [
      '/images/315-321-W-39th-St-1.jpg',
      '/images/315-321-W-39th-St-2.jpg',
      '/images/315-321-W-39th-St-3.jpg',
      '/images/315-321-W-39th-St-4.jpg'
    ],
    agent: {
      name: 'Darell Handler, Kyle Galin, Isaac Leader',
      phone: '+1 (212) 555-0456',
      email: 'team@handler-re.com',
      image: '/images/placeholder-avatar.svg'
    },
    coordinates: {
      lat: 40.7555,
      lng: -73.9934
    }
  },
  {
    id: '2',
    title: '263 W 38th St',
    subtitle: '10,000 SF of Office Space Available',
    location: 'NEW YORK, NY 10018',
    address: '263 W 38th St, New York, NY 10018',
    price: 'Upon Request',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 10000,
    yearBuilt: 1925,
    propertyType: 'Office Space',
    status: 'Available in 30 Days',
    description: `2nd Floor\nSize: 10,000 SF\nTerm: Aug 2028\nRental Rate: Upon Request\nSpace Use: Office\nCondition: Partial Build-Out\nAvailable: 30 Days\n\nFEATURES AND AMENITIES\n- 24 Hour Access\n\nPROPERTY FACTS\nBuilding Type: Office\nYear Built: 1925\nBuilding Height: 17 Stories\nBuilding Size: 193,182 SF\nBuilding Class: C\nTypical Floor Size: 10,000 SF\nUnfinished Ceiling Height: 12’\n\nSELECT TENANTS\n5th: Emsig Manufacturing Corporation (Wholesaler)\n8th: Harkess-Ord LLC (Professional, Scientific, and Technical Services)\n6th: International Rescue Committee (Services)\n7th: Lloyd Group (Professional, Scientific, and Technical Services)\n13th: Lynn Ritchie Showroom (Retailer)\n14th: Maxx Mail USA (Professional, Scientific, and Technical Services)\n11th: O Marche (Retailer)\n9th: Quotient (Professional, Scientific, and Technical Services)\nGRND: Spandex House, Inc. (Manufacturing)\n3rd: Underground Visuals Inc (Manufacturing)\n\nMAP\nWalk Score®: Walker's Paradise (96)\nTransit Score®: Rider's Paradise (100)\nBike Score®: Very Bikeable (88)\n\nTRANSPORTATION\nTRANSIT/SUBWAY\n- 42 Street-Port Authority Bus Terminal (A C E): 4 min walk, 0.6 mi\n- 34 Street-Penn Station (A,C,E Line): 4 min walk, 0.5 mi\n- Times Sq-42 St: 6 min walk, 0.6 mi\n- 34 Street-Penn Station (1,2,3 Line): 6 min walk, 0.3 mi\n- 42 Street-Bryant Park (B D F M): 9 min walk, 0.5 mi\nCOMMUTER RAIL\n- Ny Moynihan Train Hall At Penn Station (Amtrak): 7 min walk, 0.6 mi\n- New York Penn Station (Njt): 8 min walk, 0.4 mi\n- 33 St (Path): 9 min walk, 0.6 mi\n- Grand Central Terminal (Metro-North): 17 min walk, 1.3 mi\n- Grand Central (LIRR): 3 min drive, 1.2 mi\nAIRPORT\n- LaGuardia (LGA): 18 min drive, 9.2 mi\n- Newark Liberty International (EWR): 19 min drive, 14.2 mi`,
    features: [
      'Partial Build-Out',
      '24 Hour Access',
      'Unfinished Ceiling Height: 12’',
      'Building Class: C',
      '17 Stories',
      'Typical Floor Size: 10,000 SF'
    ],
    amenities: [
      'Walk Score®: Walker\'s Paradise (96)',
      'Transit Score®: Rider\'s Paradise (100)',
      'Bike Score®: Very Bikeable (88)',
      'Proximity to Penn Station',
      'Proximity to Grand Central',
      'Proximity to Port Authority',
      'Commuter Rail Access',
      'Airport Access'
    ],
    images: [
      '/images/263-W-38th-St-1.jpg',
      '/images/263-W-38th-St-2.jpg',
      '/images/263-W-38th-St-3.jpg',
      '/images/263-W-38th-St-4.jpg',
      '/images/263-W-38th-St-5.jpg',
      '/images/263-W-38th-St-6.jpg',
      '/images/263-W-38th-St-7.jpg',
      '/images/263-W-38th-St-8.jpg',
      '/images/263-W-38th-St-9.jpg',
      '/images/263-W-38th-St-10.jpg',
      '/images/263-W-38th-St-11.jpg',
      '/images/263-W-38th-St-12.jpg',
      '/images/263-W-38th-St-13.jpg',
      '/images/263-W-38th-St-14.jpg',
      '/images/263-W-38th-St-15.jpg',
      '/images/263-W-38th-St-16.jpg',
      '/images/263-W-38th-St-17.jpg',
    ],
    agent: {
      name: 'Isaac Leader, Darell Handler, Kyle Galin',
      phone: '+1 (212) 555-0456',
      email: 'team@handler-re.com',
      image: '/images/placeholder-avatar.svg'
    },
    coordinates: {
      lat: 40.7542,
      lng: -73.9911
    }
  }
];

export const getPropertyById = (id: string): PropertyDetail | undefined => {
  return propertiesData.find(property => property.id === id);
}; 