import { BlockRecord } from "./blockrecord";

export class BlockTable{
    private m_blockRecordTable:Array<BlockRecord> = new Array<BlockRecord>();
    public constructor() {

    }
    public add(blockrecord:BlockRecord) {
        this.m_blockRecordTable.push(blockrecord);
    }
    public delete(blockrecord:BlockRecord) {
        
    }
}