//
// import { Victor } from "victor";
// import { Position } from "./Position";
// import { Speed } from "./Speed";
//
//
// export class Bullet {
//     shooter;
//     position;
//     speed;
//     size;
//
//     constructor(source: Victor, target:Position, name: string) {
//         this.shooter = name;
//         this.position = source.clone();
//         this.speed = this.position.clone()
//             .subtract(Victor.fromObject(target))
//             .normalize()
//             .multiply(new Victor(-3, -3));
//         this.size = 3;
//     }
//
// }
