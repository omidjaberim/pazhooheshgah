import LayOut from "pages/layOut/layout"
import MyContainer from "components/Container"
import BigCard from "components/BigCard"
const RawData = ()=>{
    return (
        <LayOut pageTitle= "داده های خام">
            <MyContainer>
                <BigCard title={"داده های خام"} >
                   
                </BigCard>
            </MyContainer>
        </LayOut>
        )
}
export default RawData