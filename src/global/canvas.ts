import { DataBase } from "./database";

export class Canvas{
    private m_element:HTMLCanvasElement;
    private m_dataBase:DataBase = new DataBase();
    public constructor(element: HTMLCanvasElement) {
        this.m_element = element;
        this.m_element.addEventListener('click', this.mouseClickEvent.bind(this));
        this.m_element.addEventListener('mousedown', this.mouseDownEvent.bind(this));
    }
    public render() {
        console.log('render');
    }
    private mouseClickEvent() {
        console.log('11111');
    }
    private mouseDownEvent() {
        console.log("2");
    }
}