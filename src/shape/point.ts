class Point extends Shape {
    private x: number = 0;
    private y: number = 0;
    public constructor (x:number, y:number) {
        super();
        this.x = x;
        this.y = y;
        this.setType(ShapeType.PointType);
    }
}