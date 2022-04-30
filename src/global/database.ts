import { BlockTable } from "./blocktable";
import { LayerTable } from "./layertable";

class DataBase {
    private m_blockTable:BlockTable = new BlockTable();
    private m_layerTable:LayerTable = new LayerTable();
    public constructor() {
    }
}
let dataBase = new DataBase();
export {dataBase};