//
// import { Timer } from "./Timer";
// import { VK_A, VK_D, VK_DOWN, VK_LEFT, VK_RIGHT, VK_S, VK_UP, VK_W, ctx, textColor, timer, game, resetTimer, nullGame, player, keySet } from "../global-variable";
// import { CollisionChecker } from "./CollisionChecker";
// import { Player } from "./Player";
// import { gameMap } from "./GameMap";
// import { Bullet } from "./Bullet";
// import { Victor } from "victor";
// import { AppComponent } from "../app.component";
//
//
//
// export class Game {
//     gameId: string;
//     player: Player;
//     players: Player[];
//     lastRender: number;
//     round: number;
//     ctx: any;
//     gameeMap: gameMap;
//     keySet;
//     checker: CollisionChecker;
//     app: AppComponent;
//
//     constructor(ctx: any, options: any) {
//         const { width, height } = options;
//         this.gameId = "initial value";
//         this.lastRender = 0;
//         this.round = 1;
//         this.ctx = ctx;
//         this.players = [];
//         this.player = player;
//         this.gameeMap = new gameMap();
//         this.keySet = keySet;
//         this.checker = new CollisionChecker();
//         this.app = new AppComponent();
//         // this.refreshRate = 0;
//         Object.assign(ctx.canvas, { width, height });
//         //todo: function added in GameMap constructor. If work ok, delete here
//         // if (!obstacleAdded) {
//         //     this.gameeMap.addObstacles();
//         // }
//     }
//
//     //todo must lower bullet draw loops
//     // drawEnemyBullets = () => {
//     //     this.players.forEach(playerCurrent => {
//     //         if (player.name != playerCurrent.name) {
//     //             playerCurrent.bullets.forEach(bullet => player.drawBullet(bullet));
//     //         }
//     //     })
//     // }
//
//     drawKillsCount() {
//         let textXPosition = 605;
//         let textYPosition = 30;
//         if (ctx != null) {
//             ctx.font = "bold 15px serif";
//             ctx.fillStyle = textColor;
//             ctx.fillText("Player", textXPosition, textYPosition);
//             ctx.fillText(" Kills", textXPosition + 55, textYPosition);
//             for (let i = 0; i < this.players.length; i++) {
//                 ctx.font = "bold 20px serif";
//                 ctx.fillStyle = this.players[i].color;
//                 textYPosition += 20;
//                 ctx.fillText(this.players[i].name, textXPosition, textYPosition);
//                 ctx.fillText("" + this.players[i].frags, textXPosition + 65, textYPosition);
//             }
//         }
//     }
//
//     draw() {
//         this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
//         this.gameeMap.drawMap(this.ctx);
//         // this.drawEnemyBullets();
//         this.drawKillsCount();
//         timer.draw();
//         this.drawTotalScores();
//
//         this.players.forEach(playerCurrent => {
//             //todo draw all bullets once
//             //check if something is broken
//             // if (player.name != playerCurrent.name) {
//             playerCurrent.bullets.forEach(bullet => player.drawBullet(bullet));
//             // }
//         })
//
//         this.players.forEach((currentPlayer => player.drawPlayer(currentPlayer)));
//         this.checkForBulletCollision();
//
//     }
//
//     checkForBulletCollision() {
//         for (let i = 0; i < player.bullets.length; i++) {
//             //updateBullet(player.bullets[i]);
//             // drawBullet(player.bullets[i]);
//             if (this.checker.checkUpCollision(player.bullets[i], 1) ||
//                 this.checker.checkDownCollision(player.bullets[i], 1) ||
//                 this.checker.checkRightCollision(player.bullets[i], 1) ||
//                 this.checker.checkLeftCollision(player.bullets[i], 1)) {
//                 //TODO check if obstacle is hit
//                 player.bullets.splice(i, 1);
//                 i--;
//             } else if (this.checker.bulletIsOut(player.bullets[i])) {
//                 player.bullets.splice(i, 1);
//                 i--;
//             } else {
//                 for (let j = 0; j < this.players.length; j++) {
//                     if (player.bullets[i]?.shooter !== this.players[j].name) {
//                         const dx = player.bullets[i]?.position.x - this.players[j].position.x;
//                         const dy = player.bullets[i]?.position.y - this.players[j].position.y;
//                         const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
//                         if (distance < this.players[j].size) {
//                             //todo for now isAlive field in not needed must delete later if not used again
//                             // this.players[j].isAlive = false;
//                             player.frags++;
//                             player.bullets.splice(i, 1);
//                             i--;
//                             this.app.sendKillMessage({
//                                 deadName: this.players[j].name,
//                                 deadId: this.players[j].id,
//                                 killerId: player.id,
//                                 gameId: this.gameId
//                             });
//                         }
//                     }
//                 }
//             }
//         }
//     }
//
//     drawTotalScores() {
//         let scoresY = 200;
//         let scoresX = 600;
//
//         for (let i = 0; i < game!.players.length; i++) {
//             if (ctx != null) {
//                 scoresY += 100;
//                 ctx.beginPath()
//                 ctx.moveTo(scoresX, scoresY);
//                 ctx.lineTo(ctx.canvas.width, scoresY);
//                 ctx.strokeStyle = game!.players[i].color;
//                 ctx.lineWidth = 5;
//                 ctx.stroke();
//
//                 ctx.beginPath()
//                 ctx.font = "bold 50px serif";
//                 ctx.fillStyle = game!.players[i].color;
//                 ctx.fillText(game!.players[i].totalScore.toString(), scoresX + 40, scoresY + 60);
//
//                 ctx.beginPath()
//                 ctx.moveTo(scoresX, scoresY + 80);
//                 ctx.lineTo(ctx.canvas.width, scoresY + 80);
//                 ctx.strokeStyle = game!.players[i].color;
//                 ctx.lineWidth = 5;
//                 ctx.stroke();
//             }
//         }
//
//     }
//
//
//     run(timestamp: any) {
//         //todo timestamp is no longer needed since bullets don't have TTL. must delete if not used for something else
//         //todo and must check if therefresh rate is needed or helpfull...
//
//         // refreshRate++;
//         const progress = timestamp - this.lastRender;
//         this.update(progress);
//         this.draw();
//
//         // if (refreshRate == 2) {
//         this.app.sendPlayer();
//         // refreshRate = 0;
//         // }
//         this.lastRender = timestamp;
//         // this.req = window.requestAnimationFrame((t) => this.run(t));
//         window.requestAnimationFrame((t) => this.run(t));
//     }
//
//
//     update = (progress: any) => {
//         const ks = this.keySet;
//         const x = (ks.has(VK_D) || ks.has(VK_RIGHT)) ? 1 : (ks.has(VK_A) || ks.has(VK_LEFT)) ? -1 : 0;
//         const y = (ks.has(VK_S) || ks.has(VK_DOWN)) ? 1 : (ks.has(VK_W) || ks.has(VK_UP)) ? -1 : 0;
//
//
//         player.bullets.forEach((bullet: Bullet) => player.updateBullet(bullet));
//
//         if (x > 0) {
//             if (player.playerIsOutRight(x)) {
//                 return;
//             } else if (this.checker.checkRightCollision(player, x)) {
//                 return;
//             }
//         } else if (x < 0) {
//             if (player.playerIsOutLeft(x)) {
//                 return;
//             } else if (this.checker.checkLeftCollision(player, x)) {
//                 return;
//             }
//         }
//
//         if (y > 0) {
//             if (player.playerIsOutDown(x)) {
//                 return;
//             } else if (this.checker.checkDownCollision(player, x)) {
//                 return;
//             }
//         } else if (y < 0) {
//             if (player.playerIsOutUp(x)) {
//                 return;
//             } else if (this.checker.checkUpCollision(player, x)) {
//                 return;
//             }
//         }
//
//
//         player.position = Victor.fromObject(player.position);
//         player.position.add(new Victor(x, y));
//     }
//
//     resetRound() {
//         this.round++;
//         let winner = player;
//         let enemy = player; // TODO just to satisfy "may be indefined" error, must check if there is a problem here
//         for (let i = 0; i < this.players.length; i++) {
//             if (player.id !== this.players[i].id) {
//                 enemy = this.players[i];
//             }
//             if (winner.frags < this.players[i].frags) {
//                 winner = this.players[i];
//             }
//         }
//         //todo must create const object {playerId: number, position: Position}
//         player.position.x = 100;
//         player.position.y = 100;
//         if (enemy.frags === player.frags && ctx != null) {
//             // Draw draw score
//             ctx.font = "bold 100px serif";
//             ctx.fillStyle = textColor;
//             ctx.textAlign = "center";
//             ctx.fillText("DRAW", (ctx.canvas.width / 2) - 50, ctx.canvas.height / 2);
//         } else if (enemy.frags < player.frags && ctx != null) {
//             player.totalScore += 1;
//             // Draw player wins
//             ctx.font = "bold 50px serif";
//             ctx.fillStyle = winner.color;
//             ctx.textAlign = "center";
//             ctx.fillText(winner.name + " WINS", (ctx.canvas.width / 2) - 50, ctx.canvas.height / 2);
//         }
//         player.frags = 0;
//         resetTimer();
//     }
//
//     endGame() {
//         this.app.sendEndGame();
//         let temp = this.players;
//         nullGame(); //TODO check if this works
//         this.drawWinners(temp);
//         this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
//     }
//
//     drawWinners(players: Player[]) {
//         let winner = player;
//         let enemy;
//
//         for (let i = 0; i < players.length; i++) {
//             if (player.id != players[i].id) {
//                 enemy = players[i];
//             }
//             if (winner.totalScore < players[i].totalScore) {
//                 winner = players[i];
//             }
//         }
//         if (enemy?.totalScore == player.totalScore) {
//             ctx!.font = "bold 100px serif";
//             ctx!.fillStyle = textColor;
//             ctx!.textAlign = "center";
//             ctx!.fillText("DRAW", (ctx!.canvas.width / 2) - 50, ctx!.canvas.height / 2);
//         } else {
//             ctx!.font = "bold 50px serif";
//             ctx!.fillStyle = winner.color;
//             ctx!.textAlign = "center";
//             ctx!.fillText(winner.name + " WINS", (ctx!.canvas.width / 2) - 50, ctx!.canvas.height / 2);
//         }
//     }
//
//
// }
