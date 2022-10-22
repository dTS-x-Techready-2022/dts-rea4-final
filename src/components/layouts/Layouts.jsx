import Container from "@mui/material/Container";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
const Layouts =({children}) => {
    return(
<Container>

        <Header />
        <main>{children}</main>
        <Footer />

</Container>
    )
}

export default Layouts