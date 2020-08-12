import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./src/screens/Home/index";

export default function App() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Home />
        </>
    );
}
