import PropTypes from 'prop-types'; // Import prop-types library
import { useState } from 'react';

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

const dropDownOptionShape = PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
});

const SelectOption = ({ label, options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col flex-1 px-5">
            <div className="leading-[140%] text-zinc-800">{label}</div>
            <select
                value={selectedOption}
                onChange={handleChange}
                className="mt-2 rounded-xl bg-slate-200 p-2 font-medium text-black"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

SelectOption.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(dropDownOptionShape).isRequired,
};

const SkillBadge = ({ skill }) => (
    <div className="flex flex-col justify-center px-2.5 py-1 bg-white rounded-[10000000000px]">
        <div className="flex gap-1.5 justify-between">
            <div>{skill.name}</div>
            <img
                loading="lazy"
                alt={skill.alt}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/181226891e0ce3572a5df62e4cd7f4ac32456fdfd90c6d5fa71dd35e5e40aadd?apiKey=b0951f87dee4449fa252b5f3cfc3b012&"
                className="my-auto aspect-square fill-zinc-500 w-[7px]"
            />
        </div>
    </div>
);

SkillBadge.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
};

const Form2 = () => {
    const skills = [
        { name: 'Python', alt: 'Python logo' },
        { name: 'Java', alt: 'Java logo' },
        { name: 'UI/UX', alt: 'UI/UX logo' },
        { name: 'Frontend', alt: 'Frontend logo' },
        { name: 'JavaScript', alt: 'JavaScript logo' },
    ];


    return (
        <section className="flex flex-col justify-center
        ml-6  text-xl w-[70vw]  ">
            <header className="flex gap-5 justify-between  ">
                <SelectOption label={"Job Title"} options={dropDownOptions} />
                <SelectOption label={"Department"} options={dropDownOptions} />
            </header>
            <main>
                <div className="mt-5 w-full leading-[140%] text-zinc-800 max-md:max-w-full ml-6 text-xl"> Select top 5 skills </div>
                <div className="flex gap-2.5 justify-between py-3.5 pr-20 pl-2.5 mt-2 text-xs font-medium whitespace-nowrap rounded-xl bg-neutral-100 text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    {skills.map(skill => (
                        <SkillBadge key={skill.name} skill={skill} />
                    ))}
                </div>
                <section className="grid grid-cols-2 gap-2 text-xl ">
                    <SelectOption label={"Over all experience"} options={dropDownOptions} />
                    <SelectOption label={"Minimum Experience"} options={dropDownOptions} />
                    <SelectOption label={"Work type"} options={dropDownOptions} />
                    <SelectOption label={"Location"} options={dropDownOptions} />
                    <SelectOption label={"Education"} options={dropDownOptions} />
                    <SelectOption label={"Field of Study"} options={dropDownOptions} />
                </section>
            </main>

        </section>
    );
};

export default Form2;