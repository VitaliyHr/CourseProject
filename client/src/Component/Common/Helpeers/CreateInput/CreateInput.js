import { createField } from "../../Field/Field"
import { Input } from "../../FormInput/Input"
import { require } from "../../../../Validators/Validate"

export const CreateInput = (name,cx)=>{
    return createField('',name,"text",Input,[require],cx,0)
}