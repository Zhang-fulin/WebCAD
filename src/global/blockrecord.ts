import { dataBase } from "./database";

enum BlockRecordType {
    NullType = 0,
    ModelSpace,
    PaperSpace
}

export class BlockRecord{
    protected  type = BlockRecordType.NullType;
}

export class ModelSpace extends BlockRecord{
    private static instance: ModelSpace;
    public static getInstance() {
        if(!ModelSpace.instance){
            ModelSpace.instance = new ModelSpace;
        }
        return ModelSpace.instance;
    }
    private constructor() {
        super();
        this.type = BlockRecordType.ModelSpace;
    }
}

export class PaperSpace extends BlockRecord{
    public constructor() {
        super();
        this.type = BlockRecordType.PaperSpace;
    }

}