import { _decorator, Component, Graphics, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DrawSkillBar')
export class DrawSkillBar extends Component {
    start() {
        // 绘制底色
        const g = this.getComponent(Graphics);
        const ts = this.getComponent(UITransform);
        g.lineWidth = 1;
        g.fillColor.fromHEX('#DECFAE');
        g.fillRect(0, 0, ts.width, ts.height);
        // 绘制边框
        g.strokeColor.fromHEX('#5C3E19');
        g.rect(0, 0, ts.width-1, ts.height-1);
        g.strokeColor.fromHEX('#E0BB8E');
        g.rect(1, 1, ts.width-3, ts.height-3);
        g.close();
        g.stroke();
    }

    update(deltaTime: number) {
        
    }
}


