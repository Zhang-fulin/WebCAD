
import { Point }from '../shape/point'
import { Canvas } from '../global/canvas'
import * as paper from 'paper'
class renderLineParams {
    public begin: Point | undefined;
    public end: Point | undefined;
    public lineWidth: number | undefined;
    public dashArray: Array<number> | undefined;
    public layer: string | undefined;
}

export class renderLine {
    private line!: paper.Path.Line | undefined;
    private params: renderLineParams | undefined;
    public constructor() {
        this.render();
    }

    private render() {
        console.log(Canvas.getInstance().paperScope.tool, Canvas.getInstance().paperScope.tools);
        if (!this.params || !this.params.begin || !this.params.end) {
            return;
        } else {
            this.remove();
            this.line = new paper.Path.Line(new paper.Point(0, 0), 
            new paper.Point(100, 100));
            if (!this.params.layer) {
                this.line.strokeColor = new paper.Color(1,0,0);
                this.line.strokeWidth = 10;
                Canvas.getInstance().paperScope.project.activeLayer.addChild(this.line)

            }
        }
    }

    private remove() {
        if (this.line) {
            this.line.remove();
        }
        this.line = undefined;
    }
}