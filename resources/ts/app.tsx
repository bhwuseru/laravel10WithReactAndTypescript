import * as React from "react";
import { createRoot } from 'react-dom/client';
import "../css/app.css";

const App = () => {
    const title: string = "Laravel 9 Vite with TypeScript React !!";
    return <h1 className="text-red-400">{title}</h1>;
};
const container = document.getElementById('app') as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
