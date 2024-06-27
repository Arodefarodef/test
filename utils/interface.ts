export interface iCompany {
  companyname: string;
  email: string;
  password: string;
  role: string;
  address: string;
  logo: string;
  plan: string;
  plancost: number;
  staffs: {}[];
  project: {}[];
}

export interface iCompanyData extends iCompany, Document {}

export interface iStaffs {
  staffname: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  address: string;
  steps: {}[];
  company: {};
}

export interface iStaffsData extends iStaffs, Document {}

export interface iProject {
  title: string;
  dueData: string;
  assigned: string;
  task: {}[];
}

export interface iProjectData extends iProject, Document {}

export interface iTask {
  title: string;
  steps: {}[];
}

export interface iTaskData extends iTask, Document {}

export interface iSteps {
  title: string;
}

export interface iStepsData extends iSteps, Document {}
