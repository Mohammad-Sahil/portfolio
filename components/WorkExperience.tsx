import styles from '../styles/Experience.module.css';
import WorkExperienceCard from './WorkExperienceCard';

const WorkExperienceArray = [
    {
        title: "Full Stack Intern",
        company: "TalentZ.AI",
        link: "https://www.talentz.ai/",
        date: "August, 2022 - Present",
        list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",

    },
    {
        title: "Contractor",
        company: "Masterji.online",
        link: "http://masterji.online/",
        date: "July, 2022 - August, 2022",
        list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
    },
    {
        title: "Web Developer Intern",
        company: "Ask Quick Global",
        link: "#",
        date: "January 2021 - February, 2021",
        list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
    },
    {
        title: "Project Lead",
        company: "VRIDDHI - eSports Fest",
        link: "https://www.vriddhinitr.com/",
        date: "January 2022 - February, 2022",
        list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",
        list3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utf.",

    }
]

const WorkExperience = () => {
  return (
    <>
        <div className="row">
            {WorkExperienceArray.map((item, index) => {
                return (
                    <WorkExperienceCard
                        key={index}
                        title={item.title}
                        company={item.company}
                        link={item.link}
                        date={item.date}
                        list1={item.list1}
                        list2={item.list2}
                        list3={item.list3}
                     />
                )
            })}
        </div>
    </>
  )
}

export default WorkExperience