# Web-Based Code Compiler

## Project Overview

This project is a web-based compiler that supports compiling code written in multiple programming languages, specifically Solidity, Rust, and Motoko. The compiler provides a seamless experience for developers by allowing them to write, compile, and view the output of their code directly within the application. Users can also select the difficulty level of questions to compile and receive points based on their performance.

## Features

- **Multi-Language Support**: Write and compile code in Solidity, Rust, or Motoko (at least two of the three languages are implemented).
- **Difficulty Levels**: Select the difficulty level of the questions (Easy, Medium, Hard) to attempt and compile.
- **Code Editor**: An intuitive code editor for each supported language.
- **Compilation**: Backend functionality to compile the code and return the output.
- **Hash Matching**: Store expected output hashes on the backend for each question and print "success" or "failure" based on hash matching.
- **Point System**: Earn points based on the difficulty of the questions. +1 point for Easy, +2 points for Medium, and +3 points for Hard questions.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Compilation Service**: Docker containers or other isolated environments for securely compiling code

## Installation and Setup

### Prerequisites

- Node.js
- npm or yarn
- Docker (for isolated compilation environments)

### Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/web-based-code-compiler.git
   cd web-based-code-compiler
# Web-Based Code Compiler #

## Project Overview ##

Multi-Language Support: Write and compile code in Solidity, Rust, or Motoko (at least two of the three languages are implemented).
Difficulty Levels: Select the difficulty level of the questions (Easy, Medium, Hard) to attempt and compile.
Code Editor: An intuitive code editor for each supported language.
Compilation: Backend functionality to compile the code and return the output.
Hash Matching: Store expected output hashes on the backend for each question and print "success" or "failure" based on hash matching.
Point System: Earn points based on the difficulty of the questions. +1 point for Easy, +2 points for Medium, and +3 points for Hard questions.

### Get Only name and subscribed channel of all subscribers ###

GET `/subscribers/names`

Returns a list of subscribers with only name and subscribed channel feilds

### Get a single subscriber details ###

GET `/subscribers/:id`

Provide the id parameter.

Retrieve detailed information about a subscriber.
