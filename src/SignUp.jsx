import { useFormik } from "formik";
import * as Yup from "yup";

const INPUT = ({
    label,
    type,
    value,
    name,
    onChange,
    onBlur,
    formikError,
    touched,
}) => {
    const inputStyle = {
        width: "90%",
        background: "transparent",
        border: "1px solid #aaa",
        padding: "0.35rem 1rem",
        borderRadius: "4px",
    };
    return (
        <div style={{ marginBottom: "2rem", position: "relative" }}>
            <label
                htmlFor={name}
                style={{
                    marginRight: "10px",
                    position: "absolute",
                    top: "-50%",
                    left: "5px",
                }}
            >
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                style={inputStyle}
            />
            {formikError && touched ? (
                <div style={{ color: "#f00", fontSize: "12px", marginTop: "6px" }}>
                    {formikError}
                </div>
            ) : null}
        </div>
    );
};

export default function SignUp() {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
    };

    const onSubmit = (values) => {
        console.log({ values });
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("REQUIRED"),
        email: Yup.string().email("INVALID EMAIL").required("REQUIRED"),
        phone: Yup.string().required("REQUIRED").min(10),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnBlur: true,
        validateOnMount: false,
        
    });

    const formWrapperStyle = {
        border: "1px solid #2b2b2b33",
        margin: "2rem auto",
        padding: "3rem 2rem 0 2rem",
        minWidth:'300px',
        maxWidth:'500px',
        width: "50%",
        background: "#f6f6f6",
        borderRadius: "8px",
        boxShadow: "0 0 6px #00000044",
    };

    const submitBTN = {
        border : 'none',
        padding: '1rem 2rem',
        background: '#222',
        color: '#fff',
        marginBottom: '10px'
        
    }

    const formData = [
        {
            id: 1,
            label: "Name",
            type: "text",
            value: formik.values.name,
            name: "name",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            formikError: formik.errors.name,
            touched: formik.touched.name,
        },
        {
            id: 2,
            label: "Email",
            type: "email",
            value: formik.values.email,
            name: "email",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            formikError: formik.errors.email,
            touched: formik.touched.email,
        },
        {
            id: 3,
            label: "Phone No",
            type: "text",
            value: formik.values.phone,
            name: "phone",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            formikError: formik.errors.phone,
            touched: formik.touched.phone,
        },
    ];
    return (
        <div style={formWrapperStyle}>
            <form onSubmit={formik.handleSubmit}>
                {formData &&
                    formData.map((val) => {
                        return (
                            <INPUT
                                key={val.id}
                                label={val.label}
                                type={val.type}
                                value={val.value}
                                name={val.name}
                                onChange={val.onChange}
                                onBlur={val.onBlur}
                                formikError={val.formikError}
                                touched={val.touched}
                            />
                        );
                    })}

                    <button type="submit" style={submitBTN}>Submit</button>
            </form>
        </div>
    );
}
