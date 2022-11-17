import { css } from "@emotion/react"

const headerCss = css({
    position: "fixed",
    height: "70px",
    display: "flex",
    alignItems: "center",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#eee",
    padding: "0 252px 0 249px"
})

const headerTitleCss = css({
    fontSize: "30px",
    color: "#828282",
    fontWeight: 700,
    flex: 1
})

export { headerCss, headerTitleCss };