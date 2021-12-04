import LayOut from "pages/layOut/layout"
import MyContainer from "components/Container"
import BigCard from "components/BigCard"
import Table from "components/Table"

const Bill = ()=>{
    const tableCols = [
        {txt:'شماره',field :'no'},
        {txt:'وضعیت',field :'status'},
        {txt:'مبلغ محاسبه مالی (به تومان)',field :'fee'},
        {txt:'میزان مصرف',field :'spend'},
        {txt:'گذاشتن اعتراض',field :'claim'},
    ]
    const tableRows = [
        {
            no : 1,
            status : '5500',
            fee : '2000',
            spend : 'یکشنبه 12 بهمن 1399 9:32',
            claim : 'یکشنبه 12 بهمن 1399 10:22'
        },
        {
            no : 2,
            status : '8500',
            fee : '12000',
            spend : "4520",
            claim : '23000'
        }
        ]
    return (
    <LayOut pageTitle="محاسبات مالی">
        <MyContainer>
            <BigCard title={"محاسبات مالی"} >
                <Table  rows={tableRows} cols={tableCols} />
            </BigCard>
        </MyContainer>
    </LayOut>
    )
}
export default Bill