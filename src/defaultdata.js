const introdata = [
    {className: "name", text: "John Doe", label:"Name*: "},
    {className: "email", text: "jdoe1234@fakemail.com", label:"Email*: ", type:"email"},
    {className: "number", text: "123-456-7890", label:"Phone Number*: "}
];

const educationdata = [
    {className: "name", text: "Odin University", label:"School Name*: "},
    {className: "major", text: "Web Development", label:"Title of Study*: "},
    {className: "datestart", text: "2021-08-15", label:"Start Date*: ", type:"date"},
    {className: "dateend", text: "2024-05-04", label:"End Date: ", type:"date"}
];

const experiencedata = [
    {className: "name", text: "Odin Inc.", label:"Company*: "},
    {className: "position", text: "Front-end Dev", label:"Position*: "},
    {className: "datestart", text: "2024-03-15", label:"Start Date*: ", type:"date"},
    {className: "dateend", text: "", label:"End Date: ", type:"date"},
    {className: "responsibility1", text: "Launch 5 pages for company website with React", label:"Responsibilities*: "},
    {className: "responsibility2", text: "Improve accessibility to AA for 20 pages", label:"Responsibilities*: "},
]

export {introdata, educationdata, experiencedata};