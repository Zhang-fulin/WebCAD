import { BlockTable } from "./blocktable";
import { LayerTable } from "./layertable";

export class DataBase {
    private m_blockTable:BlockTable = new BlockTable();
    private m_layerTable:LayerTable = new LayerTable();
    public constructor() {
    }
}