// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    bg: cc.Node = null;

    // @property(cc.Button)
    // button: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() { 
        cc.systemEvent.on(cc.Node.EventType.MOUSE_DOWN, this.ChangeColor, this);
    }
    onKeyDown() {
        throw new Error("Method not implemented.");
    }

    start() {
        //this.bg = this.node;
    }
    ChangeColor() {
        this.bg.color = cc.Color.GREEN;


    }

    // update (dt) {}
}
