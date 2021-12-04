import RightMenu from "./rightMenu";
const LayOut = (props)=>{  
    const {children, pageTitle} = props;  
    return (
        <RightMenu children={children} pageTitle={pageTitle} />
    )
}
export default LayOut;