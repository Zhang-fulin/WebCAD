class Shape {
    private type:ShapeType = ShapeType.NullType;
    public setType(type:ShapeType) {
        this.type = type;
    }
    public getType(type:ShapeType):ShapeType {
        return this.type;
    }
}