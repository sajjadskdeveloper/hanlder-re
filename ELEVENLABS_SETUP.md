# ElevenLabs Voice Integration Setup

This project includes an ElevenLabs voice integration that allows users to interact with the website using voice commands.

## Setup Instructions

### 1. Install Dependencies

First, install the ElevenLabs React package:

```bash
npm install @elevenlabs/react
```

### 2. Environment Variables

Create a `.env.local` file in your project root and add your ElevenLabs API key:

```env
NEXT_PUBLIC_ELEVENLABS_API_KEY=your_api_key_here
```

### 3. Features

The integration includes the following voice-activated features:

- **Navigation**: Users can navigate to different pages by saying commands like "go to home" or "show me property 1"
- **Page Scrolling**: Users can scroll up or down the page using voice commands
- **Property Information**: Users can ask for detailed information about specific properties
- **Real-time Voice Interaction**: The AI agent can respond to user queries and perform actions

### 4. Voice Commands

The system recognizes these voice commands:

- "Navigate to home" - Goes to the home page
- "Show me property 1" - Navigates to property 1 details
- "Scroll down" - Scrolls down the page
- "Scroll up" - Scrolls up the page
- "Tell me about property 2" - Gets detailed information about property 2

### 5. Call Button

The call button in the header now:
- Shows "Call Now" when not in a call
- Shows "End Call" when in an active call
- Shows "Connecting..." or "Disconnecting..." during state transitions
- Changes color from blue to red when call is active
- The status indicator dot changes from green to red when call is active

### 6. Technical Details

- Uses ElevenLabs React SDK for voice conversation
- Implements custom tools for navigation, scrolling, and property information
- Handles microphone permissions automatically
- Provides real-time status updates
- Includes error handling for failed connections

### 7. Troubleshooting

If you encounter issues:

1. Make sure your ElevenLabs API key is valid
2. Check that microphone permissions are granted
3. Ensure you're using HTTPS (required for microphone access)
4. Check the browser console for any error messages

### 8. Agent Configuration

The integration uses agent ID: `agent_3701k1g6sd0zfp99qbgzdkgt2c93`

Make sure this agent is properly configured in your ElevenLabs dashboard with the appropriate tools and knowledge base. 