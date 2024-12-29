import { createReducer, on } from "@ngrx/store";
import { StudentRecords } from "../modals/student-records";
import * as actions from "./students-records-action";

export const initState: { studentRecords : StudentRecords[] } = {
    studentRecords: [{
        name: "Deepak",
        city:"Ajmer",
        country: 'India',
        subject: "Rajasthan",
        passportDeclaration: "Yes",
        fitnessDeclaration: 'Yes',
        courseName: "Match",
        date: "14-11-1983",
        state: "Rajasthan",
        street: "5th street",
        email: "deepak@example.com",
        phone: '12333322222',
        postalCode: 12345
    }]
}


export const studentReducer = createReducer(
    initState,
    on(actions.callStudentsRecordsApiSuccess, ((state: any, { payload }: any) =>
         ({ ...state, studentRecords: payload })
    ))
)