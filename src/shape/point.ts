class Point extends Shape {
    private m_x: number;
    private m_y: number;
    private m_z: number;
    public constructor (x:number, y:number, z:number) {
        super();
        this.m_x = x;
        this.m_y = y;
        this.m_z = z;
        this.setType(ShapeType.PointType);
    }
}