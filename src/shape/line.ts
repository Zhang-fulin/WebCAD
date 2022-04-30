import { Point } from './point'
class Line extends Shape {
    private m_point1:Point;
    private m_point2:Point;
    public constructor(point1: Point, point2: Point) {
        super();
        this.m_point1 = point1;
        this.m_point2 = point2;
        this.setType(ShapeType.LineType);
    }
}