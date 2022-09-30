import { Component, OnInit } from '@angular/core';
//
// import { Bullet } from './class/Bullet';
//
// import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
// import { createGame, createPlayer, ctx, game, keySet, player, resetTimer, mousePosition, setMousePosition } from './global-variable';
// import { Victor } from 'victor';
//



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    // this.mouseHandlers();
    // this.clickHandlers();
    // this.keyHandlers();
  }
  //
  // private keyHandlers() {
  //   document.addEventListener('keydown', (e) => this.addKey(e), false);
  //   document.addEventListener('keyup', (e) => this.removeKey(e), false);
  // }
  //
  // private mouseHandlers() {
  //   document.addEventListener('mousemove', (e) => this.followMouse(e))
  // }
  //
  // private clickHandlers() {
  //   ctx!.canvas.addEventListener('click', (e) => this.fire(e));
  // }
  //
  // title = 'gameFE';
  // connected!: boolean;
  //
  // // mousePosition: any | undefined;
  //
  // stompClient: any;
  //
  // connect() {
  //   const socket = new SockJS('http://localhost:8081/move');
  //   this.stompClient = Stomp.over(socket);
  //   this.stompClient!.connect({}, (frame: any) => {
  //     this.setConnected(true);
  //     this.stompClient!.subscribe('/move/messages', (moveResource: any) => { this.handleResponse(JSON.parse(moveResource.body)) });
  //   })
  // }
  //
  // disconnect() {
  //   if (this.stompClient != null) {
  //     this.stompClient.disconnect();
  //   }
  //   this.setConnected(false);
  // }
  //
  // sendPlayer() {
  //   this.stompClient!.send("/app/move", {}, JSON.stringify({ gameId: game!.gameId, player: player }));
  // }
  //
  // sendName() {
  //   if (!player) {
  //     const inputElem = document.getElementById('name') as HTMLInputElement | null;
  //     let name = inputElem!.value;
  //     let path = 'http://localhost:8081/get' + '/' + name;
  //     const xmlHttp = new XMLHttpRequest();
  //     xmlHttp.open("GET", path, false); // false for synchronous request
  //     xmlHttp.send(null);
  //     let response = JSON.parse(xmlHttp.responseText);
  //     createPlayer(response.player)
  //     createGame();
  //     game!.players = response.game.players;
  //     game!.gameId = response.game.gameId;
  //     this.startScreen();
  //   }
  // }
  //
  // sendKillMessage(killMessage: any) {
  //   let path = 'http://localhost:8081/killCounter';
  //   const xmlHttp = new XMLHttpRequest();
  //   xmlHttp.open("POST", path, false); // false for synchronous request
  //   xmlHttp.setRequestHeader("Content-Type", "application/json");
  //   xmlHttp.send(JSON.stringify(killMessage));
  //   //TODO check if refresh is needed
  //   this.sendPlayer();
  // }
  //
  // handleResponse(gameUpdate: any) {
  //   if (gameUpdate.gameId === game!.gameId) {
  //     let tempPlayers = gameUpdate.players;
  //     for (let i = 0; i < tempPlayers.length; i++) {
  //       if (tempPlayers[i].id === player.id) {
  //         player.frags = tempPlayers[i].frags;
  //         player.bullets = tempPlayers[i].bullets;
  //         player.isAlive = tempPlayers[i].isAlive;
  //         player.position = new Victor(tempPlayers[i].position.x, tempPlayers[i].position.y);
  //         player.size = tempPlayers[i].size;
  //         player.color = tempPlayers[i].color;
  //         player.totalScore = tempPlayers[i].totalScore;
  //       }
  //     }
  //     game!.players = tempPlayers;
  //   }
  // }
  //
  // sendEndGame() {
  //   //todo must bu implemented in backend, before uncomment
  //
  //   //     let path = 'http://localhost:8081/endGame';
  //   // const xmlHttp = new XMLHttpRequest();
  //   // xmlHttp.open("POST", path, false); // false for synchronous request
  //   // xmlHttp.setRequestHeader("Content-Type", "application/json");
  //   // xmlHttp.send(JSON.stringify(game))
  // }
  //
  //
  // startScreen() {
  //
  //   if (game!.players.length < 2) {
  //     //todo: draw lobby
  //     window.requestAnimationFrame((t) => this.startScreen());
  //   } else {
  //     resetTimer()
  //     game!.run(Date.now());
  //   }
  //
  // }
  //
  // //------------------- ACTION LISTENERS--------------------------------
  // // ctx!.canvas.addEventListener('mousemove', (e) => followMouse(e));
  // // ctx!.canvas.addEventListener('click', (e) => fire(e));
  // // document.addEventListener('keydown', (e) => addKey(e), false);
  // // document.addEventListener('keyup', (e) => removeKey(e), false);
  //
  // getMousePos = (canvas: any, event: any) => (({ top, left }) => ({
  //   x: event.clientX - left, y: event.clientY - top
  // }
  // ))(canvas.getBoundingClientRect());
  //
  // fire = (e: any) => {
  //   let bullet = new Bullet(Victor.fromObject(player.position), mousePosition, player.name);
  //   player.bullets.push(bullet);
  //   this.sendPlayer();
  // }
  //
  // followMouse = (e: any) => {
  //   setMousePosition(this.getMousePos(e.currentTarget, e));
  //
  // }
  //
  // addKey = (e: any) => {
  //   const key = e.which || e.keyCode || 0;
  //   keySet.add(key);
  // }
  // removeKey = (e: any) => {
  //   const key = e.which || e.keyCode || 0;
  //   keySet.delete(key);
  // }
  //
  //
  //
  //
  //
  // setConnected(connected: boolean) {
  //   const connectButton = document.getElementById('connect') as HTMLButtonElement | null;
  //   const disconnectButton = document.getElementById('disconnect') as HTMLButtonElement | null;
  //   const inputFiled = document.getElementById('nameInputDiv') as HTMLInputElement | null;
  //   if (connectButton != null && disconnectButton != null && inputFiled != null) {
  //     connectButton.disabled = connected;
  //     disconnectButton.disabled = !connected;
  //     inputFiled.style.visibility = connected ? 'visible' : 'hidden';
  //     // document.getElementById('response').innerHTML = '';
  //   }
  // }
  //


}
