# Server Process Manager


This project is to allow friends to start your gaming server from a convenient webapp.
It is curretly a barebones setup with only minecraft setup.  


## Features


- Launch minecraft server from webapp
- View server logs directly in browser via websocket console.
- Execute commands
- Stop & relaunch Server from console.


## Usage:

Ports can be changed in `app.js`. By defualt Express`:80` and ws`:8080`.
Connecting to websocket launches the selected server. To re-launch after stop or crash, re-fresh the page.


## Todo

### Main Todos

- [ ] Authentication using JWT
- [ ] 
- [ ] Fix/make UI/UX
- [ ] Refactor `app.js`
	- option for Auto restart on crash
		- add a toggle/buttons to actually stop the server near console / console commands that are intecepted by backend.
	- A better way to relaunch the server.
	- crash logging
	- Neater, more secure code. 
- [ ] Cross-platform (linux support)

- [ ] Implement Docker/container system?

### Todo Features:

- [ ] More games: e.g. Gmod
- [ ] Select Mc version
	- Build new spigot/bukkit jar if not available.
- [ ] Select world
- [ ] As admin: Filter allowed commands via webterminal
- [ ] Decoupled Live Map module?
	- wait for dynmap to update
- [ ] Select game
