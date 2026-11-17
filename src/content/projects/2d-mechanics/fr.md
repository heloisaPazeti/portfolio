---
title: "Mécaniques 2D - Unity"
description: "Une collection de mécaniques de gameplay et de systèmes réutilisables développés avec Unity et C#, principalement axés sur les jeux de plateforme 2D et les systèmes interactifs."
language: "csharp"
order: 2
cover: "/projects/2d-mechanics/cover.png"
tech: ["C++", "Unity"]
repo: "https://github.com/heloisaPazeti/UnityMechanics2D"
---

# Mécaniques de Gameplay avec Unity

Une collection de mécaniques de gameplay et de systèmes réutilisables développés avec **Unity et C#**, principalement axés sur les jeux de plateforme 2D et les systèmes interactifs.

Ce projet a été créé comme un environnement d'expérimentation pratique pour explorer la programmation de gameplay, les animations, les déplacements des personnages et les systèmes de dialogue.

## Fonctionnalités

### Déplacements dans un Jeu de Plateforme

* Déplacements horizontaux et verticaux
* Saut et double saut
* Glissade contre les murs (Wall Sliding)
* Dash / déplacement basé sur des impulsions
* Animations des personnages utilisant les Blend Trees de Unity

### Systèmes de Dialogue

Deux approches différentes ont été explorées :

* **Système de dialogue basique** — dialogues séquentiels configurés directement dans l'éditeur Unity.
* **Système de dialogue à embranchements** — arbres de dialogue proposant des choix au joueur, utilisant **Ink et JSON**.

## Technologies

* Unity
* C#
* Ink
* JSON
* Unity Animator / Blend Trees

## Structure du Projet

    UnityMechanics2D/
    ├── Dialog System/
    ├── DialogSystemOptions/
    ├── PlatformerMovementSystem/
    └── SimplePlatformerMechanics/

Chaque dossier contient une expérimentation indépendante ou un système de gameplay.

## Ce que j'ai exploré

Ce projet avait principalement pour objectif de comprendre comment des systèmes de gameplay courants peuvent être implémentés sous forme de composants indépendants et réutilisables dans Unity.

Une attention particulière a été portée aux aspects suivants :

* déplacements du joueur et gestion des états ;
* interaction entre la logique de gameplay et les animations ;
* dialogues à embranchements ;
* séparation des systèmes de gameplay en composants réutilisables.

## Améliorations Futures

* Améliorer la documentation des systèmes
* Ajouter davantage de composants de gameplay réutilisables
* Améliorer la configuration des paramètres de gameplay dans l'éditeur
* Ajouter des démonstrations jouables indépendantes pour chaque mécanique
