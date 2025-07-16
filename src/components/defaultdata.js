const introdata = [
    {className: "name", text: "John Doe", label:"Name*: ", required: true},
    {className: "email", text: "jdoe1234@fakemail.com", label:"Email*: ", type:"email", required: true},
    {className: "number", text: "123-456-7890", label:"Phone Number*: ", required: true}
];

const educationdata = [
    {className: "schoolname", text: "Odin University", label:"School Name*: ", required: true},
    {className: "major", text: "Web Development", label:"Title of Study*: ", required: true},
    {className: "datestart", text: "2021-08-15", label:"Start Date*: ", type:"date", required: true},
    {className: "dateend", text: "2024-05-04", label:"End Date (Leave clear if current): ", type:"date"}
];

const experiencedata = { data:[
    {className: "companyname", text: "Odin Inc.", label:"Company*: ", required: true},
    {className: "position", text: "Front-end Dev", label:"Position*: ", required: true},
    {className: "datestart", text: "2024-03-15", label:"Start Date*: ", type:"date", required: true},
    {className: "dateend", text: "", label:"End Date (Leave clear if current): ", type:"date"},
],
    extendable: {className: "responsibility", text: "Launch 5 pages for company website with React", label:"Responsibility*: ", required: true}
}

export {introdata, educationdata, experiencedata};