class Point extends Shape {
    public readonly x: number;
    public readonly y: number;
    public readonly z: number;
    public constructor (x:number, y:number, z:number) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
        this.setType(ShapeType.PointType);
    }
}

export { Point }