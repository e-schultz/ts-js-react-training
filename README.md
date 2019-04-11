# JavaScript / React Training

This repository contains the training material for a JavaScript/React Training Course.

The decks are built using [mdx-deck](https://github.com/jxnblk/mdx-deck)

## Repo Setup

This is a monorepo setup, using yarn workspaces. 

* decks - contains individual slide decks for each section
* examples - collection of example apps used created with create-react-app
* exercises - collection of exercise apps 
* components - collection of utility components that can be used in the mdx deck files

### Running a Deck

The total number of slides is quite large, so each deck currently is built and run in isolation. 

To run a deck:

`yarn workspace deck-name start`, for example:

`yarn workspace arrays-deck start`

### Current Deck Workspace Names

* arrays-deck
* classes-deck
* destructuring-deck
* functions-deck
* home-deck
* iterals-deck
* objects-deck
* promises-deck
* react-components-deck
* react-state-deck
* react-hooks-deck
* react-performance-deck
* react-props-deck
* styles-deck
* template-deck
* typescript-interfaces-deck ~deprecated~
* variables-deck

### Running Order

The `home` deck contains the approx running order of the slide content.

## Deployment

This repo is automatically deployed using [now.sh](https://zeit.co/now)

Merges to master get built/deployed to: [https://rio-react-training.now.sh/decks](https://rio-react-training.now.sh/decks)

Pull Requests will get deployed to their own instance automatically. The Now GitHub integration will comment on the PR with a link to the enviornment. 

See [this pr for an example](https://github.com/e-schultz/ts-js-react-training/pull/94#issuecomment-482255557)
