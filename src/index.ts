import './index.css'
import { InitCanvas } from './global/canvas';
import { renderLine } from './render/renderLine'

window.onload = function() {
    InitCanvas();
    const line = new renderLine();
}




