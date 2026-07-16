import * as Yup from "yup"


export const loginDTO= Yup.object({
    username:Yup.string().required(),
    password:Yup.string().required(),
})