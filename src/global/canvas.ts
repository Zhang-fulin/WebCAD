import { PaperScope } from "paper/dist/paper-core";
import * as paper from 'paper';

export class Canvas{
    public m_element: HTMLCanvasElement;
    public paperScope: any;
    private static instance: Canvas;
    public static getInstance() {
        if (!Canvas.instance) {
            const canvasElement = document.getElementById("WebCAD");
            if (canvasElement && (canvasElement instanceof HTMLCanvasElement)) {
                Canvas.instance = new Canvas(canvasElement );
            }
            
        }
        return Canvas.instance;
    }

    private constructor(element: HTMLCanvasElement) {
        this.m_element = element;
        this.m_element.addEventListener('mousewheel', this.mouseWheelEvent.bind(this));
        this.m_element.addEventListener('mousemove', this.mouseDragEvent.bind(this));
        paper.setup(this.m_element);
        this.paperScope = paper;

        const circle = new paper.Path.Circle({
            center:[0,0],
            radius:10,
            strokeColor:'red'
        });

        var tool = new paper.Tool();
        tool.onMouseDrag = function(event:any) {
            var pan_offset = event.point.subtract(event.downPoint);
            paper.view.center = paper.view.center.subtract(pan_offset);
        }

        circle.remove();
    }
    private mouseClickEvent() {
    }
    private mouseDownEvent() {
    }

    private mouseDragEvent(event:any) {
        var tool = new paper.Tool();
        
    }

    private mouseWheelEvent(event:any) {
        let newZoom = paper.view.zoom;
        const oldZoom = paper.view.zoom;

        if (event.deltaY > 0) {
            newZoom = paper.view.zoom * 1.03;
        } else {
            newZoom = paper.view.zoom * 0.97;
        }

        const beta = oldZoom / newZoom;

        const mousePosition = new paper.Point(event.offsetX, event.offsetY);

        const viewPosition = paper.view.viewToProject(mousePosition);

        const mpos = viewPosition;
        const ctr = paper.view.center;

        const pc = mpos.subtract(ctr);
        const offset = mpos.subtract(pc.multiply(beta)).subtract(ctr);

        paper.view.zoom = newZoom;
        paper.view.center = paper.view.center.add(offset);

        event.preventDefault();
    }
}


export function InitCanvas() {
    Canvas.getInstance();
}

