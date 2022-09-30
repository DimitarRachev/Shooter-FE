import { Game } from "./class/Game";
import { Obstacle } from "./class/Obstacle";
import { Player } from "./class/Player";
import { Timer } from "./class/Timer";

export const tileSize = 20;
export const VK_W = 87;
export const VK_A = 65;
export const VK_S = 83;
export const VK_D = 68;
export const VK_UP = 38;
export const VK_DOWN = 40;
export const VK_LEFT = 37;
export const VK_RIGHT = 39;
export const canvas = document.querySelector('.game') as HTMLCanvasElement | null;
export const ctx = canvas!.getContext('2d');
export const textColor = "white";
export let round = 1;
export let player: Player;
export let obstacles: Obstacle[];
export let keySet = new Set();
export let timer: Timer;
export let game: Game | undefined;
export let mousePosition: any;


export let resetTimer = () => {
    timer = new Timer();
}

export let createPlayer = (playerOptions: Player) => {
    player = new Player(playerOptions);
}

export let createGame = () => {
    game = new Game(ctx, { width: 700, height: 500 })
}

export let nullGame = () => {
    game = undefined;
}

export let setMousePosition = (position: any) => {
    mousePosition = position;
}