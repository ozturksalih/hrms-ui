import {  Row , Col} from "reactstrap";
import  Filters from "./Filters";
import JobList from "../pages/JobList";

export default function Dashboard() {
    return (
        
            <Row>
                <Col xs="3"><Filters/></Col>
                <Col xs="9"><JobList/></Col>
            </Row>
        
    )
}