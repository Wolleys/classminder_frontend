export const addValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    age: "",
    admin_number: "",
    password: "",
    confirm_password: "",
    course_id: "",
    class_id: "",
};

export const editValues = (selectedRowData) => {
    return {
        first_name: selectedRowData?.first_name || "",
        middle_name: selectedRowData?.middle_name || "",
        last_name: selectedRowData?.last_name || "",
        email: selectedRowData?.email || "",
        age: selectedRowData?.age || "",
        admin_number: selectedRowData?.admin_number || "",
        course_id: selectedRowData?.course_id || [],
        class_id: selectedRowData?.class_id || "",
    };
};
