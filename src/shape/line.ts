class Line extends Shape {
    private point1 = new Point(0, 0);
    private point2 = new Point(0, 0);
    public constructor(point1: Point, point2: Point) {
        super();
        this.point1 = point1;
        this.point2 = point2;
        this.setType(ShapeType.LineType);
    }
}