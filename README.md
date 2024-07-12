# Discord Clone

This project is a full-stack clone of Discord, built using Next.js, Clerk for authentication, and the Stream SDK for real-time messaging and video/audio calls. It replicates the core features of Discord including voice and text channel creation, personalized server creation, flawless authentication with a single click, and the ability to join video and audio calls.

## Features

- **Voice and Text Channels Creation**: Create and manage multiple voice and text channels within your servers.
- **Personalized Server Creation**: Create your own servers to manage your communities.
- **Flawless Authentication**: Secure, single-click authentication using Clerk.
- **Join Video and Audio Calls**: Seamless integration for video and audio calls.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered applications.
- **Clerk**: Authentication service to provide secure and easy-to-implement authentication.
- **Stream SDK**: For real-time messaging, video, and audio call functionalities.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Docker

### Installation

#### Local Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Pratik-050/discord-clone.git
    cd discord-clone
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**:

    Create a `.env.local` file in the root directory and refer the .env.example for the variable names.
    

4. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

#### Docker Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Pratik-050/discord-clone.git
    cd discord-clone
    ```

2. **Set up environment variables**:

    Create a `.env.local` file in the root directory and refer the .env.example for the variable names.
    

3. **Build the Docker image**:
    ```bash
    docker build -t discord-clone .
    ```

4. **Run the Docker container**:
    ```bash
    docker run -p 3000:3000 --env-file .env.local discord-clone
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.


## Usage

### Authentication

This project uses Clerk for authentication. Upon visiting the application, users can sign up or log in with a single click. Clerk handles all authentication flows, including social logins and password management.

### Server and Channel Management

Users can create their own servers and manage multiple voice and text channels within those servers. Each server is isolated, providing a personalized space for different communities.

### Real-Time Messaging and Calls

The Stream SDK powers the real-time messaging, video, and audio call features. Users can join voice and video channels within their servers, enabling seamless communication.


## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Stream](https://getstream.io/)
