// import { Victor } from "victor";
// import {canvas, ctx, player, tileSize} from "../global-variable";
// import { Bullet } from "./Bullet";
// import { Position } from "./Position";
//
//
// export class Player {
//     frags: number;
//     bullets: Bullet[];
//     isAlive:boolean;
//     id: number;
//     name: string;
//     position: any;
//     size: number;
//     color: string;
//     totalScore: number;
//
//     constructor(options:any) {
//         const opts = {...options};
//         this.frags = opts.frags;
//         this.bullets = opts.bullets;
//         this.isAlive = opts.isAlive;
//         this.id = opts.id;
//         this.name = opts.name;
//         this.position = new Victor(opts.position.x, opts.position.y);
//         this.size = opts.size;
//         this.color = opts.color;
//         this.totalScore = opts.totalScore;
//     }
//
//     updateBullet = (bullet: Bullet) => {
//         bullet.position = new Victor(bullet.position.x, bullet.position.y).add(new Victor(bullet.speed.x, bullet.speed.y));
//     }
//
//     drawPlayer = (player: Player) => {
//         if(ctx != null){
//         ctx.fillStyle = player.color;
//         ctx.beginPath();
//         ctx.arc(player.position.x, player.position.y, player.size, 0, Math.PI * 2, false);
//         ctx.fill();
//         ctx.closePath();
//         }
//     }
//     drawBullet = (bullet: Bullet) => {
//         if (ctx != null) {
//         ctx.fillStyle = 'red';
//         ctx.beginPath();
//         ctx.arc(bullet.position.x, bullet.position.y, bullet.size, 0, 2 * Math.PI);
//         ctx.fill();
//         }
//     }
//
//     playerIsOutRight = (step:number) => {
//     if ((player.position.x + player.size + step) >= canvas!.width - tileSize) {
//         return true;
//     }
//     return false;
// }
// playerIsOutLeft = (step: number) => {
//     if ((player.position.x - player.size + step) <= tileSize) {
//         return true;
//     }
//     return false;
// }
// playerIsOutUp = (step: number) => {
//     if ((player.position.y - player.size + step) < tileSize) {
//         return true;
//     }
//     return false;
// }
// playerIsOutDown = (step: number) => {
//     if ((player.position.y + player.size + step) > canvas!.height - tileSize) {
//         return true;
//     }
//     return false;
// }
//
// }
