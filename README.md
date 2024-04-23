# Docker_Basic_App

## Overview
Docker_Basic_App is a simple Express.js application integrated with Docker. It provides a basic API endpoint that returns information about individuals in JSON format.

## Project Structure
Docker_Basic_App/
│
├── index.js
├── package.json
└── Dockerfile

## Files

1. **index.js:** Contains the code for the Express.js application.
2. **package.json:** Specifies the project dependencies.
3. **Dockerfile:** Provides instructions for building a Docker image for the application.

## Usage
1. Ensure Docker is installed on your system.
2. Clone this repository:
git clone https://github.com/umeshyadav7988/Docker_Basic_App.git
3. Navigate to the project directory:
4. Build the Docker image:
docker build -t docker_basic_app .
5. Run the Docker container:
docker run -p 5000:5000 docker_basic_app
6. Access the API endpoint in your web browser or a tool like Postman:
http://localhost:5000/


## Note
- The "dummy.txt" and "node_modules" directories are ignored in the Docker image build process.

