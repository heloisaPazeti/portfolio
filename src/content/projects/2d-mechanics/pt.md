---
title: "Mecânicas 2D - Unity"
description: "Uma coleção de mecânicas de gameplay e sistemas reutilizáveis desenvolvidos na Unity utilizando C#, com foco principalmente em jogos de plataforma 2D e sistemas interativos."
language: "csharp"
order: 2
cover: "/projects/2d-mechanics/cover.png"
tech: ["C#", "Unity"]
repo: "https://github.com/heloisaPazeti/UnityMechanics2D"
---

# Mecânicas de Gameplay na Unity

Uma coleção de mecânicas de gameplay e sistemas reutilizáveis desenvolvidos na **Unity utilizando C#**, com foco principalmente em jogos de plataforma 2D e sistemas interativos.

O projeto foi criado como um ambiente de experimentação prática para explorar programação de gameplay, animações, movimentação de personagens e sistemas de diálogo.

## Funcionalidades

### Movimentação de Plataforma

* Movimentação horizontal e vertical
* Pulo e pulo duplo
* Deslizamento na parede (Wall Sliding)
* Dash / movimentação baseada em impulsos
* Animações de personagens utilizando Unity Blend Trees

### Sistemas de Diálogo

Duas abordagens diferentes foram exploradas:

* **Sistema de diálogo básico** — diálogos sequenciais configurados diretamente pelo Unity Editor.
* **Sistema de diálogo ramificado** — árvores de diálogo com escolhas do jogador utilizando **Ink e JSON**.

## Tecnologias

* Unity
* C#
* Ink
* JSON
* Unity Animator / Blend Trees

## Estrutura do Projeto

```text
UnityMechanics2D/
├── Dialog System/
├── DialogSystemOptions/
├── PlatformerMovementSystem/
└── SimplePlatformerMechanics/
