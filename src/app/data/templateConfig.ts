import { PattenConfig } from "../interface/shapesConfig";

export const templateList: PattenConfig[] = [
    {
        title: "5 x 5 Small Ellipse",
        description: "Small Ellipse pattens",
        createDate: new Date(),
        config: {
            rows: 5,
            cols: 5,
            paddingRows: 60,
            paddingCols: 60,
            shitfRows: 0,
            shitfCols: 0,
            density: 60,
            shapeSize: 30,
            shapes: "Ellipse",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "",
            randomMode: false,
            randomDensity: 1,
            effectsMode: "Null",
            effectsConfig: {
                color: "#FFFFFF",
                intensity: 1,
                layers: 5
            },
        },
    },
    {
        title: "15 x 15 Glow Ellipse",
        description: "Small Ellipse pattens",
        createDate: new Date(),
        config: {
            rows: 15,
            cols: 15,
            paddingRows: 80,
            paddingCols: 80,
            shitfRows: 0,
            shitfCols: 0,
            density: 80,
            shapeSize: 25,
            shapes: "Ellipse",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "",
            randomMode: false,
            randomDensity: 1,
            effectsMode: "Glow",
            effectsConfig: {
                color: "#FFFFFF",
                intensity: 1,
                layers: 5
            },
        },
    },
    {
        title: "60 x 30 Small Ellipse",
        description: "Bg Ellipse pattens",
        createDate: new Date(),
        config: {
            rows: 60,
            cols: 30,
            paddingRows: 120,
            paddingCols: 120,
            shitfRows: 0,
            shitfCols: 0,
            density: 120,
            shapeSize: 20,
            shapes: "Ellipse",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "",
            randomMode: false,
            randomDensity: 1,
            effectsMode: "Null",
            effectsConfig: {
                color: "#FFFFFF",
                intensity: 1,
                layers: 5
            },
        },
    },
    {
        title: "60 x 30 Ellipse Random",
        description: "Bg Ellipse pattens",
        createDate: new Date(),
        config: {
            rows: 60,
            cols: 30,
            paddingRows: 140,
            paddingCols: 140,
            shitfRows: 0,
            shitfCols: 0,
            density: 140,
            shapeSize: 18,
            shapes: "Ellipse",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "",
            randomMode: true,
            randomDensity: 0.5,
            effectsMode: "Null",
            effectsConfig: {
                color: "#FFFFFF",
                intensity: 1,
                layers: 5
            },
        },
    },
    {
        title: "60 x 30 Small Ellipse v3",
        description: "Bg Ellipse pattens",
        createDate: new Date(),
        config: {
            rows: 60,
            cols: 30,
            paddingRows: 160,
            paddingCols: 160,
            shitfRows: 0,
            shitfCols: 0,
            density: 160,
            shapeSize: 16,
            shapes: "Ellipse",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "",
            randomMode: false,
            randomDensity: 1,
            effectsMode: "Null",
            effectsConfig: {
                color: "#FFFFFF",
                intensity: 1,
                layers: 5
            },
        },
    },
    {
        title: "Glow Text",
        description: "Can generate neon text too",
        createDate: new Date(),
        config: {
            rows: 1,
            cols: 1,
            paddingRows: 160,
            paddingCols: 160,
            shitfRows: 0,
            shitfCols: 0,
            density: 160,
            shapeSize: 120,
            shapes: "Text",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "Hello mate",
            randomMode: false,
            randomDensity: 1,
            effectsMode: "Glow",
            effectsConfig: {
                color: "#4c46eb",
                intensity: 1,
                layers: 5
            },
        },
    },
    {
        title: "15 x 15 Rng Glow",
        description: "Small Ellipse pattens",
        createDate: new Date(),
        config: {
            rows: 15,
            cols: 15,
            paddingRows: 80,
            paddingCols: 80,
            shitfRows: 0,
            shitfCols: 0,
            density: 80,
            shapeSize: 25,
            shapes: "Ellipse",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "",
            randomMode: true,
            randomDensity: 0.5,
            effectsMode: "Glow",
            effectsConfig: {
                color: "#FFFFFF",
                intensity: 1,
                layers: 5
            },
        },
    },
    {
        title: "5 x 5 Rng Glow v2",
        description: "Small Ellipse pattens",
        createDate: new Date(),
        config: {
            rows: 5,
            cols: 5,
            paddingRows: 60,
            paddingCols: 60,
            shitfRows: 0,
            shitfCols: 0,
            density: 60,
            shapeSize: 30,
            shapes: "Ellipse",
            rotation: 0,
            color: "#FFFFFF",
            textContent: "",
            randomMode: true,
            randomDensity: 0.5,
            effectsMode: "Glow",
            effectsConfig: {
                color: "#FFFFFF",
                intensity: 1,
                layers: 5
            },
        },
    },
]