export const InputDefault = ({labelProps, inputProps}) => {
    return(
        <div className="w-full">
            <label
                className="block text-gray-700 text-caption-medium mb-[6px]"
                htmlFor={inputProps.name}
                {...labelProps}>
                {labelProps.title}
            </label>
            <div className="w-full px-[14px] py-[10px] relative mb-[4px] border  border-gray-300 rounded-[8px]">
                <input className="focus:outline-none w-full " {...inputProps} required/>
            </div>
        </div>
    );
};
export const InputPrimary = ({labelProps, inputProps}) => {
    return(
        <div className="w-full">
            <label
                className="block text-gray-700 text-caption-medium mb-[4px]"
                htmlFor={inputProps.name}
                {...labelProps}>
                {labelProps.title}
            </label>
            <div className="flex w-full h-[56px] p-[16px] relative mb-[4px] border  border-gray-300 rounded-[8px]">
                <input className="focus:outline-none w-[316px]" {...inputProps} required/>
            </div>
            <p className="invisible peer-invalid:visible text-error">
                Please enter a valid email address
            </p>
        </div>
    );
};
export const CheckBox = ({ label }) => {
    return(
        <div>
            <label className="flex gap-1">
                <input type="checkbox" className="outline-0" required/>
                <span className="text-gray-600 text-body">{label}</span>
            </label>
        </div>
    )
};
export const TextareaDefault = ({labelProps, inputProps}) => {
    return(
        <div className="w-full">
            <label
                className="block text-gray-700 text-caption-medium mb-[4px]"
                htmlFor={inputProps.name}
                {...labelProps}>
                {labelProps.title}
            </label>
                <textarea name="message" id="message" cols="30" rows="3" {...inputProps} required className="flex w-full h-[132px] p-[16px] relative mb-[4px] peer border border-gray-300 rounded-[8px] outline-0"/>
                <p className="invisible peer-invalid:visible text-error">
                This field cannot be empty
            </p>
        </div>
    );
};