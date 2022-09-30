// import { game } from "../global-variable";
// import { ctx, textColor, round } from "../global-variable";
//
//
//
// export class Timer{
//     StartTime;
//
//     constructor() {
//         this.StartTime = Date.now();
//
//     }
//     draw() {
//         let currentTime = Date.now();
//         let seconds= (currentTime-this.StartTime)/1000;
//         let time= Math.abs(60-seconds);
//         let textXPosition=605;
//         let textYPosition=30;
//             if (ctx != null) {
//         ctx.font = "bold 25px serif";
//         ctx.fillStyle = textColor;
//         ctx.fillText("Round:"+round, textXPosition, textYPosition+150);
//
//         ctx.font = "bold 50px serif";
//         ctx.fillStyle = textColor;
//         ctx.fillText(time.toFixed(), textXPosition+25, textYPosition+200);
//             }
//         if(seconds>=20) {
//             if(game!.round < 3){
//                 game!.resetRound();
//             }else {
//                 game!.endGame();
//             }
//         }
//     }
// }
