import React from "react";
import Select from "react-select";

const options = [
    { value: "Berita", label: "Berita" },
    { value: "Olahraga", label: "Olahraga" },
    { value: "Mancanegara", label: "Mancanegara" },
];

const SelectForm = () => <Select options={options} />;

export default SelectForm;
