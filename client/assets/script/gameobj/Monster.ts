import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import {GameObj} from "./GameObj"

@ccclass('NewComponent')
export class Monster extends GameObj {
    start() {

    }

    update(deltaTime: number) {
        
    }
}


