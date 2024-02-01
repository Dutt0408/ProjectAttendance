import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Checkbox } from "primereact/checkbox";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Attendance Success', detail: 'Thankyou for Attending Today\'s Sabha' });
      };

    const defaultValues = {
        checked: false
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.checked && show();

        reset();
    }; 

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                I've read and accept the terms & conditions.
                <Toast ref={toast} />
                <Controller
                    name="checked"
                    control={control}
                    rules={{ required: 'Accept is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
                            <Checkbox inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.checked)} />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        