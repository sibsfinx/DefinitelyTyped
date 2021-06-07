import { Camera, MOUSE, TOUCH, Vector3 } from '../../../src/Three';

declare enum STATE {
    NONE = "NONE",
    ROTATE = "ROTATE",
    DOLLY = "DOLLY",
    PAN = "PAN",
    TOUCH_ROTATE = "TOUCH_ROTATE",
    TOUCH_PAN = "TOUCH_PAN",
    TOUCH_DOLLY_PAN = "TOUCH_DOLLY_PAN",
    TOUCH_DOLLY_ROTATE = "TOUCH_DOLLY_ROTATE"
}

export class OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement | HTMLDocument;

    // API
    enabled: boolean;
    target: Vector3;

    // deprecated
    center: Vector3;

    minDistance: number;
    maxDistance: number;

    minZoom: number;
    maxZoom: number;

    minPolarAngle: number;
    maxPolarAngle: number;

    minAzimuthAngle: number;
    maxAzimuthAngle: number;

    enableDamping: boolean;
    dampingFactor: number;

    enableZoom: boolean;
    enableZoomWithCtrl: boolean;
    zoomSpeed: number;

    enableRotate: boolean;
    enableRotateX: boolean;
    enableRotateY: boolean;
    rotateSpeed: number;

    enablePan: boolean;
    enablePanX: boolean;
    enablePanY: boolean;
    panSpeed: number;
    screenSpacePanning: boolean;
    keyPanSpeed: number;

    autoRotate: boolean;
    autoRotateSpeed: number;

    enableKeys: boolean;
    keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
    touches: { ONE: TOUCH; TWO: TOUCH };

    update(): boolean;

    rotateLeft(): void;
    rotateUp(): void;
    pan(): void;
    panLeft(): void;
    panUp(): void;
    dollyIn(): void;
    dollyOut(): void;

    listenToKeyEvents(domElement: HTMLElement): void;

    saveState(): void;
    saveStateExternal(): {
        target: Vector3,
        position: any,
        zoom: any
    }

    reset(): void;
    resetExternal(): void;

    getState(): STATE;

    dispose(): void;

    getPolarAngle(): number;

    getAzimuthalAngle(): number;

    // EventDispatcher mixins
    addEventListener(type: string, listener: (event: any) => void): void;

    hasEventListener(type: string, listener: (event: any) => void): boolean;

    removeEventListener(type: string, listener: (event: any) => void): void;

    dispatchEvent(event: { type: string; target: any }): void;
}

export class MapControls extends OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);
}
