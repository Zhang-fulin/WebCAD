import { ModelSpace, PaperSpace } from "./blockrecord";
import { BlockTable } from "./blocktable";
import { LayerTable } from "./layertable";

class DataBase {
    private m_blockTable:BlockTable = new BlockTable();
    private m_layerTable:LayerTable = new LayerTable();
    public static instance: DataBase;
    public static getInstance() {
        if (!DataBase.instance){
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }
    private constructor() {
        this.m_blockTable.add(ModelSpace.getInstance());
        this.m_blockTable.add(new PaperSpace());
        this.m_blockTable.add(new PaperSpace());
    }
}

let dataBase = DataBase.getInstance();
export {dataBase};