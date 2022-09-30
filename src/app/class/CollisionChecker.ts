// import {canvas, obstacles, player, tileSize} from "../global-variable";
// import { Bullet } from "./Bullet";
//
//
// export class CollisionChecker {
//     playerIsOutRight = (step: number) => {
//         if ((player.position.x + player.size + step) >= canvas!.width - tileSize) {
//             return true;
//         }
//         return false;
//     }
//
//     playerIsOutLeft = (step: number) => {
//         if ((player.position.x - player.size + step) <= tileSize) {
//             return true;
//         }
//         return false;
//     }
//
//     playerIsOutUp = (step: number) => {
//         if ((player.position.y - player.size + step) < tileSize) {
//             return true;
//         }
//         return false;
//     }
//
//     playerIsOutDown = (step: number) => {
//         if ((player.position.y + player.size + step) > canvas!.height - tileSize) {
//             return true;
//         }
//         return false;
//     }
//
//     checkRightCollision = (object: any, step: number) => {
//
//         for (let i = 0; i < obstacles.length; i++) {
//             if ((object.position.x + object.size + step) >= obstacles[i].obstacle_x &&
//                 object.position.x + object.size + step <= obstacles[i].obstacle_x &&
//                 (object.position.y + object.size + step) > obstacles[i].obstacle_y &&
//                 (object.position.y - object.size + step) < obstacles[i].obstacle_y + obstacles[i].obstacle_height) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     checkLeftCollision = (object: any, step: number) => {
//
//         for (let i = 0; i < obstacles.length; i++) {
//             if ((object.position.x - object.size + step) <= obstacles[i].obstacle_x + obstacles[i].obstacle_width &&
//                 (object.position.x - object.size + step) >= obstacles[i].obstacle_x + obstacles[i].obstacle_width &&
//                 (object.position.y + object.size + step) > obstacles[i].obstacle_y &&
//                 (object.position.y - object.size + step) < obstacles[i].obstacle_y + obstacles[i].obstacle_height) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     checkDownCollision = (object: any, step: number) => {
//
//         for (let i = 0; i < obstacles.length; i++) {
//             if ((object.position.y + object.size + step) > obstacles[i].obstacle_y &&
//                 (object.position.y - object.size + step) < obstacles[i].obstacle_y &&
//                 (object.position.x + object.size + step) > obstacles[i].obstacle_x &&
//                 (object.position.x - object.size + step) < obstacles[i].obstacle_x + obstacles[i].obstacle_width) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     checkUpCollision = (object: any, step: number) => {
//
//         for (let i = 0; i < obstacles.length; i++) {
//             if ((object.position.y - object.size + step) < obstacles[i].obstacle_y + obstacles[i].obstacle_height &&
//                 (object.position.y - object.size + step) > obstacles[i].obstacle_y &&
//                 (object.position.x + object.size + step) > obstacles[i].obstacle_x &&
//                 (object.position.x - object.size + step) < obstacles[i].obstacle_x + obstacles[i].obstacle_width) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     bulletIsOut = (bullet: Bullet) => {
//         return bullet.position.x < 0 || bullet.position.y < 0 || bullet.position.x > canvas!.width || bullet.position.y > canvas!.height;
//     }
// }
