import { useState } from 'react';
import Form2 from './Form2';
import Form3 from './form3'

// JobDescriptionForm Component
const JobDescriptionForm = () => {
  const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      userInfo: { name: '', email: '' },
      companyInfo: { companyName: '', industry: '' },
      paymentInfo: { cardNumber: '', expiryDate: '', cvv: '' },
      jobDescription: { customers: '', file: '' },
    });

    const handleInputChange = (step, field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [step]: {
          ...prevData[step],
          [field]: value,
        },
      }));
    };

    const handleNextStep = () => {
      setCurrentStep((prevStep) => prevStep + 1);
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log('Form submitted:', formData);
    // };

    const dropDownOptions = ["Option 1", "Option 2", "Option 3"];

    return (
     
        <div>
          <ol className="items-center w-[100vw] h-[80px] space-y-4 sm:flex sm:space-x-28 sm:space-y-0 rtl:space-x-reverse ml-4">
            <li className={`flex items-center space-x-2.5 rtl:space-x-reverse ${currentStep === 1 ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>
              <span>
                <h3 className="font-medium leading-tight">Upload JD</h3>
              </span>
            </li>

            <li className={`flex items-center space-x-2.5 rtl:space-x-reverse ${currentStep === 2 ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>
              <span>
                <h3 className="font-medium leading-tight">Job Details</h3>
              </span>
            </li>

            <li className={`flex items-center space-x-2.5 rtl:space-x-reverse ${currentStep === 3 ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>
              <span>
                <h3 className="font-medium leading-tight">Skills</h3>
              </span>
            </li>
          </ol>



        <div className='flex justify-center '>
          <div className={currentStep === 1 ? '' : 'hidden'}>
            {/* Step 1 Form */}
            {/* Job Description Form */}
            <div className="flex flex-col mt-28 ">
              {/* ... (Job Description Form) ... */}
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <h1 className='text-[35px] font-bold mb-4'>Upload Job Description</h1>
                <div className="flex flex-col items-start justify-start w-full gap-1.5">
                  <label htmlFor="selectoption" className="!text-gray-700 text-xl font-semibold  ">
                    Select Customers
                  </label>
                  <select
                    id="selectoption"
                    name="selectoption"
                    value={formData.jobDescription.customers}
                    onChange={(e) => handleInputChange('jobDescription', 'customers', e.target.value)}
                    className="w-[540px] h-[60px] bg-slate-200 gap-px font-medium border rounded-md "
                  >
                    <option value="" disabled>Select Option</option>
                    {dropDownOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                  <label htmlFor="choose_file" className="!text-gray-700 text-xl font-semibold ">
                    Select Job Description file in (Doc/Docx/PDF format only){" "}
                  </label>
                  <input
                    type="file"
                    id="choose_file"
                    name="choose_file"
                    placeholder="Choose File"
                    value={formData.jobDescription.file}
                    onChange={(e) => handleInputChange('jobDescription', 'file', e.target.value)}
                    style={{
                      width: '540px',
                      height: '60px',
                      backgroundColor: '#CBD5E0',
                      fontSize: '16px',
                      marginTop: '5px',
                      border: ' #718096',
                      borderRadius: '8px',
                      color: '#4A5568',
                      textAlign: 'center',
                      outline: 'none',
                      '::placeholder': {
                        color: 'transparent',
                        textAlign: 'center',
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full gap-3.5 mt-6">
              <button onClick={handleNextStep} className="w-full h-[60px] !text-gray-600 text-[20px] font-medium border-gray-700 border border-solid rounded-[10px]  ">
                START AI PARSING
              </button>
              <div className="h-[47px] w-full relative">
                <div className="justify-center h-px w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-300_01 absolute" />
                <button
                  onClick={handleNextStep}
                  className="w-max left-0 bottom-0 right-0 top-0 m-auto !text-black-900 min-w-[40px] absolute"
                >
                  or
                </button>
              </div>
              <button onClick={handleNextStep} className="w-full font-medium h-[60px] rounded-[10px] bg-purple-700 text-white text-[20px] " >
                USE AI TO CREATE JD FROM SCRATCH
              </button>
            </div>
          </div>
        </div>

        <div className={currentStep === 2 ? '' : 'hidden'}>
          <Form2 />
          <div className='m-auto'>
          <button
            onClick={handleNextStep}
            className="w-[30vw]  font-medium h-[60px] rounded-[10px] bg-purple-700 text-white text-[20px] mt-16 "
          >
            Generate JD with AI magic
          </button>
          </div>
        </div>

        <div className={currentStep === 3 ? '' : 'hidden'}>
          <Form3 />
        </div>
      </div>
    );
  };

  return <Stepper />;
};

export default JobDescriptionForm;
