import { Container, Row } from "react-bootstrap"

export const MainScreen = ({title, children}) => {
    return(
        <Container>
            <Row>
                <div classname="page">
                    {title && (<>
                    <h1>{title}</h1>
                    </>)}
                    {children}
                </div>
            </Row>
        </Container>
    )
}