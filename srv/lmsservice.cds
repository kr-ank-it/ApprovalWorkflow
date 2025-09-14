
using {approvalworkflow.lms as lms} from '../db/Schema';

service Lms {
    
    // @(restrict:[
    //     {
    //         grant: ['READ'],
    //         to: ['User','Admin'] 
    //     },
    //     {
    //         grant: ['CREATE', 'UPDATE', 'DELETE'],
    //         to: ['Admin']
    //     },
    // ])
    entity Students as projection on lms.Students;
    @readonly
    entity Courses as projection on lms.Courses;
    @readonly
    @requires:'Admin'
    entity Enrollments as projection on lms.Enrollments;
    @readonly
    entity Contents as projection on lms.Contents;

}