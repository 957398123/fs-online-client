import { _decorator, Component, KeyCode, sp } from 'cc';
import { input, Input, EventKeyboard } from 'cc';
import { Vec3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {

    @property({ type: sp.Skeleton })
    spine: sp.Skeleton | null = null;

    // 是否骑乘状态 false-否 true-是
    private ride: boolean = false;

    // 角色状态 0-静止 1-行走 2-攻击 3-施法
    private status: number = 0;

    // 角色方向 0-下 1-右 2-上 3-左
    private direction: number = 0;

    private setp: number[] = [5, 4, 4, 2];

    // 玩家移动速度，值越大玩家移动速度越快
    private speed: number = 30;

    private rate: number = 1;

    // 玩家当前位置
    private _curPos: Vec3 = new Vec3();

    // 玩家目标位置
    private _targetPos: Vec3 = new Vec3(0, 0, 0);

    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    // 大概每一帧执行一次
    update(deltaTime: number) {
        if (this.status == 1) {
            this.node.getPosition(this._curPos);
            const distance = (this.speed * deltaTime) / this.rate;
            let x: number = 0;
            let y: number = 0;
            switch (this.direction) {
                case 0: {
                    y -= distance;
                    break;
                }
                case 1: {
                    x += distance;
                    break;
                }
                case 2: {
                    y += distance;
                    break;
                }
                case 3: {
                    x -= distance;
                    break;
                }
            }
            Vec3.add(this._targetPos, this._curPos, new Vec3(x, y, 0));
            this.node.setPosition(this._targetPos);
        }
    }



    // 玩家按下按键
    onKeyDown(event: EventKeyboard) {
        // 获取玩家当前状态，如果是上下左右键，切换状态
        switch (event.keyCode) {
            case KeyCode.ARROW_UP:
            case KeyCode.ARROW_RIGHT:
            case KeyCode.ARROW_DOWN:
            case KeyCode.ARROW_LEFT: {
                this.run(event.keyCode);
                break;
            }
        }
    }

    // 玩家按键抬起
    onKeyUp(event: EventKeyboard) {
        // 如果是正在行走
        if (this.status == 1) {
            switch (event.keyCode) {
                case KeyCode.ARROW_UP: {
                    this.spine!.setAnimation(0, "人类-男-静止-上", true);
                    break;
                }
                case KeyCode.ARROW_RIGHT: {
                    this.spine!.setAnimation(0, "人类-男-静止-右", true);
                    break;
                }
                case KeyCode.ARROW_DOWN: {
                    this.spine!.setAnimation(0, "人类-男-静止-下", true);
                    break;
                }
                case KeyCode.ARROW_LEFT: {
                    this.spine!.setAnimation(0, "人类-男-静止-左", true);
                    break;
                }
            }
            // 设置静止
            this.status = 0;
        }
    }

    run(keyCode: number) {
        this.status = 1;
        switch (keyCode) {
            case KeyCode.ARROW_UP: {
                this.direction = 2;
                //this.spine!.setAnimation(0, "人类-男-静止-上", true);
                break;
            }
            case KeyCode.ARROW_RIGHT: {
                this.direction = 1;
                //this.spine!.setAnimation(0, "人类-男-静止-右", true);
                break;
            }
            case KeyCode.ARROW_DOWN: {
                this.direction = 0;
                this.spine!.setAnimation(0, "人类-男-行走-下", true);
                break;
            }
            case KeyCode.ARROW_LEFT: {
                this.direction = 3;
                this.spine!.setAnimation(0, "人类-男-行走-左", true);
                break;
            }
        }
    }
}


