
using {approvalworkflow.lms as lms} from '../db/Schema';

service Lms {
    
    @readonly
    entity Students as projection on lms.Students;
    @readonly
    entity Courses as projection on lms.Courses;
    @readonly
    entity Enrollments as projection on lms.Enrollments;
    @readonly
    entity Contents as projection on lms.Contents;

}