import './index.css'
import { Canvas } from './global/canvas';
import { DataBase } from './global/database';

const canvasElement = document.getElementById('WebCAD');
if (canvasElement && (canvasElement instanceof HTMLCanvasElement)) {
    const gl = canvasElement.getContext("webgl");
    if (!gl) {
        alert("无法初始化WebGL，你的浏览器、操作系统或硬件等可能不支持WebGL。");
    } else {
        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
        const canvasInstance = new Canvas(canvasElement);
        canvasInstance.render();
    }
}