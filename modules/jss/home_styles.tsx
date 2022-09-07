import { createUseStyles } from "react-jss";
import { theme } from "@chakra-ui/react";

const useHomeStyles = createUseStyles({
    mainContainer: {
        height: "100%",
        width: "100%",
    },
    splash: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
    },
    techSection: {
        padding: "5em",
    },
    wave: {
        position: "absolute",
        zIndex: 0,
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100px",
        background: "url('/wavesNegative.svg')",
        backgroundSize: "2000px 100px",
        backgroundRepeat: "no-repeat",
    },
   
    footer: {
        backgroundColor: theme.colors.blue[500],
        color: "white",
    }
})

export default useHomeStyles;