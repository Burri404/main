import { createAction, props} from '@ngrx/store';
import { StudentRecords } from '../modals/student-records';

//action list
export const actionList = {
    callStudentsRecordsApi: "[ STUDENT TABLE COMPONENT ] Call students records api",
    callStudentsRecordsApiSuccess: "[ STUDENT TABLE COMPOENT] Call student records api success"
}

//create actions
export const callStudentsRecordsApi = createAction(actionList.callStudentsRecordsApi)
export const callStudentsRecordsApiSuccess = createAction(actionList.callStudentsRecordsApiSuccess,
     props<{ payload : StudentRecords[] }> () );