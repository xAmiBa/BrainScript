# BrainScript - Coding Project Inventor

BrainScript is your AI-powered assistant for generating innovative project ideas tailored to your interests and skills. Whether you're looking to expand your tech stack, dive into new technologies, or create something related to your hobbies and passions, BrainScript is here to inspire and guide you.

![screenshot-main-page](/./public/scr1.png)

## Table of Contents
1. [Features](#features)
2. [MVP](#mvp)
3. [Stretch Goals](#stretch-goals)
4. [Demo](#demo)
5. [Planning](#planning)
6. [How to Run](#how-to-run)

## Features
- **Ideate**: Spark creativity with personalized project ideas.
- **Generate**: Get detailed project concepts tailored to your skills and interests.
- **Learn**: Access curated resources to help you learn and implement new technologies.

## MVP
```
As a user, I can list my skills and level of knowledge.
```

```
As a user, I can list skills I want to learn and choose an area: frontend, backend, full-stack.
```

```
As a user, I can decide to learn any skills.
```

```
As a user, I can list my interests.
```

```
As a user, I receive a coding project idea with:
- project title
- project description
- tech stack I will use with tutorial links or docs
```

## Demo
Watch the demo video to see BrainScript in action:

[![BrainScript Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)]( https://www.youtube.com/watch?v=4aUCI4QcOxw)

![Screenshot](/./public/scr1.png)
![Screenshot](/./public/scr2.png)
![Screenshot](/./public/scr4.png)
![Screenshot](/./public/scr3.png)

## How to Run
BrainScript is built using Python, Django, MySQL, OpenAI API, SendGrid API, Django Rest Framework, JavaScript, React, Tailwind, Cypress, GitHub Actions CI, and Docker.

To run BrainScript locally with Docker, follow these steps:

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/brainscript.git
    cd brainscript
    ```

2. **Build Docker Images**:
    ```sh
    docker-compose build
    ```

3. **Run the Servers**:
    ```sh
    docker-compose up
    ```

4. **Access the Application**:
    Open your browser and navigate to `http://localhost:5001` to see BrainScript in action.

## Stretch Goals (future developments)
```
As a user, I can save the coding project idea by downloading a README.md file.
```

```
As a user, I can create an account and save my projects.
```

```
As a user, I can choose to publish my project in the project bank.
```

```
As a user, I can upvote projects and see the most popular ones.
```

```
As a user, I can add my repo links to project ideas to showcase what I did.
```