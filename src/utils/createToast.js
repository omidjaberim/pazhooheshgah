import  {toast}  from 'react-toastify';

export const notify = (prop) => {
    const {message, notType} = prop;
    const customId = Symbol();
    toast.warn(message, {
        toastId: customId.toString(),
        draggable:true,
        delay : 4000,
        pauseOnHover:true,
        rtl:true,
        type:notType,
        closeOnClick: true,
    });
}