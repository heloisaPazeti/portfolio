---
title: "2D Mechanics - Unity"
description: "A collection of gameplay mechanics and reusable systems developed in Unity using C#, mainly focused on 2D platformer and interactive game systems."
language: "csharp"
order: 2
cover: "/projects/2d-mechanics/cover.png"
tech: ["C#", "Unity"]
repo: "https://github.com/heloisaPazeti/UnityMechanics2D"
---

# Unity Gameplay Mechanics

A collection of gameplay mechanics and reusable systems developed in **Unity using C#**, mainly focused on 2D platformer and interactive game systems.

The project was created as a practical playground to experiment with gameplay programming, animation, player movement and dialogue systems.

## Features

### Platformer Movement

* Horizontal and vertical movement
* Jumping and double jump
* Wall sliding
* Dash / impulse-based movement
* Character animations using Unity Blend Trees

### Dialogue Systems

Two different approaches were explored:

* **Basic dialogue system** — sequential dialogue configured directly through the Unity Editor.
* **Branching dialogue system** — dialogue trees with player choices using **Ink and JSON**.

## Technologies

* Unity
* C#
* Ink
* JSON
* Unity Animator / Blend Trees

## Project Structure

```text
UnityMechanics2D/
├── Dialog System/
├── DialogSystemOptions/
├── PlatformerMovementSystem/
└── SimplePlatformerMechanics/
```

Each folder contains an independent experiment or gameplay system.

## What I explored

This project was mainly focused on understanding how common gameplay systems can be implemented as independent and reusable components in Unity.

Particular attention was given to:

* player movement and state handling;
* interaction between gameplay logic and animations;
* branching dialogue;
* separating gameplay systems into reusable components.

## Future Improvements

* Improve system documentation
* Add more reusable gameplay components
* Improve editor configuration for gameplay parameters
* Add standalone playable demonstrations for each mechanic

