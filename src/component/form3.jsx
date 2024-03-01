import { useState } from "react";
import PropTypes from "prop-types";

const DropDown = ({ options, id }) => {
    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <select
            id={id}
            value={selectedValue}
            onChange={handleChange}
            className="mt-2.5 w-full px-5 py-4 text-black bg-neutral-100 rounded-xl"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

DropDown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    id: PropTypes.string.isRequired,
};

const ActionButton = ({ text, bgColor, textColor }) => (
    <button
        className={`flex justify-center items-center px-16 py-3.5 ${textColor} ${bgColor} rounded-xl border border-solid max-md:px-5`}
        tabIndex="0"
    >
        {text}
    </button>
);

ActionButton.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};

const Form3 = () => {
    const dropDownOptions = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];

    return (
        <div className="flex flex-col m-auto mt-32 text-sm font-medium max-w-[500px]">
            <section>
                <h2 className="w-full text-2xl text-black max-md:max-w-full">Select Interview Language</h2>
                <p className="mt-1.5 w-full text-stone-500 max-md:max-w-full">
                    Default interviews are in English, but if Hindi is chosen, candidates can opt for interviews in either Hindi or English.
                </p>
                <DropDown options={dropDownOptions} id="languageSelect" />
            </section>
            <section>
                <h2 className="mt-6 w-full text-2xl text-black max-md:max-w-full">Coding Round Required*</h2>
                <p className="mt-1.5 w-full text-stone-500 max-md:max-w-full">
                    This is an additional 20 mins coding round over and above the AI interview.
                </p>
                <DropDown options={dropDownOptions} id="codingRoundSelect" />
            </section>
            <div className="flex gap-5 justify-between mt-12 w-full text-base whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <ActionButton text="Back" bgColor="border-violet-800" textColor="text-violet-800" />
                <ActionButton text="Confirm" bgColor="bg-violet-800" textColor="text-white" />
            </div>
        </div>
    );
};

export default Form3;
