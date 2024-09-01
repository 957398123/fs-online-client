import { _decorator, Component, TiledLayer, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HandShield')
export class HandShield extends Component {

    @property({ type: TiledLayer })
    public tiledLayer: TiledLayer | null = null;


    @property({ type: Node })
    public player: Node | null = null;

    start() {
        this.player.setPosition(0, 0);
        this.tiledLayer.addUserNode(this.player);
    }

    update(deltaTime: number) {

    }
}


