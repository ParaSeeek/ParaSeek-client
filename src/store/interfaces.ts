
//Profile
export interface User {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    username: string;
    dob: string;
    gender: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

//Qualifications
export interface Education {
    levelOfEducation: string;
    fieldOfStudy: string;
    boardOrUniversity: string; //new
    institute: string; //new
    from: string; //new
    to: string; //new
}

export interface Experience {
    jobTitle: string;
    companyName: string;
    certificate: string;
    description?: string; //new
    from: string; //new
    to: string; //new
}
export interface Certifications {
    certificationName: string;
    link: string;
}
// new
export interface Projects {
    title: string;
    overview: string;
    role: string;
    link: string;
}

export interface Qualifications {
    education: Education[],
    skills: string[],
    experience: Experience[],
    certifications: Certifications[],
    languages: string[],
    projects: Projects[] //new
}


//Preferences
interface WorkSchedule {
    days: string,
    shifts: string
}
interface MinimumBasePay {
    amount: number,
    payPeriod: string
}

export interface Preferences {
    jobTitles: string[],
    jobTypes: string[],
    workSchedule: WorkSchedule,
    minimumBasePay: MinimumBasePay,
    remote: string
}


//Resume-wizard

export interface ResumeTemplate {
    id: string;
    name: string;
    image: string
}

interface Links {
    title: string,
    url: string
}
export interface ResumeDraft {
    //resume-header
    name: string;
    email: string;
    phone: string;
    address: string;
    links?: Links[];
    //personal-info section-2
    gender: string;
    dob: string;
    nationality: string;
    //other sections
    professionalOverview: string;
    declaration: string;
    hobbies: string[];
    displayDate: string;
}
export interface FriendReq {
    sender: Member,
    receiver: string,
    _id: string
}

export interface Friend {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    profilePic: string;
}
export interface Participant {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    profilePic: string;
}
export interface Member {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    profilePic: string;
}

export interface Message {
    _id: string;
    sender: Participant,
    Receiver: Participant,
    message: string,
    createdAt: string,
    updatedAt: string
}

export interface Community {
    _id: string;
    name: string;
    description: string;
    owner: string;
    members: Member[];
    banned: string[];
    avatar: string;
    coverImage: string;
}

export interface CommunityMessage {
    _id: string;
    sender: Member;
    community: Community;
    message: string;
    createdAt: string;
    updatedAt: string;
}