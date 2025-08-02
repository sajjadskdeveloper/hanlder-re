'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useConversation } from "@elevenlabs/react";
import { useRouter } from 'next/navigation';
import { getPropertyById } from '@/data/properties';

interface ElevenLabsContextType {
  isCallActive: boolean;
  hasPermission: boolean;
  errorMessage: string;
  status: string;
  isSpeaking: boolean;
  handleStartCall: () => Promise<void>;
  handleEndCall: () => Promise<void>;
  setErrorMessage: (message: string) => void;
}

const ElevenLabsContext = createContext<ElevenLabsContextType | undefined>(undefined);

export const useElevenLabs = () => {
  const context = useContext(ElevenLabsContext);
  if (context === undefined) {
    throw new Error('useElevenLabs must be used within an ElevenLabsProvider');
  }
  return context;
};

interface ElevenLabsProviderProps {
  children: ReactNode;
}

export const ElevenLabsProvider = ({ children }: ElevenLabsProviderProps) => {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isCallActive, setIsCallActive] = useState(false);


  // ElevenLabs conversation setup
  const conversation = useConversation({
    preferHeadphonesForIosDevices: true,
    onConnect: () => {
      console.log("=== ELEVENLABS CONNECTED ===");
      console.log("Connection established successfully");
      setIsCallActive(true);
    },
    onDisconnect: () => {
      console.log("=== ELEVENLABS DISCONNECTED ===");
      console.log("Connection terminated");
      setIsCallActive(false);
    },
    onAudio: () => {
      // Handle audio if needed
    //   console.log("Audio received:", audio);
    },
    clientTools: {
      navigate_pages: async ({ route }) => {
        try {
          console.log("=== NAVIGATE_PAGES TOOL CALLED ===");
          console.log("Route parameter received:", route);
          console.log("Route type:", typeof route);
          
          // Handle navigation based on the route using Next.js router
          switch (route) {
            case '/':
              console.log("Navigating to home page");
              router.push('/');
              return "Navigating to home page";
            case '/properties/1':
              console.log("Navigating to property 1");
              router.push('/properties/1');
              const property1 = getPropertyById('1');
              console.log("Property 1 data:", property1);
              if (property1) {
                const response1 = `Navigating to ${property1.title}. ${property1.subtitle} - ${property1.location}. Price: ${property1.price}. ${property1.bedrooms} bedrooms, ${property1.bathrooms} bathrooms, ${property1.sqft} sqft. ${property1.description.substring(0, 200)}...`;
                console.log("Property 1 response:", response1);
                return response1;
              }
              console.log("Property 1 not found");
              return "Navigating to property 1";
            case '/properties/2':
              console.log("Navigating to property 2");
              router.push('/properties/2');
              const property2 = getPropertyById('2');
              console.log("Property 2 data:", property2);
              if (property2) {
                const response2 = `Navigating to ${property2.title}. ${property2.subtitle} - ${property2.location}. Price: ${property2.price}. ${property2.bedrooms} bedrooms, ${property2.bathrooms} bathrooms, ${property2.sqft} sqft. ${property2.description.substring(0, 200)}...`;
                console.log("Property 2 response:", response2);
                return response2;
              }
              console.log("Property 2 not found");
              return "Navigating to property 2";
            case '/properties/3':
              console.log("Navigating to property 3");
              router.push('/properties/3');
              const property3 = getPropertyById('3');
              console.log("Property 3 data:", property3);
              if (property3) {
                const response3 = `Navigating to ${property3.title}. ${property3.subtitle} - ${property3.location}. Price: ${property3.price}. ${property3.bedrooms} bedrooms, ${property3.bathrooms} bathrooms, ${property3.sqft} sqft. ${property3.description.substring(0, 200)}...`;
                console.log("Property 3 response:", response3);
                return response3;
              }
              console.log("Property 3 not found");
              return "Navigating to property 3";
            case '/properties/4':
              console.log("Navigating to property 4 (not in data)");
              router.push('/properties/4');
              // Property 4 doesn't exist in our data, so we'll return a generic message
              return "Navigating to property 4 (details not available)";
            default:
              console.warn("Unknown route:", route);
              console.log("Defaulting to home page");
              // Default to home if route is not recognized
              router.push('/');
              return "Navigating to home page";
          }
        } catch (error) {
          console.error("Navigation error:", error);
          return "Failed to navigate to the requested page";
        }
      },
      scrolling_page: async ({ side, percentage_of_scrolling_page }) => {
        try {
          console.log("=== SCROLLING_PAGE TOOL CALLED ===");
          console.log("Side parameter received:", side);
          console.log("Side type:", typeof side);
          console.log("Percentage parameter received:", percentage_of_scrolling_page);
          console.log("Percentage type:", typeof percentage_of_scrolling_page);
          
          // Get current scroll position and page height
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
          
          // Use the provided percentage or default to 15%
          const percentage = percentage_of_scrolling_page || 15;
          const scrollIncrement = pageHeight * (percentage / 100);
          
          console.log("Current scroll position:", currentScroll);
          console.log("Page height:", pageHeight);
          console.log("Scroll percentage:", percentage);
          console.log("Scroll increment:", scrollIncrement);
          
          // Handle scrolling based on the side parameter
          switch (side.toLowerCase()) {
            case 'up':
              const newUpPosition = Math.max(0, currentScroll - scrollIncrement);
              console.log("Scrolling up to position:", newUpPosition);
              window.scrollTo({
                top: newUpPosition,
                behavior: 'smooth'
              });

              break;
            case 'down':
              const newDownPosition = Math.min(pageHeight, currentScroll + scrollIncrement);
              console.log("Scrolling down to position:", newDownPosition);
              window.scrollTo({
                top: newDownPosition,
                behavior: 'smooth'
              });

              break;
            default:
              console.warn("Unknown scroll direction:", side);
              return "Invalid scroll direction. Please specify 'up' or 'down'";
          }
          
          const response = `Scrolling page ${side} by ${percentage}%  now ask is this correct section of the page?`;
          console.log("Scrolling response:", response);
          return response;
        } catch (error) {
          console.error("Scrolling error:", error);
          return "Failed to scroll the page";
        }
      },
      get_property_info: async ({ property_id }) => {
        try {
          console.log("=== GET_PROPERTY_INFO TOOL CALLED ===");
          console.log("Property ID parameter received:", property_id);
          console.log("Property ID type:", typeof property_id);
          
          const property = getPropertyById(property_id);
          console.log("Retrieved property data:", property);
          
          if (!property) {
            console.log("Property not found for ID:", property_id);
            const notFoundResponse = `Property with ID ${property_id} not found. Available properties are: 1, 2, and 3.`;
            console.log("Not found response:", notFoundResponse);
            return notFoundResponse;
          }
          
          const propertyInfo = `
Property Details:
- Title: ${property.title}
- Subtitle: ${property.subtitle}
- Location: ${property.location}
- Address: ${property.address}
- Price: ${property.price}
- Bedrooms: ${property.bedrooms}
- Bathrooms: ${property.bathrooms}
- Square Feet: ${property.sqft}
- Year Built: ${property.yearBuilt}
- Property Type: ${property.propertyType}
- Status: ${property.status}

Description: ${property.description}

Key Features: ${property.features.join(', ')}

Amenities: ${property.amenities.join(', ')}

Agent: ${property.agent.name} - ${property.agent.phone} - ${property.agent.email}
          `.trim();
          
          console.log("Property info response length:", propertyInfo.length);
          console.log("Property info response preview:", propertyInfo.substring(0, 200) + "...");
          console.log("Full property info response:", propertyInfo);
          
          return propertyInfo;
        } catch (error) {
          console.error("Property info error:", error);
          return "Failed to get property information";
        }
      }
    }
  });

  const { status, isSpeaking } = conversation;

  const handleStartCall = async () => {
    try {
      // Request mic permission
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setHasPermission(true);
        setErrorMessage("");
      } catch (error) {
        setHasPermission(false);
        setErrorMessage("Microphone access denied");
        console.error("Error accessing microphone:", error);
        return;
      }

      // Start conversation with ElevenLabs agent
      const agentId = "agent_3701k1g6sd0zfp99qbgzdkgt2c93";
      await conversation.startSession({
        agentId,
        connectionType: 'websocket',
      });
    } catch (error) {
      setErrorMessage("Failed to start call");
      console.error("Error starting call:", error);
    }
  };

  const handleEndCall = async () => {
    try {
      await conversation.endSession();
      setIsCallActive(false);
    } catch (error) {
      setErrorMessage("Failed to end call");
      console.error("Error ending call:", error);
    }
  };

  const value = {
    isCallActive,
    hasPermission,
    errorMessage,
    status,
    isSpeaking,
    handleStartCall,
    handleEndCall,
    setErrorMessage,
  };

  return (
    <ElevenLabsContext.Provider value={value}>
      {children}
    </ElevenLabsContext.Provider>
  );
}; 