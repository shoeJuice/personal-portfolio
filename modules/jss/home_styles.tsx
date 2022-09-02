import { createUseStyles } from "react-jss";

const useHomeStyles = createUseStyles({
    mainContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "35em",
    },
    splash: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "5em",
        marginBottom: "15em",
        height: "100%",
        width: "100%",
    },
    page: {
        height: "100%",
        width: "100%"
    }
})

export default useHomeStyles;