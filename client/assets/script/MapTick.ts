import { _decorator, Component, profiler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MapTick')
export class MapTick extends Component {
    start() {
        profiler.hideStats()
    }

    update(deltaTime: number) {
        
    }
}


