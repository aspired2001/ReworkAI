
import { useState } from 'react';
import reworkLogo from '../assets/logo.png';
import { LayoutDashboard, Users, CreditCard, Briefcase,  PersonStanding,  HelpCircle, GitPullRequestArrow, Settings, MessageSquareWarning, Monitor, User } from 'lucide-react';


const navlinks = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        name: 'Post/Add Jobs',
        icon: Briefcase,
    },
    {
        name: 'Buy Credits',
        icon: CreditCard,
    },
    {
        name: 'Request Feature',
        icon: GitPullRequestArrow,
    },
    {
        name: 'Help & Support',
        icon: HelpCircle,
    },
    {
        name: 'Setting',
        icon: Settings,
    },
    {
        name: 'Interview',
        icon: PersonStanding,
    },
    {
        name: 'Team',
        icon: Users,
    },
    {
        name: 'Feedback',
        icon: MessageSquareWarning,
    },
    {
        name: 'Bulk server',
        icon: Monitor,
    },
    {
        name: 'Vendor',
        icon: User,
    },
];



function Navigation() {

    const [activeNavIndex, setActiveNavIndex] = useState(1);

    return (
        <div

            
            className = "px-4 md:px-10 py-8 flex flex-col border border-r-1 w-[20vw] h- bg-indigo-700 " >
            <div className="logo-div flex items-center mb- w-[10vw] h-[30px] ">
                <img src={reworkLogo} alt="Rework Logo" className="w-26" />
            </div>


            <div className="mt-10 flex flex-col space-y-4 md:space-y-8 text-[14px] ">
                {navlinks.map((item, index) => (
                    <div key={index} className={"text-white text-left font-sans flex items-center space-x-3 cursor-pointer" + (activeNavIndex === index ? " bg-[#FFFFFF] text-[#7148ec] font-semibold h-[40px] border-none rounded px-2 ":" " )}
                    onClick={()=>setActiveNavIndex(index)}
                    >

                        {item.icon && <item.icon className="w-6 h-6" />}
                        <span>{item?.name}</span>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Navigation;
