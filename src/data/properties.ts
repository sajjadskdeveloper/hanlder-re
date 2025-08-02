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
    title: '320W37',
    subtitle: 'Luxury Manhattan Residence',
    location: 'Manhattan, NY',
    address: '320 West 37th Street, New York, NY 10018',
    price: '$2,500,000',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2200,
    yearBuilt: 2020,
    propertyType: 'Luxury Apartment',
    status: 'For Sale',
    description: `Experience the epitome of luxury living in this stunning 3-bedroom, 2.5-bathroom residence located in the heart of Manhattan. This meticulously designed property offers the perfect blend of modern sophistication and timeless elegance.

    The open-concept living area features floor-to-ceiling windows that flood the space with natural light, creating an inviting atmosphere for both relaxation and entertainment. The gourmet kitchen is equipped with premium stainless steel appliances, custom cabinetry, and a large center island perfect for culinary enthusiasts.

    The master suite is a true sanctuary, featuring a spacious walk-in closet and an en-suite bathroom with dual vanities and a rainfall shower. Two additional well-appointed bedrooms provide comfortable accommodations for family or guests.

    This property includes access to world-class amenities including a 24-hour doorman, fitness center, rooftop terrace with city views, and private parking. Located in a prime Manhattan location, you'll have easy access to shopping, dining, entertainment, and transportation.`,
    features: [
      'Floor-to-ceiling windows',
      'Hardwood floors throughout',
      'Gourmet kitchen with premium appliances',
      'Master suite with walk-in closet',
      'In-unit washer/dryer',
      'Central air conditioning',
      'Smart home technology',
      'Private balcony'
    ],
    amenities: [
      '24-hour doorman',
      'Fitness center',
      'Rooftop terrace',
      'Private parking',
      'Bike storage',
      'Package receiving',
      'Concierge services',
      'Resident lounge'
    ],
    images: [
      '/images/320w37.jpg',
      '/images/hero-bg.jpeg',
      '/images/65w36th.jpg',
      '/images/240w37.jpg'
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (212) 555-0123',
      email: 'sarah.johnson@realestate.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    coordinates: {
      lat: 40.7589,
      lng: -73.9851
    }
  },
  {
    id: '2',
    title: '989 Avenue of the Americas',
    subtitle: 'Modern Downtown Loft',
    location: 'Manhattan, NY',
    address: '989 Avenue of the Americas, New York, NY 10018',
    price: '$1,850,000',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    yearBuilt: 2018,
    propertyType: 'Luxury Loft',
    status: 'For Sale',
    description: `Discover urban sophistication in this stunning 2-bedroom, 2-bathroom loft located in the vibrant heart of Manhattan. This contemporary residence seamlessly blends industrial charm with modern luxury, creating a truly unique living experience.

    The expansive open-concept layout features soaring ceilings, exposed brick walls, and large industrial windows that provide abundant natural light throughout the day. The chef's kitchen is a culinary masterpiece, featuring custom cabinetry, premium stainless steel appliances, and a large center island perfect for entertaining.

    The master bedroom offers a peaceful retreat with custom built-ins and an en-suite bathroom featuring a spa-like shower and double vanity. The second bedroom is equally well-appointed and can serve as a guest room, home office, or nursery.

    Residents enjoy access to a comprehensive suite of amenities including a 24-hour doorman, fitness center, rooftop deck with city views, and secure parking. The building's prime location provides easy access to shopping, dining, entertainment, and public transportation.`,
    features: [
      'Exposed brick walls',
      'Soaring ceilings',
      'Industrial windows',
      'Chef\'s kitchen with premium appliances',
      'Custom built-ins',
      'Spa-like bathrooms',
      'In-unit washer/dryer',
      'Smart home technology'
    ],
    amenities: [
      '24-hour doorman',
      'Fitness center',
      'Rooftop deck',
      'Secure parking',
      'Bike storage',
      'Package receiving',
      'Concierge services',
      'Resident lounge'
    ],
    images: [
      '/images/IMG_5471-q46oz9dg23mofuqg5y5q32taz468upmrxlvf8sberk.jpeg',
      '/images/hero-bg.jpeg',
      '/images/65w36th.jpg',
      '/images/240w37.jpg'
    ],
    agent: {
      name: 'Michael Chen',
      phone: '+1 (212) 555-0456',
      email: 'michael.chen@realestate.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    coordinates: {
      lat: 40.7589,
      lng: -73.9851
    }
  },
  {
    id: '3',
    title: '240W37',
    subtitle: 'Contemporary Urban Residence',
    location: 'Manhattan, NY',
    address: '240 West 37th Street, New York, NY 10018',
    price: '$1,950,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    yearBuilt: 2019,
    propertyType: 'Modern Apartment',
    status: 'For Sale',
    description: `Step into contemporary luxury with this stunning 3-bedroom, 2-bathroom residence that epitomizes modern urban living. This thoughtfully designed property combines sophisticated aesthetics with practical functionality to create the perfect home for discerning buyers.

    The open-concept living area is bathed in natural light through floor-to-ceiling windows, creating a bright and airy atmosphere. The gourmet kitchen features sleek cabinetry, quartz countertops, and top-of-the-line appliances, making it ideal for both everyday cooking and entertaining.

    The master suite offers a serene retreat with a spacious walk-in closet and an en-suite bathroom featuring premium fixtures and finishes. Two additional bedrooms provide flexible living space that can accommodate family, guests, or serve as a home office.

    This property includes access to premium building amenities including a 24-hour doorman, state-of-the-art fitness center, rooftop terrace with panoramic city views, and secure parking. The building's prime location ensures easy access to shopping, dining, entertainment, and public transportation.`,
    features: [
      'Floor-to-ceiling windows',
      'Hardwood floors',
      'Gourmet kitchen with quartz countertops',
      'Master suite with walk-in closet',
      'Premium bathroom fixtures',
      'In-unit washer/dryer',
      'Central air conditioning',
      'Smart home technology'
    ],
    amenities: [
      '24-hour doorman',
      'State-of-the-art fitness center',
      'Rooftop terrace',
      'Secure parking',
      'Bike storage',
      'Package receiving',
      'Concierge services',
      'Resident lounge'
    ],
    images: [
      '/images/240w37.jpg',
      '/images/hero-bg.jpeg',
      '/images/65w36th.jpg',
      '/images/320w37.jpg'
    ],
    agent: {
      name: 'Emily Rodriguez',
      phone: '+1 (212) 555-0789',
      email: 'emily.rodriguez@realestate.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
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