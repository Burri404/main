import { createSelector, Selector} from '@ngrx/store';
import { StudentRecords } from '../modals/student-records';

export interface AppState {
     studentRecords: StudentRecords[]
}

export const selectFeature = (state: AppState) => state.studentRecords;
export const selectAll = createSelector(selectFeature, (state:StudentRecords[])=> state)

