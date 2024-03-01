import Stepper from "./stepper";


function Content() {
    return (
        <div className="flex flex-col py-2 px-4 md:px-10 bg-[#f0f1f1] w-full md:w-[80vw]  overflow-y-scroll overflow-x-scroll ">
            <h1 className="text-4xl md:text-[50px] font-bold mb-4">Complete Profile</h1>
            <div className="w-full md:w-[75vw]  max-w-[1300px] h-[750px] bg-white mx-auto my-2 md:my-2">
                <Stepper/>
            </div>
        </div>
    );
}

export default Content;
