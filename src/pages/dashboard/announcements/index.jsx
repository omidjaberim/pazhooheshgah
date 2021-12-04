import LayOut from "pages/layOut/layout"
import MyContainer from "components/Container"
import BigCard from "components/BigCard"
const Announcements = ()=>{
    return (
        <LayOut pageTitle= "اعلانات">
            <MyContainer>
                <BigCard title={"اعلانات"} >
                </BigCard>
            </MyContainer>
        </LayOut>
        )
}
export default Announcements