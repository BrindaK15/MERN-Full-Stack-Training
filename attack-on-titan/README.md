# Attack on Titan Next.js Project 

This repository documents the completion of a full-stack front-end development project built with Next.js and focused on advanced React, TypeScript, and Tailwind CSS concepts. The project theme is a tribute to the anime/manga Attack on Titan.


## Step 1: The Digital Canvas Summary
This first step established the foundation of the project by creating the primary visual asset: a dramatic, full-page tribute to Attack on Titan.

### Key Achievements
Next.js Page Structure: Created the main component in app/aot-tribute-page/page.tsx using modern JSX syntax.

Next.js Image Optimization: Used the next/image component for optimal image loading and performance, specifically employing the fill property for the hero section.

### Dramatic Styling: Applied extensive Tailwind CSS to achieve a dark, high-contrast aesthetic:

Custom color definitions (AOT_RED, AOT_YELLOW).

Full-height hero section with image overlay and subtle hover effects (group-hover:scale-105).

Responsive typography and layout to ensure readability on all devices.

Content: Included the core page elements:

A grand header (Attack on Titan).

A core plot summary overlaid on the hero image.

A visual character list of the Survey Corps Elite with small, stylized icons.



### Tech Stack Used in Step 1:

Framework: Next.js (App Router)

Styling: Tailwind CSS

Language: React / JSX

## Step 2: TypeScript Fundamentals

Completed Step 2 by defining and exporting the CharacterProps and QuizQuestion TypeScript interfaces in src/types.ts, thereby establishing essential static type contracts for the application's core data.

## Step 3: Utility-First Styling(Tailwind CSS in Next.js)

1. Successfully styled the entire page exclusively using Tailwind CSS utility classes.
2. Implemented full responsive design using breakpoints(sm:,md:,lg:) to ensure optimal viewing on all device sizes.
3. Created a visually dramatic and themed aesthetic featuring a dark color palette and high-contrast elements.
4. Designed a dynamic, full-screen hero section with custom energetic shadows and a hover effect.

## Step 4: React Basics (Server Components & Props)
Refactored the monolithic page.tsx file into modular, reusable Server Components.

Implemented a dedicated components folder structure.

Type Safety Implemented: Defined and applied the CharacterProps interface (from types.ts) to all related components, ensuring robust, type-safe props.

The page is now assembled using: Header, ImageCard, and CharacterList.

Improved the look of the character list using a responsive grid layout with visually appealing Character components.

## Step 5 : React Hook and Interactivity

This step successfully implemented the interactive LIC_Quiz.tsx component,marked with "use client",demonstrating core React functionality.

State Management: Used useState to track question index, score, and selected answer.

Controlled Flow: Logic ensures manual navigation (scoring and advancing only happen when the "Save & Next" button is clicked) and visual highlighting of the selected answer.

Routing: The quiz is accessible via the new /quiz route.

## Step 6 : The Firebase Studio Workflow

1. I have done MusicPlayer UI desing in Firebase Studio
2. Created and populated MusicPlayer.tsx in the project
3. I transformed the static UI into a functional, robust component by:

Adding all the dynamic React/Audio logic.

Fixing the TypeScript error in the skip buttons.

Fixing the duration synchronization and the '0:00' bug.

Fixing the AbortError.

Addressing the missing UI styles.

Fixing the image and audio file loading paths.

### Getting Started: Running the Project

1. Install Next.js

    npx create-next-app@latest

2. Run the development Server

    npm run dev

### View the Application

Open your browser and navigate to http://localhost:3000
